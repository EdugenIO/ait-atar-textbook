import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import vm from 'node:vm';
import {practicalResources} from '../practical-resources.js';
const dir='practical-packs/publication-workflow/';
const metadata=JSON.parse(await readFile(dir+'asset-evidence.json','utf8'));
for(const [name,m] of Object.entries(metadata)){const bytes=await readFile(dir+name);assert.equal(bytes.length,m.bytes);if(name.endsWith('.png')){assert.equal(bytes.readUInt32BE(16),m.pixels[0]);assert.equal(bytes.readUInt32BE(20),m.pixels[1]);assert.equal(bytes.includes(Buffer.from('iCCP')),m.profile_bytes>0);}}
const screen=await readFile(dir+'screen-reference.jpg');assert(screen.includes(Buffer.from('ICC_PROFILE')));assert(metadata['screen-reference.jpg'].bytes<=500000);assert.deepEqual(metadata['screen-reference.jpg'].pixels,[1260,888]);assert.equal(metadata['untagged-comparison.png'].profile_bytes,0);
const buttons={},output={textContent:''},pixels={value:'2520'},millimetres={value:'210'};
const context={document:{querySelector:s=>({'#calculate':{addEventListener:(type,fn)=>buttons[type]=fn},'#ppi-result':output,'#pixels':pixels,'#millimetres':millimetres}[s])}};
vm.createContext(context);vm.runInContext(await readFile(dir+'resolution.js','utf8'),context);
buttons.click();assert(output.textContent.includes('304.8'));
pixels.value='420';buttons.click();assert(output.textContent.includes('50.8'));
for(const [px,mm] of [['0','210'],['2520','0'],['2.5','210'],['2520','-1'],['Infinity','210']]){pixels.value=px;millimetres.value=mm;buttons.click();assert(output.textContent.startsWith('Enter a positive'));}
for(const id of ['u3-applications','u3-projects'])assert(practicalResources[id].some(([,url])=>url===dir+'index.html'));
assert((await stat('practical-packs/publication-workflow-v1.zip')).size>20000);
const guide=await readFile(dir+'index.html','utf8');assert(guide.includes('print outcome remains pending'));assert(guide.includes('Textbook home'));assert(guide.includes('Practical library'));
console.log('Passed: image metadata/ICC presence, screen dimensions and bytes, PPI boundaries, lesson integration and pack archive. Printer-specific proof remains unverified.');
