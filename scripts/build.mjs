import { build } from 'esbuild';
import { mkdir, copyFile, writeFile, rm } from 'node:fs/promises';
await rm('dist/assets',{recursive:true,force:true});
await mkdir('dist/assets',{recursive:true});
await build({entryPoints:['src/recovered-app.js'],bundle:true,format:'esm',outfile:'dist/assets/app.js',minify:true,jsxFactory:'React.createElement',jsxFragment:'React.Fragment',legalComments:'eof'});
await copyFile('src/style.css','dist/assets/style.css');
await copyFile('src/favicon.svg','dist/favicon.svg');
await writeFile('dist/index.html',`<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="theme-color" content="#fbf9f5"><meta name="description" content="Plan and share your wedding seating with Seated."><title>Seated — Wedding seating planner</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/assets/style.css"><script type="module" src="/assets/app.js"></script></head><body><div id="root"></div></body></html>`);
