import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('.');
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.json':'application/json', '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml', '.wav':'audio/wav', '.mp4':'video/mp4', '.mp3':'audio/mpeg', '.gif':'image/gif', '.jpg':'image/jpeg', '.md':'text/markdown; charset=utf-8', '.zip':'application/zip', '.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.csv':'text/csv; charset=utf-8' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/ait-atar-textbook(?=\/|$)/, '') || '/';
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    const data = await readFile(file);
    const headers={ 'Content-Type':types[extname(file)]||'application/octet-stream','Accept-Ranges':'bytes' };
    const range=req.headers.range;
    if(range){
      const match=/^bytes=(\d*)-(\d*)$/.exec(range);
      let start,end;
      if(match&&(match[1]||match[2])){
        start=match[1]?Number(match[1]):Math.max(0,data.length-Number(match[2]));
        end=match[1]?(match[2]?Math.min(Number(match[2]),data.length-1):data.length-1):data.length-1;
      }
      if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start<0||start>=data.length||end<start){res.writeHead(416,{'Content-Range':`bytes */${data.length}`}).end();return;}
      const part=data.subarray(start,end+1);res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${data.length}`,'Content-Length':part.length});res.end(req.method==='HEAD'?undefined:part);return;
    }
    res.writeHead(200,{...headers,'Content-Length':data.length});res.end(req.method==='HEAD'?undefined:data);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(4174, '127.0.0.1', () => console.log('Local: http://127.0.0.1:4174/ait-atar-textbook/'));
