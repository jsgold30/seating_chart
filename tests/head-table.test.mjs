import test from 'node:test';
import assert from 'node:assert/strict';
import {headTableGeometry} from '../shared/head-table.mjs';

test('five-section head table keeps every chair and leaves the upper center open',()=>{
 for(const capacity of [1,2,17,28,30,60]){
  const {sections,chairs}=headTableGeometry(capacity);
  assert.equal(sections.length,5);assert.ok(sections[2].width>sections[0].width);
  assert.equal(chairs.length,capacity);assert.deepEqual(chairs.map(c=>c.index),Array.from({length:capacity},(_,i)=>i));
  assert.equal(chairs.some(c=>c.section===2&&c.side==='top'),false);
  for(const chair of chairs){const section=sections[chair.section];assert.ok(chair.x>=section.x);assert.ok(chair.x+chair.width<=section.x+section.width);assert.ok(chair.width>0);}
  for(const side of ['top','bottom']){const row=chairs.filter(c=>c.side===side).sort((a,b)=>a.x-b.x);for(let i=1;i<row.length;i++)assert.ok(row[i].x>=row[i-1].x+row[i-1].width);}
 }
 const reference=headTableGeometry(28);assert.equal(reference.topCount,12);assert.equal(reference.chairs.length-reference.topCount,16);
 const existing=headTableGeometry(30);assert.equal(existing.chairs.length,30);
});
