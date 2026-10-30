import { chromium,expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { createApp } from '../server/app.mjs';
import { openStore } from '../server/store.mjs';
const store=openStore(':memory:'),session=store.create('Drag test','',true);
const original=store.state(session.id),head=original.tables.find(t=>t.number===18);
const source=original.guests[0],other=original.guests[1];
store.assign(session.id,source.id,head.id,26);store.assign(session.id,other.id,head.id,0);
const tablesBefore=JSON.stringify(store.state(session.id).tables),guestIds=store.state(session.id).guests.map(g=>g.id);
const server=createApp(store,{production:true,preview:true}).listen(3102,'127.0.0.1');await new Promise(r=>server.once('listening',r));
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const errors=[];
function current(id=source.id){return store.state(session.id).guests.find(g=>g.id===id);}
function chair(page,id=source.id){const guest=current(id);return page.locator(`.floor-svg .chair[data-table-id="${guest.tableId}"][data-seat-index="${guest.seatIndex}"]`);}
function table(page,id){return page.locator(`.floor-svg .table-target[data-table-id="${id}"] .table-surface`);}
async function center(locator){const b=await locator.boundingBox();assert.ok(b);return {x:b.x+b.width/2,y:b.y+b.height/2};}
async function drag(page,from,to){await expect.poll(()=>from.getAttribute('aria-label')).toContain(source.name);const a=await center(from),b=await center(to);await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(a.x+7,a.y+1);await page.mouse.move(b.x,b.y,{steps:12});await page.mouse.up();}
try {
 const context=await browser.newContext({viewport:{width:1440,height:1100}});
 await context.addInitScript(session=>localStorage.setItem('gather:last',JSON.stringify(session)),session);
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:3102');await chair(page).waitFor();
 // An ordinary mouse drag (no long hold) from head-table chair 27 to every round table.
 for(const destination of original.tables.filter(t=>t.number!==18)){
  await drag(page,chair(page),table(page,destination.id));
  await expect.poll(()=>current().tableId).toBe(destination.id);
  await drag(page,chair(page),table(page,head.id));await expect.poll(()=>current().tableId).toBe(head.id);
 }
 // Exact chair placement and swaps remain available.
 const first=original.tables[0],openIndex=9;
 await drag(page,chair(page),page.locator(`.floor-svg .chair[data-table-id="${first.id}"][data-seat-index="${openIndex}"]`));
 await expect.poll(()=>current().seatIndex).toBe(openIndex);assert.equal(current().tableId,first.id);
 const beforeOther=current(other.id);
 await drag(page,chair(page),chair(page,other.id));await expect.poll(()=>current().tableId).toBe(head.id);
 assert.equal(current().seatIndex,beforeOther.seatIndex);assert.equal(current(other.id).tableId,first.id);assert.equal(current(other.id).seatIndex,openIndex);
 // Full table rejection must keep both the original assignment and every other guest intact.
 const target=original.tables[1],count=store.state(session.id).guests.filter(g=>g.tableId===target.id).length;
 store.updateTable(session.id,target.id,{name:target.name,capacity:count});
 await page.reload();await chair(page).waitFor();const before=JSON.stringify(store.state(session.id).guests);
 await drag(page,chair(page),table(page,target.id));await page.getByRole('alert').filter({hasText:'is full'}).waitFor();
 assert.equal(JSON.stringify(store.state(session.id).guests),before);
 // Escape cancels without an assignment request.
 const a=await center(chair(page)),b=await center(table(page,original.tables[2].id));
 await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(b.x,b.y,{steps:10});await page.keyboard.press('Escape');await page.mouse.up();
 assert.equal(JSON.stringify(store.state(session.id).guests),before);
 await context.close();
 // Phone touch: direct drag from an occupied head-table chair to a round-table center.
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await mobile.addInitScript(session=>localStorage.setItem('gather:last',JSON.stringify(session)),session);
 const phone=await mobile.newPage();phone.on('pageerror',e=>errors.push(e.message));await phone.goto('http://127.0.0.1:3102');await chair(phone).waitFor();
 const start=await center(chair(phone)),end=await center(table(phone,original.tables[2].id));const cdp=await mobile.newCDPSession(phone);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:start.x,y:start.y,id:1}]});
 for(let n=1;n<=12;n++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:start.x+(end.x-start.x)*n/12,y:start.y+(end.y-start.y)*n/12,id:1}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await expect.poll(()=>current().tableId).toBe(original.tables[2].id);
 await phone.reload();await chair(phone).waitFor();assert.equal(current().tableId,original.tables[2].id);
 await mobile.close();
 const after=store.state(session.id);assert.deepEqual(after.guests.map(g=>g.id),guestIds);
 const tablesExpected=JSON.parse(tablesBefore).map(t=>t.id===target.id?{...t,capacity:count}:t);
 assert.equal(JSON.stringify(after.tables),JSON.stringify(tablesExpected));assert.deepEqual(errors,[]);
 console.log('PASS: head-table chair drag to all 17 tables; return to head table; exact chairs; swaps; full-table rejection; Escape cancel; phone touch drag; reload persistence; all guests and table positions preserved.');
}finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));store.db.close();}
