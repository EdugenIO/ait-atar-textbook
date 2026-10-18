import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';
import {randomBytes} from 'node:crypto';
const root=dirname(fileURLToPath(import.meta.url));
export function createLab({port=4182,key=randomBytes(24).toString('hex')}={}){
 const records=[];let nextId=1;const origin='http://127.0.0.1:'+port;
 const json=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data));};
 const server=http.createServer(async(req,res)=>{try{
  if(req.headers.host!=='127.0.0.1:'+port)return json(res,403,{error:'Use the printed loopback address.'});
  if(req.headers.origin&&req.headers.origin!==origin)return json(res,403,{error:'Different-origin requests are not allowed.'});
  const path=new URL(req.url,origin).pathname;
  if(path==='/api/records'){
   if(req.headers['x-lab-key']!==key)return json(res,403,{error:'Reviewer key required.'});
   if(req.method==='GET')return json(res,200,{records});
   if(req.method==='DELETE'){records.length=0;return json(res,200,{deleted:true,remaining:0});}
   return json(res,405,{error:'Method not allowed.'});
  }
  if(path==='/api/response'&&req.method==='POST'){
   if(!String(req.headers['content-type']||'').startsWith('application/json'))return json(res,415,{error:'JSON input required.'});
   let body='',large=false;for await(const part of req){if(Buffer.byteLength(body)+part.length>1024){large=true;}else if(!large)body+=part.toString();}
   if(large)return json(res,413,{error:'Practice request is too large.'});
   let data;try{data=JSON.parse(body);}catch{return json(res,400,{error:'Invalid JSON.'});}
   if(!data||Array.isArray(data)||typeof data!=='object'||Object.keys(data).sort().join(',')!=='size,workshop'||!['design','media'].includes(data.workshop)||!Number.isInteger(data.size)||data.size<1||data.size>12)return json(res,400,{error:'Send only workshop (design/media) and whole-number size 1–12. No personal-data fields are accepted.'});
   if(records.length>=50)return json(res,409,{error:'Practice limit reached. Reviewer can clear the fictional records.'});
   const record={id:nextId++,workshop:data.workshop,size:data.size};records.push(record);return json(res,201,{accepted:true,id:record.id});
  }
  if(req.method!=='GET')return json(res,405,{error:'Method not allowed.'});
  const files={'/':'learner.html','/review':'review.html','/learner.js':'learner.js','/review.js':'review.js','/style.css':'style.css'};
  if(!files[path])return json(res,404,{error:'Not found.'});
  const bytes=await readFile(join(root,files[path]));res.writeHead(200,{'Content-Type':path.endsWith('.js')?'text/javascript':path.endsWith('.css')?'text/css':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; frame-ancestors 'none'"});res.end(bytes);
 }catch{return json(res,500,{error:'Lab request failed.'});}});
 return {server,key,origin};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const lab=createLab();lab.server.on('error',e=>{console.error('Lab could not start:',e.message);process.exitCode=1;});lab.server.listen(4182,'127.0.0.1',()=>{console.log('Learner: '+lab.origin);console.log('Reviewer: '+lab.origin+'/review#key='+lab.key);console.log('Fictional records are memory-only. Ctrl+C stops and clears this lab.');});
}
