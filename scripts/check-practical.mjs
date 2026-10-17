import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
const root=resolve('practical-packs/media-starter');
const manifest=JSON.parse(await readFile(root+'/manifest.json','utf8'));
for(const [name,meta] of Object.entries(manifest.images)){
 const data=await readFile(root+'/source/'+name);
 assert.equal(data.subarray(1,4).toString(),'PNG');
 assert.equal(data.readUInt32BE(16),meta.width);assert.equal(data.readUInt32BE(20),meta.height);
}
const audio={};
for(const [name,meta] of Object.entries(manifest.audio)){
 const data=await readFile(root+'/source/'+name);assert.equal(data.toString('ascii',0,4),'RIFF');assert.equal(data.toString('ascii',8,12),'WAVE');
 let fmt,pcm;
 for(let i=12;i+8<=data.length;){const type=data.toString('ascii',i,i+4),size=data.readUInt32LE(i+4);if(type==='fmt ')fmt=data.subarray(i+8,i+8+size);if(type==='data')pcm=data.subarray(i+8,i+8+size);i+=8+size+(size%2);}
 assert(fmt&&pcm);assert.equal(fmt.readUInt16LE(0),1,'Supplied audio must be PCM');
 const channels=fmt.readUInt16LE(2),rate=fmt.readUInt32LE(4),sampleWidth=fmt.readUInt16LE(14)/8;
 assert.equal(rate,meta.sample_rate);assert.equal(channels,meta.channels);assert.equal(sampleWidth,2);
 const seconds=pcm.length/(rate*channels*sampleWidth);assert(Math.abs(seconds-meta.seconds)<0.00001);
 let peak=0;for(let i=0;i<pcm.length;i+=2)peak=Math.max(peak,Math.abs(pcm.readInt16LE(i)));
 assert(peak>0&&peak<32767,'Audio must be non-silent and avoid clipped PCM peaks');
 audio[name]={pcm,rate,seconds};
}
const raw=audio['narration-raw.wav'],reference=audio['narration-reference.wav'];
assert(Math.abs(raw.seconds-reference.seconds-2)<0.00001);
assert(raw.pcm.subarray(0,raw.rate*2).every(n=>n===0));
assert(raw.pcm.subarray(raw.pcm.length-raw.rate*2).every(n=>n===0));
assert(raw.pcm.subarray(raw.rate*2,raw.pcm.length-raw.rate*2).equals(reference.pcm),'Trimming the two added seconds must preserve the reference narration');
async function inspect(folder){for(const name of await readdir(folder,{withFileTypes:true})){const file=resolve(folder,name.name);if(name.isDirectory()){await inspect(file);continue;}if(!file.endsWith('.html'))continue;const html=await readFile(file,'utf8');for(const [,link] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|#|data:)/.test(link))continue;await access(resolve(dirname(file),link.split('#')[0]));}}}
await inspect(root);
assert((await readFile('practical-packs/media-starter-v1.zip')).length>100000);
console.log('Passed: source image dimensions, non-clipping PCM, exact trim reference, local pack links and download archive.');
