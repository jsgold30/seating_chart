import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { openStore } from '../server/store.mjs';
import { createApp } from '../server/app.mjs';

test('venue layout changes persist without changing any seating, names, or chair assignments',()=>{
  const dir=mkdtempSync(join(tmpdir(),'seated-test-')),path=join(dir,'gather.sqlite');
  let store=openStore(path);
  try{
    const plan=store.create('Existing wedding','',true),before=store.state(plan.id);
    const seating=JSON.stringify(before.guests),tables=JSON.stringify(before.tables);
    const layout=structuredClone(before.floorPlan);layout.elements[0].x=230;layout.elements[0].width=250;
    store.updateFloorPlan(plan.id,{expectedRevision:0,elements:layout.elements});
    assert.equal(JSON.stringify(store.state(plan.id).guests),seating);
    assert.equal(JSON.stringify(store.state(plan.id).tables),tables);
    store.db.close();store=openStore(path);
    assert.equal(store.state(plan.id).floorPlan.elements[0].x,230);
    assert.equal(store.state(plan.id).floorPlan.elements[0].width,250);
    assert.equal(JSON.stringify(store.state(plan.id).guests),seating);
    assert.throws(()=>store.updateFloorPlan(plan.id,{expectedRevision:0,elements:[]}),e=>e.status===409);
    assert.equal(store.state(plan.id).floorPlan.elements.length,layout.elements.length);
    // Seating and layout use independent revisions: another guest move must not reject a layout save.
    const guest=store.state(plan.id).guests.find(g=>!g.tableId);
    store.assign(plan.id,guest.id,before.tables[9].id);
    store.updateFloorPlan(plan.id,{expectedRevision:1,elements:[]});
    assert.equal(store.state(plan.id).guests.find(g=>g.id===guest.id).tableId,before.tables[9].id);
    assert.deepEqual(store.state(plan.id).floorPlan.elements,[]);
  }finally{store.db.close();rmSync(dir,{recursive:true,force:true});}
});

test('picker assignment uses an open chair, rejects full tables, and retains the original seat on failure',()=>{
 const store=openStore(':memory:');try{
  const plan=store.create('Picker'),state=store.state(plan.id),[a,b]=state.tables;
  store.updateTable(plan.id,a.id,{name:a.name,capacity:1});
  const first=store.addGuest(plan.id,{name:'First'}),second=store.addGuest(plan.id,{name:'Second'});
  store.assign(plan.id,first,a.id);store.assign(plan.id,second,b.id);
  const before=store.state(plan.id).guests.find(g=>g.id===second);
  assert.throws(()=>store.assign(plan.id,second,a.id),e=>e.status===409);
  assert.deepEqual(store.state(plan.id).guests.find(g=>g.id===second),before);
  store.assign(plan.id,first,null);store.assign(plan.id,second,a.id);
  assert.equal(store.state(plan.id).guests.find(g=>g.id===second).seatIndex,0);
 }finally{store.db.close();}
});

test('floor-plan API validates geometry and images, enforces invitation access, and preserves seats',async()=>{
 const store=openStore(':memory:');const app=createApp(store);const server=app.listen(0,'127.0.0.1');
 await new Promise(r=>server.once('listening',r));
 try{
  const plan=store.create('API test','',true),before=store.state(plan.id),url=`http://127.0.0.1:${server.address().port}/api/weddings/${plan.id}/floor-plan`;
  const patch=(body,key=plan.key)=>fetch(url,{method:'PATCH',headers:{'Content-Type':'application/json',Authorization:`Bearer ${key}`},body:JSON.stringify(body)});
  assert.equal((await patch({expectedRevision:0,elements:[]},'invalid')).status,401);
  assert.equal((await patch({expectedRevision:0,elements:[{...before.floorPlan.elements[0],x:779}]})).status,400);
  assert.equal((await patch({expectedRevision:0,image:{dataUrl:'data:image/jpeg;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==',name:'fake.jpg',x:20,y:36,width:400,height:300,opacity:.5}})).status,400);
  assert.equal((await patch({expectedRevision:0,elements:[before.floorPlan.elements[0],before.floorPlan.elements[0]]})).status,400);
  const png='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6pVQAAAAASUVORK5CYII=';
  const result=await patch({expectedRevision:0,image:{dataUrl:png,name:'venue.png',x:20,y:36,width:400,height:300,opacity:.5}},plan.editorKey);
  assert.equal(result.status,200);const state=await result.json();
  assert.equal(JSON.stringify(state.guests),JSON.stringify(before.guests));assert.equal(state.floorPlan.image.dataUrl,png);
  const removed=await patch({expectedRevision:1,image:null});assert.equal(removed.status,200);
  assert.equal((await removed.json()).floorPlan.image,null);
  assert.equal((await patch({expectedRevision:0,elements:[]})).status,409);
  assert.deepEqual(store.state(plan.id).guests,before.guests);
 }finally{server.closeAllConnections();await new Promise(r=>server.close(r));store.db.close();}
});
