import {chromium,expect} from '@playwright/test';
import assert from 'node:assert/strict';
import {createApp} from '../server/app.mjs';
import {openStore} from '../server/store.mjs';
const store=openStore(':memory:'),session=store.create('Layout QA');
const state=store.state(session.id),guest=store.addGuest(session.id,{name:'Floor Plan Guest'}),head=state.tables.find(t=>t.number===18);
store.assign(session.id,guest,head.id,26);const seating=JSON.stringify(store.state(session.id).guests),tables=JSON.stringify(store.state(session.id).tables);
const server=createApp(store,{production:true,preview:true}).listen(3108,'127.0.0.1');await new Promise(r=>server.once('listening',r));
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});const errors=[];
try{
 for(const [width,height,oldWidth] of [[1440,900,660],[1920,1080,864],[2560,1440,1151],[768,1024,0],[390,844,352],[320,640,0],[844,390,0]]){
  const context=await browser.newContext({viewport:{width,height},isMobile:width<650,hasTouch:width<650});await context.addInitScript(s=>localStorage.setItem('gather:last',JSON.stringify(s)),session);
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:3108');await page.getByRole('button',{name:'Fit entire floor plan'}).waitFor();
  await expect.poll(async()=>Math.abs((await page.locator('.floor-svg').boundingBox()).width-(await page.locator('.board-scroll').boundingBox()).width)).toBeLessThan(20);
  const plan=await page.locator('.floor-svg').boundingBox(),board=await page.locator('.board-scroll').boundingBox(),workspace=await page.locator('.workspace').boundingBox();
  assert.ok(workspace.y+workspace.height<=height+1,`Workspace exceeds viewport at ${width}`);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  const toolbar=await page.locator('.board-toolbar').boundingBox(),last=await page.getByRole('button',{name:'Table list view'}).boundingBox();assert.ok(last.x+last.width<=toolbar.x+toolbar.width,`Toolbar overflow at ${width}`);
  if(oldWidth&&width>1000)assert.ok(plan.width>oldWidth*1.2);
  await page.screenshot({path:`/workspace/work/qa/planner-fill-${width}x${height}.png`});
  await page.getByRole('button',{name:'Fit entire floor plan'}).click();
  await expect.poll(async()=>{const fit=await page.locator('.floor-svg').boundingBox(),available=await page.locator('.board-scroll').boundingBox();return fit.y+fit.height<=available.y+available.height+1&&fit.x>=available.x;}).toBe(true);
  const fitted=await page.locator('.floor-svg').boundingBox();
  await page.getByRole('button',{name:'Zoom in',exact:true}).click();await expect.poll(async()=>(await page.locator('.floor-svg').boundingBox()).width).toBeGreaterThan(fitted.width*1.2);
  await page.getByRole('button',{name:'Fill available width'}).click();await expect.poll(async()=>Math.abs((await page.locator('.floor-svg').boundingBox()).width-plan.width)).toBeLessThan(3);
  await page.getByRole('button',{name:'Guest list',exact:true}).click();await page.locator('.directory').waitFor();await page.getByRole('button',{name:'Seating plan',exact:true}).click();await page.locator('.floor-svg').waitFor();
  console.log(`PASS ${width}x${height}: floor plan ${Math.round(plan.width)}px wide${oldWidth?` (was ${oldWidth}px)`:''}; viewport filled; Fit/Fill and zoom work.`);
  assert.equal(JSON.stringify(store.state(session.id).guests),seating);assert.equal(JSON.stringify(store.state(session.id).tables),tables);await context.close();
 }
 // Filling the panel requires scrolling on desktop; dragging a chair near an edge scrolls automatically.
 const context=await browser.newContext({viewport:{width:1440,height:900}});await context.addInitScript(s=>localStorage.setItem('gather:last',JSON.stringify(s)),session);
 const page=await context.newPage();await page.goto('http://127.0.0.1:3108');const chair=page.locator(`.floor-svg .chair[data-table-id="${head.id}"][data-seat-index="26"]`);await chair.scrollIntoViewIfNeeded();
 const bounds=await chair.boundingBox(),board=await page.locator('.board-scroll').boundingBox();assert.ok(await page.locator('.board-scroll').evaluate(e=>e.scrollTop)>0);
 await page.mouse.move(bounds.x+bounds.width/2,bounds.y+bounds.height/2);await page.mouse.down();await page.mouse.move(bounds.x+bounds.width/2+8,bounds.y+bounds.height/2);
 await page.mouse.move(board.x+board.width/2,board.y+4,{steps:10});await expect.poll(()=>page.locator('.board-scroll').evaluate(e=>e.scrollTop),{timeout:10000}).toBe(0);
 const target=page.locator(`.floor-svg .table-target[data-table-id="${state.tables[0].id}"] .table-surface`),destination=await target.boundingBox();await page.mouse.move(destination.x+destination.width/2,destination.y+destination.height/2,{steps:10});await page.mouse.up();
 await expect.poll(()=>store.state(session.id).guests.find(g=>g.id===guest).tableId).toBe(state.tables[0].id);
 console.log('PASS: dragging a head-table guest scrolls the enlarged plan automatically and seats them at the target table.');
 await context.close();assert.deepEqual(errors,[]);
}finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));store.db.close();}
