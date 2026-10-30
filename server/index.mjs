import { openStore } from './store.mjs';
import { createApp } from './app.mjs';
import { DatabaseSync, backup } from 'node:sqlite';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const filename=process.env.DATABASE_PATH || './data/gather.sqlite';
let seatingBefore;
const fingerprint=db=>createHash('sha256').update(JSON.stringify({
  guests:db.prepare('SELECT * FROM guests ORDER BY id').all(),
  tables:db.prepare('SELECT * FROM tables ORDER BY id').all(),
})).digest('hex');
// Keep a consistent SQLite snapshot on the same persistent volume before migration.
// Never replace an existing snapshot, copy an empty database over production, or seed it.
if(filename!==':memory:'&&existsSync(filename)) {
  const previous=new DatabaseSync(filename,{readOnly:true});
  try {
    seatingBefore=fingerprint(previous);
    const snapshot=`${filename}.before-floor-plan-v1.sqlite`;
    if(!existsSync(snapshot)) {
      await backup(previous,snapshot);
      console.log('Pre-update SQLite backup saved on the persistent volume.');
    }
  } finally { previous.close(); }
}
const store = openStore(filename);
if(seatingBefore&&fingerprint(store.db)!==seatingBefore) {
  store.db.close();
  throw new Error('Startup seating preservation check failed. The pre-update SQLite backup is available.');
}
if(seatingBefore)console.log('Seating preservation verified: existing guests, tables, and chair assignments are unchanged.');
const port = Number(process.env.PORT || 3001);
const server = createApp(store,{
  production:process.env.NODE_ENV==='production',
  preview:process.env.GATHER_PREVIEW==='1',
}).listen(port,'0.0.0.0',()=>console.log(`Seated is listening on port ${port}`));
function stop() { server.close(()=>{store.db.close();process.exit(0);}); server.closeAllConnections(); setTimeout(()=>process.exit(0),5000).unref(); }
process.on('SIGTERM',stop); process.on('SIGINT',stop);
