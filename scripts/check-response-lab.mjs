import assert from 'node:assert/strict';
import {request} from 'node:http';
import {createLab} from '../practical-packs/response-lab/server.mjs';
const port=4193;
const fetchFresh=(url,options={})=>globalThis.fetch(url,{...options,headers:{...options.headers,Connection:'close'}});
async function run(key,check){
 const lab=createLab({port,key});
 await new Promise((resolve,reject)=>{lab.server.once('error',reject);lab.server.listen(port,'127.0.0.1',resolve);});
 try{await check(lab);}finally{await new Promise(resolve=>{lab.server.close(resolve);lab.server.closeAllConnections();});}
}
await run('test-first-run',async({origin,key})=>{
 const send=(data,headers={})=>fetchFresh(origin+'/api/response',{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(data)});
 let response=await send({workshop:'design',size:4});assert.equal(response.status,201);
 for(const data of [{workshop:'design',size:13},{workshop:'design',size:0},{workshop:'design',size:2.5},{workshop:'other',size:4},{workshop:'design',size:'4'},{workshop:'design',size:4,name:'fictional extra field'},null])assert.equal((await send(data)).status,400);
 assert.equal((await send({workshop:'design',size:4},{Origin:'https://unrelated.example'})).status,403);
 const badHost=await new Promise((resolve,reject)=>{const req=request(origin+'/api/response',{method:'POST',headers:{Host:'unrelated.example','Content-Type':'application/json'}},res=>{res.resume();res.on('end',()=>resolve(res.statusCode));});req.on('error',reject);req.end(JSON.stringify({workshop:'design',size:4}));});assert.equal(badHost,403);
 assert.equal((await fetchFresh(origin+'/api/records')).status,403);
 assert.equal((await fetchFresh(origin+'/api/records',{method:'DELETE'})).status,403);
 const headers={'X-Lab-Key':key};
 let data=await (await fetchFresh(origin+'/api/records',{headers})).json();assert.equal(data.records.length,1);assert.deepEqual(data.records[0],{id:1,workshop:'design',size:4});
 assert.equal((await fetchFresh(origin+'/api/response',{method:'POST',headers:{'Content-Type':'application/json'},body:'{'})).status,400);
 assert.equal((await send({workshop:'design',size:4,extra:'x'.repeat(2000)})).status,413);
 await fetchFresh(origin+'/api/records',{method:'DELETE',headers});
 data=await (await fetchFresh(origin+'/api/records',{headers})).json();assert.equal(data.records.length,0);
});
await run('test-new-run',async({origin,key})=>{
 assert.equal((await fetchFresh(origin+'/api/records',{headers:{'X-Lab-Key':'test-first-run'}})).status,403);
 const data=await (await fetchFresh(origin+'/api/records',{headers:{'X-Lab-Key':key}})).json();assert.deepEqual(data.records,[]);
});
console.log('Passed: real local receiving-side rules, role-key access, cross-origin/host restrictions, deletion and restart isolation.');
