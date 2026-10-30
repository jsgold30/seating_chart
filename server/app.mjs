import express from 'express';
import helmet from 'helmet';
import { EventEmitter } from 'node:events';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { z, ZodError } from 'zod';
import { AppError } from './store.mjs';

const name = z.string().trim().min(1).max(120);
const date = z.string().refine(s => s === '' || (/^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s))), 'Enter a valid date.');
const guestSchema = z.object({ name, household: z.string().trim().max(120).default(''), meal: z.string().trim().max(120).default(''), dietary:z.string().trim().max(2000).optional() });
const importSchema = z.object({
  guests: z.array(guestSchema.extend({ sourceKey: z.string().min(1).max(400), email: z.string().max(254).default(''), attending:z.boolean() })).min(1).max(5000),
  complete: z.boolean().default(true),
  expectedRevision:z.number().int().nonnegative().optional(),
}).refine(data => new Set(data.guests.map(g=>g.sourceKey)).size===data.guests.length, 'Guest identifiers must be unique.');

export function createApp(store, { production = false, preview = false } = {}) {
  const app = express(); const events = new EventEmitter(); events.setMaxListeners(1000);
  const streams = new Map(); const creationLimits = new Map();
  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: production ? {
    directives: { defaultSrc:["'self'"], scriptSrc:["'self'"], styleSrc:["'self'", "'unsafe-inline'"],
      imgSrc:["'self'",'data:','blob:'], connectSrc:["'self'"], fontSrc:["'self'"], upgradeInsecureRequests:null,
      ...(preview ? { frameAncestors:null } : {}) },
  } : false, xFrameOptions:!preview, strictTransportSecurity:production&&!preview, referrerPolicy:{policy:'no-referrer'} }));
  app.use(express.json({ limit:'3mb' }));
  app.use('/api', (_req,res,next) => { res.set('Cache-Control','no-store'); next(); });
  app.get('/api/health', (_req,res) => res.json({ ok:true }));
  app.post('/api/weddings',(req,res) => {
    const now=Date.now();
    for(const [key,value] of creationLimits) if(value.until<now) creationLimits.delete(key);
    const entry = creationLimits.get(req.ip) || { count:0, until:now+3600000 };
    if(entry.count>=30) throw new AppError(429,'Too many plans created. Please try again in an hour.');
    const input=z.object({name:name.default('Our wedding'), date:date.default(''), demo:z.boolean().default(false)}).parse(req.body);
    const result=store.create(input.name,input.date,input.demo); entry.count++; creationLimits.set(req.ip,entry);
    res.status(201).json(result);
  });
  const base='/api/weddings/:id';
  app.use(base,(req,res,next) => {
    // Express trims the mount path here; credentials never go into URLs.
    const sync=req.path==='/sync' && req.method==='POST';
    req.role=store.authorize(req.params.id,req.headers.authorization?.replace(/^Bearer /,''),sync);
    req.weddingId=req.params.id; next();
  });
  const owner=(req,_res,next) => { if(req.role!=='owner') throw new AppError(403,'Only the plan owner can change sharing or guest-list connections.'); next(); };
  const publish=id => events.emit(id);
  const respond=(req,res) => { publish(req.params.id); res.json(store.state(req.params.id,req.role)); };
  app.get(base,(req,res) => res.json(store.state(req.params.id,req.role)));
  app.get(`${base}/events`,(req,res) => {
    const id=req.params.id;
    const active=streams.get(id)||new Set();
    if(active.size>=80) throw new AppError(429,'This plan has too many live connections. Close unused tabs and retry.');
    res.set({'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive','X-Accel-Buffering':'no'});
    res.flushHeaders();
    const send=()=>res.write(`data: ${JSON.stringify({revision:store.state(id).revision})}\n\n`);
    send(); active.add(res); streams.set(id,active); events.on(id,send);
    const heartbeat=setInterval(()=>res.write(': heartbeat\n\n'),20000); heartbeat.unref();
    req.on('close',()=>{ clearInterval(heartbeat); events.off(id,send); active.delete(res); if(!active.size)streams.delete(id); });
  });
  app.post(`${base}/assign`,(req,res) => {
    const data=z.object({guestId:z.string().uuid(),tableId:z.string().uuid().nullable(),seatIndex:z.number().int().min(0).max(59).optional(),swap:z.boolean().default(false)}).parse(req.body);
    store.assign(req.params.id,data.guestId,data.tableId,data.seatIndex,data.swap); respond(req,res);
  });
  app.post(`${base}/guests`,(req,res) => { store.addGuest(req.params.id,guestSchema.parse(req.body)); respond(req,res); });
  app.delete(`${base}/guests/:guestId`,(req,res) => { store.deleteGuest(req.params.id,req.params.guestId); respond(req,res); });
  app.post(`${base}/tables`,(req,res)=>{const data=z.object({capacity:z.number().int().min(1).max(60).default(10)}).parse(req.body);store.addTable(req.params.id,data.capacity);respond(req,res);});
  app.patch(`${base}/tables/:tableId/position`,(req,res)=>{const data=z.object({x:z.number().finite().min(40).max(760),y:z.number().finite().min(80).max(640)}).parse(req.body);store.moveTable(req.params.id,req.params.tableId,data.x,data.y);respond(req,res);});
  app.patch(`${base}/tables/:tableId`,(req,res) => {
    store.updateTable(req.params.id,req.params.tableId,z.object({name,capacity:z.number().int().min(1).max(60)}).parse(req.body)); respond(req,res);
  });
  app.patch(base,(req,res) => { store.updateWedding(req.params.id,z.object({name,date}).parse(req.body)); respond(req,res); });
  app.post(`${base}/import/preview`,owner,(req,res) => {const data=importSchema.parse({complete:false,...req.body});res.json(store.previewImport(req.params.id,data.guests,data.complete));});
  app.post(`${base}/import`,owner,(req,res) => { const data=importSchema.parse({complete:false,...req.body}); store.importGuests(req.params.id,data.guests,'csv',data.complete,data.expectedRevision); respond(req,res); });
  app.post(`${base}/sync`,(req,res) => { const data=importSchema.parse(req.body); store.importGuests(req.params.id,data.guests,'sync',data.complete); publish(req.params.id); res.json({ok:true, revision:store.state(req.params.id).revision}); });
  app.post(`${base}/sharing`,owner,(req,res) => {
    const key=store.rotateEditor(req.params.id);
    // End old streams immediately. Revoked invitation links cannot keep reading updates.
    for(const response of streams.get(req.params.id)||[]) response.end();
    res.json({key});
  });
  app.post(`${base}/sync-key`,owner,(req,res) => { const key=store.rotateSync(req.params.id); publish(req.params.id); res.json({key}); });
  app.post(`${base}/clear-demo`,owner,(req,res) => { store.clearDemo(req.params.id); respond(req,res); });
  if(production && existsSync(resolve('dist/index.html'))) {
    app.use(express.static(resolve('dist'),{index:false}));
    app.get(['/', '/w/:id'],(_req,res)=>res.sendFile(resolve('dist/index.html')));
  }
  app.use('/api',(_req,_res,next)=>next(new AppError(404,'This API route does not exist.')));
  app.use((error,_req,res,_next) => {
    if(error instanceof ZodError) return res.status(400).json({error:error.issues[0]?.message || 'Invalid input.'});
    if(error.type==='entity.too.large') return res.status(413).json({error:'This file is too large. Import up to 5,000 guests.'});
    if(error instanceof SyntaxError && 'body' in error) return res.status(400).json({error:'Invalid JSON request.'});
    if(!error.status) console.error('Request failed:',error.message);
    res.status(error.status||500).json({error:error.status ? error.message : 'Something went wrong. Please try again.'});
  });
  return app;
}
