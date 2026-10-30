import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,rmSync,existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { DatabaseSync } from 'node:sqlite';
import { openStore } from '../server/store.mjs';

test('startup backs up the existing database before adding layout storage and verifies every seat',async()=>{
 const directory=mkdtempSync(join(tmpdir(),'seated-startup-')),path=join(directory,'gather.sqlite');
 const fixture=openStore(path);const plan=fixture.create('Existing production fixture','',true);
 const original=JSON.stringify(fixture.state(plan.id).guests);
 fixture.db.exec('DROP TABLE floor_plans');fixture.db.close();
 const child=spawn(process.execPath,['server/index.mjs'],{cwd:process.cwd(),env:{...process.env,DATABASE_PATH:path,PORT:'0',NODE_ENV:'production'},stdio:['ignore','pipe','pipe']});
 let output='';
 try{
  await new Promise((resolve,reject)=>{
   const timeout=setTimeout(()=>reject(new Error('Startup timeout: '+output)),10000);
   child.stdout.on('data',data=>{output+=data;if(output.includes('Seated is listening')){clearTimeout(timeout);resolve();}});
   child.stderr.on('data',data=>{output+=data});
   child.once('error',e=>{clearTimeout(timeout);reject(e)});
   child.once('exit',code=>{if(code){clearTimeout(timeout);reject(new Error(output))}});
  });
  assert.match(output,/Seating preservation verified/);
  const backupPath=`${path}.before-floor-plan-v1.sqlite`;assert.ok(existsSync(backupPath));
  const snapshot=new DatabaseSync(backupPath,{readOnly:true});
  assert.equal(snapshot.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type='table' AND name='floor_plans'").get().n,0);snapshot.close();
  const current=openStore(path);assert.equal(JSON.stringify(current.state(plan.id).guests),original);current.db.close();
 }finally{const exited=once(child,'exit');child.kill('SIGTERM');await exited;rmSync(directory,{recursive:true,force:true});}
});
