import {chromium,expect} from '@playwright/test';
import assert from 'node:assert/strict';
import {createApp} from '../server/app.mjs';
import {openStore} from '../server/store.mjs';
const store=openStore(':memory:'),session=store.create('Adaptive table QA','',true);
const original=store.state(session.id),head=original.tables.find(t=>t.number===18);
for(let i=0;i<20;i++)store.assign(session.id,original.guests[i].id,head.id,i);
store.updateTable(session.id,head.id,{name:'Dais',capacity:30});
const seating=JSON.stringify(store.state(session.id).guests);
const server=createApp(store,{production:true,preview:true}).listen(3106,'127.0.0.1');await new Promise(r=>server.once('listening',r));
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
const errors=[];
try{
 for(const [width,height] of [[1440,1000],[1280,720],[768,1024],[390,844],[320,640],[844,390]]){
  const context=await browser.newContext({viewport:{width,height},isMobile:width<650,hasTouch:width<650});await context.addInitScript(s=>localStorage.setItem('gather:last',JSON.stringify(s)),session);
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:3106');
  await page.locator(`.floor-svg .table-target[data-table-id="${head.id}"] .table-surface`).click();
  const dialog=page.getByRole('dialog',{name:'Head table',exact:true});await dialog.waitFor();
  const box=await dialog.boundingBox();assert.ok(box.width<=1360);assert.ok(box.height<height-15);
  assert.ok(box.x>=0&&box.x+box.width<=width);
  assert.equal(await dialog.locator('details[open]').count(),0);
  const diagram=dialog.locator('.table-seating-scroll');assert.equal(await diagram.evaluate(e=>e.scrollWidth>e.clientWidth+1),false);
  assert.equal(await dialog.getByRole('button',{name:'Next chairs',exact:true}).count(),0);
  assert.equal(await dialog.getByRole('button',{name:'Previous chairs',exact:true}).count(),0);
  await expect(dialog.locator('[data-detail-seat]')).toHaveCount(30);
  assert.equal(await dialog.locator('.head-detail-section').count(),5);
  assert.equal(await dialog.locator('.head-detail-section[data-head-section="2"] .head-detail-row').first().locator('[data-detail-seat]').count(),0);
  const seen=await dialog.locator('[data-detail-seat]').evaluateAll(nodes=>nodes.map(n=>Number(n.dataset.detailSeat)));
  assert.deepEqual(seen.sort((a,b)=>a-b),Array.from({length:30},(_,i)=>i));
  const visibleTogether=await diagram.evaluate(container=>{
    const bounds=container.getBoundingClientRect();return [...container.querySelectorAll('[data-detail-seat]')].every(node=>{
      const seat=node.getBoundingClientRect();return seat.x>=bounds.x&&seat.right<=bounds.right+1&&seat.y>=bounds.y&&seat.bottom<=bounds.bottom+1;
    });
  });
  assert.ok(visibleTogether,'All chairs must fit together within the seating diagram');
  const guest=store.state(session.id).guests.find(g=>g.tableId===head.id&&g.seatIndex===0);
  await dialog.locator('[data-detail-seat="0"]').click();await page.getByRole('dialog',{name:guest.name,exact:true}).waitFor();
  await page.getByRole('button',{name:'Back to table',exact:false}).click();await dialog.waitFor();
  await dialog.getByText('Guest list · 20 seated',{exact:true}).click();await expect(dialog.locator('.table-guest-list .guest-row')).toHaveCount(20);
  await dialog.getByText('Table settings',{exact:true}).click();await expect(dialog.getByRole('button',{name:'Add a chair',exact:true})).toBeVisible();
  assert.equal(await dialog.locator('input[name="name"]').inputValue(),'Dais');
  assert.equal(JSON.stringify(store.state(session.id).guests),seating);
  await dialog.getByText('Table settings',{exact:true}).click();await dialog.getByText('Guest list · 20 seated',{exact:true}).click();
  await page.screenshot({path:`/workspace/work/qa/table-dialog-${width}x${height}.png`});
  await page.keyboard.press('Escape');await dialog.waitFor({state:'hidden'});
  // Standard tables use the same bounded dialog and retain access to all chairs.
  await page.locator(`.floor-svg .table-target[data-table-id="${original.tables[0].id}"] .table-surface`).click();
  const round=page.getByRole('dialog',{name:'Table 01',exact:true});await round.waitFor();assert.equal(await round.locator('[data-detail-seat]').count(),10);
  assert.equal(await round.locator('.table-seating-scroll').evaluate(e=>e.scrollWidth>e.clientWidth+1),false);
  console.log(`PASS ${width}x${height}: ${Math.round(box.width)}x${Math.round(box.height)} head-table dialog; all 30 chairs visible together without pagination; guest details/settings intact; no seating changes.`);
  await context.close();
 }
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 await context.addInitScript(s=>localStorage.setItem('gather:last',JSON.stringify(s)),session);
 const page=await context.newPage();await page.goto('http://127.0.0.1:3106');
 await page.locator(`.floor-svg .table-target[data-table-id="${head.id}"] .table-surface`).click();
 const dialog=page.getByRole('dialog',{name:'Head table',exact:true});
 const moved=store.state(session.id).guests.find(g=>g.tableId===head.id&&g.seatIndex===0);
 await dialog.locator('[data-detail-seat="0"]').dragTo(dialog.locator('[data-detail-seat="29"]'));
 await expect.poll(()=>store.state(session.id).guests.find(g=>g.id===moved.id).seatIndex).toBe(29);
 await expect(dialog.locator('[data-detail-seat="29"] strong')).toHaveText(moved.name);
 const swapped=store.state(session.id).guests.find(g=>g.tableId===head.id&&g.seatIndex===1);
 await dialog.locator('[data-detail-seat="29"]').dragTo(dialog.locator('[data-detail-seat="1"]'));
 await expect.poll(()=>store.state(session.id).guests.find(g=>g.id===moved.id).seatIndex).toBe(1);
 assert.equal(store.state(session.id).guests.find(g=>g.id===swapped.id).seatIndex,29);
 assert.equal(store.state(session.id).guests.length,original.guests.length);
 await context.close();console.log('PASS: native chair drag and occupied-chair swap in compact table dialog.');
 assert.deepEqual(errors,[]);
}finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));store.db.close();}
