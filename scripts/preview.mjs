import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve, sep } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const markdown = await readFile(root + '/README.md', 'utf8');
const rendered = execFileSync('gh', ['api','markdown','--input','-'], {
  input: JSON.stringify({ text: markdown, mode: 'gfm' }), encoding: 'utf8',
}).replace(/<h2>([^<]+)<\/h2>/g, (_, title) => {
  const id = title.toLowerCase().replaceAll('&amp;', '').replaceAll(' ', '-');
  return '<h2 id="' + id + '">' + title + '</h2>';
});
const cssResponse = await fetch('https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.1/github-markdown.css');
if (!cssResponse.ok) throw new Error('Preview CSS: ' + cssResponse.status);
const css = await cssResponse.text();
const page = '<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>beshurl — Profile preview</title><style>' + css + '*{box-sizing:border-box}body{margin:0;padding:24px;background:light-dark(#fff,#0d1117);color-scheme:light dark}.markdown-body{max-width:896px;margin:auto;padding:24px;border:1px solid #80808040;border-radius:6px}a{color:light-dark(#0969da,#58a6ff)}.markdown-body img{background:transparent}@media(max-width:600px){body{padding:8px}.markdown-body{padding:16px}}</style><article class="markdown-body">' + rendered + '</article></html>';
const server = http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname === '/') {res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(page);return;}
    const target = resolve(root, '.' + pathname);
    if (!target.startsWith(root.replace(/\/$/,'') + sep)) {res.writeHead(403);res.end();return;}
    const data = await readFile(target);
    res.writeHead(200,{'Content-Type': target.endsWith('.svg')?'image/svg+xml':target.endsWith('.md')?'text/plain; charset=utf-8':'application/octet-stream'});
    res.end(data);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.listen(4317,'127.0.0.1',()=>console.log('Profile preview: http://127.0.0.1:4317'));
