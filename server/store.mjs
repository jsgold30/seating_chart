import { DatabaseSync } from 'node:sqlite';
import { randomBytes, randomUUID, createHash } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { planGuestImport } from './import-plan.mjs';
import { defaultFloorPlan } from '../shared/floor-plan.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const token = () => randomBytes(32).toString('base64url');
export class AppError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

export const tableLayout = [
  [1, 160, 135], [2, 75, 190], [3, 160, 245], [4, 75, 300],
  [5, 160, 350], [6, 75, 410], [7, 245, 425], [8, 390, 425],
  [9, 465, 350], [10, 465, 250], [11, 465, 130],
  [12, 570, 350], [13, 570, 250], [14, 570, 130],
  [15, 675, 350], [16, 675, 250], [17, 675, 130],
];

export function openStore(filename) {
  if (filename !== ':memory:') mkdirSync(dirname(filename), { recursive: true });
  const db = new DatabaseSync(filename);
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS weddings (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, date TEXT NOT NULL DEFAULT '',
      owner_hash TEXT NOT NULL, editor_hash TEXT NOT NULL, sync_hash TEXT,
      revision INTEGER NOT NULL DEFAULT 0, demo INTEGER NOT NULL DEFAULT 0,
      imported_at TEXT, synced_at TEXT, created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tables (
      id TEXT PRIMARY KEY, wedding_id TEXT NOT NULL REFERENCES weddings(id) ON DELETE CASCADE,
      number INTEGER NOT NULL, name TEXT NOT NULL, capacity INTEGER NOT NULL,
      x REAL NOT NULL, y REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS guests (
      id TEXT PRIMARY KEY, wedding_id TEXT NOT NULL REFERENCES weddings(id) ON DELETE CASCADE,
      name TEXT NOT NULL, household TEXT NOT NULL DEFAULT '', meal TEXT NOT NULL DEFAULT '',dietary TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '', source TEXT NOT NULL, source_key TEXT,
      attending INTEGER NOT NULL DEFAULT 1, table_id TEXT REFERENCES tables(id),seat_index INTEGER,
      UNIQUE(wedding_id, source, source_key)
    );
    CREATE TABLE IF NOT EXISTS floor_plans (
      wedding_id TEXT PRIMARY KEY REFERENCES weddings(id) ON DELETE CASCADE,
      revision INTEGER NOT NULL DEFAULT 0, config TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS guests_wedding ON guests(wedding_id);
    CREATE INDEX IF NOT EXISTS tables_wedding ON tables(wedding_id);
  `);

  if(!db.prepare('PRAGMA table_info(guests)').all().some(column=>column.name==='dietary')){
    db.exec("ALTER TABLE guests ADD COLUMN dietary TEXT NOT NULL DEFAULT ''");
  }
  if(!db.prepare('PRAGMA table_info(guests)').all().some(column=>column.name==='seat_index')){
    db.exec('ALTER TABLE guests ADD COLUMN seat_index INTEGER');
  }
  // Preserve the original visual order when migrating table-only assignments.
  for(const table of db.prepare('SELECT id,capacity FROM tables').all()){
    const assigned=db.prepare('SELECT id,seat_index FROM guests WHERE table_id=? AND attending=1 ORDER BY name COLLATE NOCASE,id').all(table.id);
    const used=new Set(assigned.filter(g=>g.seat_index!==null).map(g=>g.seat_index));
    for(const guest of assigned.filter(g=>g.seat_index===null)){
      const seat=Array.from({length:table.capacity},(_,i)=>i).find(i=>!used.has(i));
      if(seat!==undefined){db.prepare('UPDATE guests SET seat_index=? WHERE id=?').run(seat,guest.id);used.add(seat);}
    }
  }
  db.exec('CREATE UNIQUE INDEX IF NOT EXISTS guest_chair ON guests(table_id,seat_index) WHERE table_id IS NOT NULL AND attending=1 AND seat_index IS NOT NULL');
  function transaction(fn) {
    db.exec('BEGIN IMMEDIATE');
    try { const result = fn(); db.exec('COMMIT'); return result; }
    catch (error) { db.exec('ROLLBACK'); throw error; }
  }
  function wedding(id) {
    const row = db.prepare('SELECT * FROM weddings WHERE id=?').get(id);
    if (!row) throw new AppError(404, 'This seating plan could not be found.');
    return row;
  }
  function bump(id) { db.prepare('UPDATE weddings SET revision=revision+1 WHERE id=?').run(id); }
  function authorize(id, key, sync = false) {
    if (!key || typeof key !== 'string') throw new AppError(401, 'Open your private invitation link to access this seating plan.');
    const row = db.prepare('SELECT owner_hash, editor_hash, sync_hash FROM weddings WHERE id=?').get(id);
    if (!row) throw new AppError(401, 'This invitation link is invalid or has been replaced.');
    const digest = hash(key);
    if (sync) {
      if (row.sync_hash && digest === row.sync_hash) return 'sync';
    } else {
      if (digest === row.owner_hash) return 'owner';
      if (digest === row.editor_hash) return 'editor';
    }
    throw new AppError(401, 'This invitation link is invalid or has been replaced.');
  }
  function state(id, role = 'editor') {
    const w = wedding(id);
    const guests = db.prepare(`SELECT id,name,household,meal,dietary,email,source,table_id AS tableId,seat_index AS seatIndex FROM guests WHERE wedding_id=? AND attending=1 ORDER BY name COLLATE NOCASE,id`).all(id);
    const tables = db.prepare('SELECT id,number,name,capacity,x,y FROM tables WHERE wedding_id=? ORDER BY number').all(id);
    return { id, name: w.name, date: w.date, revision: w.revision, demo: !!w.demo, importedAt: w.imported_at,
      syncedAt: w.synced_at, syncConfigured: !!w.sync_hash, role, guests, tables, floorPlan: floorPlan(id) };
  }
  function floorPlan(id) {
    const row=db.prepare('SELECT revision,config FROM floor_plans WHERE wedding_id=?').get(id);
    return row ? {...JSON.parse(row.config),revision:row.revision} : defaultFloorPlan();
  }
  function updateFloorPlan(id, data) {
    transaction(()=>{
      wedding(id);
      const previous=floorPlan(id);
      if(data.expectedRevision!==previous.revision)throw new AppError(409,'The floor plan changed on another device. Close and reopen Customize floor plan to load the latest version.');
      const next={elements:data.elements ?? previous.elements,image:data.image===undefined ? previous.image : data.image};
      db.prepare(`INSERT INTO floor_plans(wedding_id,revision,config) VALUES(?,?,?)
        ON CONFLICT(wedding_id) DO UPDATE SET revision=excluded.revision,config=excluded.config`)
        .run(id,previous.revision+1,JSON.stringify(next));
      bump(id);
    });
  }
  function create(name, date = '', demo = false) {
    const id = randomUUID(); const ownerKey = token(); const editorKey = token();
    transaction(() => {
      db.prepare('INSERT INTO weddings(id,name,date,owner_hash,editor_hash,demo,created_at) VALUES(?,?,?,?,?,?,?)')
        .run(id, name, date, hash(ownerKey), hash(editorKey), Number(demo), new Date().toISOString());
      const insert = db.prepare('INSERT INTO tables(id,wedding_id,number,name,capacity,x,y) VALUES(?,?,?,?,?,?,?)');
      for (const [number,x,y] of tableLayout) insert.run(randomUUID(),id,number,`Table ${String(number).padStart(2,'0')}`,10,x,y);
      insert.run(randomUUID(),id,18,'Head table',30,320,520);
      if (demo) seed(id);
    });
    return { id, key: ownerKey, editorKey };
  }
  function seed(id) {
    const groups = [
      ['Bennett', ['Charlotte','Oliver','Amelia','James']], ['Rivera',['Sofia','Mateo','Isabella','Lucas']],
      ['Morgan',['Emma','Noah','Ava','Liam']], ['Chen',['Grace','Henry','Lily','Ethan']],
      ['Patel',['Maya','Arjun','Priya','Dev']], ['Williams',['Evelyn','William','Harper','Jack']],
      ['Goldman',['Sarah','Daniel','Rachel','David']], ['Reed',['Chloe','Benjamin','Zoe','Leo']],
      ['Park',['Ella','Nathan','Hannah','Theo']], ['Martinez',['Luna','Sebastian','Mia','Gabriel']],
      ['Thompson',['Abigail','Samuel','Emily','Owen']], ['Cohen',['Rebecca','Isaac','Leah','Aaron']],
      ['Brooks',['Madison','Alexander','Scarlett','Finn']], ['Davis',['Victoria','Miles','Nora','Elijah']],
      ['Wilson',['Alice','Oscar','Lucy','Felix']], ['Lewis',['Julia','Hugo','Clara','Louis']],
      ['Anderson',['Rose','Arthur','Ivy','Jude']], ['Taylor',['Audrey','George','Hazel','Max']],
    ];
    const tables = db.prepare('SELECT id FROM tables WHERE wedding_id=? ORDER BY number').all(id);
    const insert = db.prepare('INSERT INTO guests(id,wedding_id,name,household,meal,source,table_id,seat_index) VALUES(?,?,?,?,?,?,?,?)');
    let n = 0;
    for (const [last,firsts] of groups) for (const first of firsts) {
      const table = n < 54 ? tables[Math.floor(n / 6)].id : null;
      insert.run(randomUUID(), id, `${first} ${last}`, `${last} family`, ['Chicken','Vegetarian','Fish'][n % 3], 'demo', table,table?n%6:null); n++;
    }
  }
  function assign(id, guestId, tableId, seatIndex, swap=false) {
    transaction(() => {
      const guest = db.prepare('SELECT * FROM guests WHERE id=? AND wedding_id=? AND attending=1').get(guestId,id);
      if (!guest) throw new AppError(404, 'This guest is no longer attending. Refresh the guest list.');
      if (guest.table_id === tableId&&(seatIndex===undefined||guest.seat_index===seatIndex)) return;
      let chosenSeat=null;
      if (tableId) {
        const table = db.prepare('SELECT * FROM tables WHERE id=? AND wedding_id=?').get(tableId,id);
        if (!table) throw new AppError(404, 'This table could not be found.');
        if(seatIndex!==undefined&&(seatIndex<0||seatIndex>=table.capacity))throw new AppError(400,'Choose a chair within this table’s capacity.');
        const other=seatIndex===undefined?null:db.prepare('SELECT id FROM guests WHERE table_id=? AND seat_index=? AND attending=1 AND id<>?').get(tableId,seatIndex,guestId);
        if(other&&swap){
          db.prepare('UPDATE guests SET table_id=NULL,seat_index=NULL WHERE id=?').run(guestId);
          db.prepare('UPDATE guests SET table_id=?,seat_index=? WHERE id=?').run(guest.table_id,guest.seat_index,other.id);
          db.prepare('UPDATE guests SET table_id=?,seat_index=? WHERE id=?').run(tableId,seatIndex,guestId);bump(id);return;
        }
        const { count } = db.prepare('SELECT COUNT(*) AS count FROM guests WHERE table_id=? AND attending=1').get(tableId);
        if (count >= table.capacity) throw new AppError(409, `${table.name} is full. Choose another table or increase its capacity.`);
        const occupied=db.prepare('SELECT seat_index FROM guests WHERE table_id=? AND attending=1 AND id<>?').all(tableId,guestId).map(g=>g.seat_index);
        if(seatIndex!==undefined){
          if(seatIndex<0||seatIndex>=table.capacity)throw new AppError(400,'Choose a chair within this table’s capacity.');
          if(occupied.includes(seatIndex))throw new AppError(409,'That chair is already occupied. Choose an open chair.');
          chosenSeat=seatIndex;
        }else chosenSeat=Array.from({length:table.capacity},(_,i)=>i).find(i=>!occupied.includes(i));
      }
      db.prepare('UPDATE guests SET table_id=?,seat_index=? WHERE id=?').run(tableId,chosenSeat,guestId); bump(id);
    });
  }
  function addGuest(id, data) {
    const guestId = randomUUID();
    transaction(() => {
      db.prepare('INSERT INTO guests(id,wedding_id,name,household,meal,dietary,source) VALUES(?,?,?,?,?,?,?)')
        .run(guestId,id,data.name,data.household || '',data.meal || '',data.dietary||'','manual'); bump(id);
    });
    return guestId;
  }
  function deleteGuest(id, guestId) {
    transaction(() => {
      const result = db.prepare('DELETE FROM guests WHERE id=? AND wedding_id=?').run(guestId,id);
      if (!result.changes) throw new AppError(404,'Guest not found.'); bump(id);
    });
  }
  function updateTable(id, tableId, data) {
    transaction(() => {
      const table = db.prepare('SELECT id FROM tables WHERE id=? AND wedding_id=?').get(tableId,id);
      if (!table) throw new AppError(404, 'Table not found.');
      const { count } = db.prepare('SELECT COUNT(*) AS count FROM guests WHERE table_id=? AND attending=1').get(tableId);
      if (data.capacity < count) throw new AppError(409, `This table already has ${count} guests. Move some guests before reducing its capacity.`);
      const high=db.prepare('SELECT MAX(seat_index) AS seat FROM guests WHERE table_id=? AND attending=1').get(tableId);
      if(high.seat!==null&&high.seat>=data.capacity)throw new AppError(409,'Move guests from chairs above the new capacity to lower-numbered chairs first.');
      db.prepare('UPDATE tables SET name=?,capacity=? WHERE id=?').run(data.name,data.capacity,tableId); bump(id);
    });
  }
  function addTable(id,capacity=10) {
    transaction(()=>{
      wedding(id);
      const tables=db.prepare('SELECT number,x,y FROM tables WHERE wedding_id=?').all(id);
      if(tables.length>=60)throw new AppError(400,'This plan already has 60 tables.');
      const number=Math.max(18,...tables.map(t=>t.number))+1;
      const spots=Array.from({length:48},(_,i)=>({x:80+(i%8)*90,y:95+Math.floor(i/8)*100}));
      const spot=spots.sort((a,b)=>Math.min(...tables.map(t=>Math.hypot(t.x-b.x,t.y-b.y)))-Math.min(...tables.map(t=>Math.hypot(t.x-a.x,t.y-a.y))))[0];
      db.prepare('INSERT INTO tables(id,wedding_id,number,name,capacity,x,y) VALUES(?,?,?,?,?,?,?)').run(randomUUID(),id,number,`Table ${String(number).padStart(2,'0')}`,capacity,spot.x,spot.y);bump(id);
    });
  }
  function moveTable(id,tableId,x,y){
    transaction(()=>{const result=db.prepare('UPDATE tables SET x=?,y=? WHERE id=? AND wedding_id=?').run(x,y,tableId,id);if(!result.changes)throw new AppError(404,'Table not found.');bump(id);});
  }
  function updateWedding(id, data) {
    transaction(() => { db.prepare('UPDATE weddings SET name=?,date=? WHERE id=?').run(data.name,data.date,id); bump(id); });
  }
  function importPlan(id,guests,complete) {
    const existing=db.prepare('SELECT * FROM guests WHERE wedding_id=?').all(id);
    return planGuestImport(existing,guests,complete,(status,message)=>new AppError(status,message));
  }
  function previewImport(id,guests,complete=false) {
    const w=wedding(id),planned=importPlan(id,guests,complete);
    const tables=db.prepare('SELECT id,number,name FROM tables WHERE wedding_id=?').all(id);
    return {revision:w.revision,complete,...planned.summary,removals:planned.removals.map(g=>({
      id:g.id,name:g.name,table:tables.find(t=>t.id===g.table_id)||null,
    }))};
  }
  function importGuests(id, guests, source = 'csv', complete = false, expectedRevision) {
    transaction(() => {
      const w = wedding(id);
      if(expectedRevision!==undefined&&expectedRevision!==w.revision)throw new AppError(409,'The plan changed since your preview. Review the updated import preview before confirming again.');
      // Connector deltas apply explicit attendance changes. CSV merge mode only
      // adds/updates attending guests; removals require the full-roster option.
      const planned=source==='sync'?null:importPlan(id,guests,complete);
      if (w.demo) {
        db.prepare("DELETE FROM guests WHERE wedding_id=? AND source='demo'").run(id);
        db.prepare('UPDATE weddings SET demo=0 WHERE id=?').run(id);
      }
      if (complete) db.prepare("UPDATE guests SET attending=0 WHERE wedding_id=? AND source='import'").run(id);
      const upsert = db.prepare(`INSERT INTO guests(id,wedding_id,name,household,meal,email,dietary,source,source_key,attending) VALUES(?,?,?,?,?,?,?,'import',?,?)
        ON CONFLICT(wedding_id,source,source_key) DO UPDATE SET name=excluded.name,household=excluded.household,
        meal=excluded.meal,email=excluded.email,attending=excluded.attending,dietary=CASE WHEN ? THEN excluded.dietary ELSE guests.dietary END`);
      if(source==='sync') {
        for(const g of guests)upsert.run(randomUUID(),id,g.name,g.household||'',g.meal||'',g.email||'',g.dietary||'',g.sourceKey,Number(g.attending),Number(g.dietary!==undefined));
      }else{
        const update=db.prepare("UPDATE guests SET name=?,household=?,meal=?,email=?,dietary=?,source='import',source_key=?,attending=? WHERE id=? AND wedding_id=?");
        for(const op of planned.operations){
          const g=op.row,old=op.existing;
          if(old)update.run(g.name,g.household||old.household,g.meal||old.meal,g.email||old.email,g.dietary===undefined?old.dietary:g.dietary,op.sourceKey,Number(g.attending),old.id,id);
          else upsert.run(randomUUID(),id,g.name,g.household||'',g.meal||'',g.email||'',g.dietary||'',op.sourceKey,Number(g.attending),Number(g.dietary!==undefined));
        }
      }
      db.prepare('UPDATE guests SET table_id=NULL,seat_index=NULL WHERE wedding_id=? AND attending=0').run(id);
      const column = source === 'sync' ? 'synced_at' : 'imported_at';
      db.prepare(`UPDATE weddings SET ${column}=? WHERE id=?`).run(new Date().toISOString(),id); bump(id);
    });
  }
  function rotateEditor(id) {
    const key = token(); db.prepare('UPDATE weddings SET editor_hash=? WHERE id=?').run(hash(key),id); bump(id); return key;
  }
  function rotateSync(id) {
    const key = token(); db.prepare('UPDATE weddings SET sync_hash=? WHERE id=?').run(hash(key),id); bump(id); return key;
  }
  function clearDemo(id) {
    transaction(() => {
      db.prepare("DELETE FROM guests WHERE wedding_id=? AND source='demo'").run(id);
      db.prepare('UPDATE weddings SET demo=0 WHERE id=?').run(id); bump(id);
    });
  }
  return { db, floorPlan,updateFloorPlan,authorize,state,create,assign,addGuest,deleteGuest,addTable,moveTable,updateTable,updateWedding,previewImport,importGuests,rotateEditor,rotateSync,clearDemo };
}
