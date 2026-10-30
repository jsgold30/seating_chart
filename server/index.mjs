import { openStore } from './store.mjs';
import { createApp } from './app.mjs';
const store = openStore(process.env.DATABASE_PATH || './data/gather.sqlite');
const port = Number(process.env.PORT || 3001);
const server = createApp(store,{
  production:process.env.NODE_ENV==='production',
  preview:process.env.GATHER_PREVIEW==='1',
}).listen(port,'0.0.0.0',()=>console.log(`Seated is listening on port ${port}`));
function stop() { server.close(()=>{store.db.close();process.exit(0);}); server.closeAllConnections(); setTimeout(()=>process.exit(0),5000).unref(); }
process.on('SIGTERM',stop); process.on('SIGINT',stop);
