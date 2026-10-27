import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {practicalResources} from '../practical-resources.js';
import {studentPage} from '../student-ui.js';
import {sessionPage} from '../planner-ui.js';
const manifest=JSON.parse(await readFile('audits/2026-10-27-practical-file-evidence.json','utf8'));
for(const [file,expected] of Object.entries(manifest)){
 const data=await readFile(file);assert.equal(data.length,expected.bytes,file);assert.equal(createHash('sha256').update(data).digest('hex'),expected.sha256,file);
}
const p='practical-packs/production-workflows/',c='practical-packs/worked-cases/';
const verification=JSON.parse(await readFile(p+'verification.json','utf8'));
for(const [file,m] of Object.entries(verification.image_exports)){assert.equal((await stat(p+'exports/'+file)).size,m.bytes);if(file.endsWith('.png')){const b=await readFile(p+'exports/'+file);assert.equal(b.readUInt32BE(16),800);assert.equal(b.readUInt32BE(20),500);}}
// Read actual GIF blocks: count images and accumulate GCE delays, not a filename/JSON promise.
const gif=await readFile(p+'exports/motion-24.gif');assert.equal(gif.toString('ascii',0,3),'GIF');
let offset=13,frames=0,centiseconds=0;if(gif[10]&128)offset+=3*(2**((gif[10]&7)+1));
function skipBlocks(){while(gif[offset])offset+=gif[offset]+1;offset++;}
while(offset<gif.length){const kind=gif[offset++];if(kind===0x3b)break;
 if(kind===0x21){const label=gif[offset++];if(label===0xf9){assert.equal(gif[offset],4);centiseconds+=gif.readUInt16LE(offset+2);}skipBlocks();}
 else if(kind===0x2c){frames++;const packed=gif[offset+8];offset+=9;if(packed&128)offset+=3*(2**((packed&7)+1));offset++;skipBlocks();}
 else throw Error('Unexpected GIF block '+kind);
}
assert.equal(frames,24);assert.equal(centiseconds,200);
const wav=await readFile(p+'exports/mix-reference.wav');assert.equal(wav.toString('ascii',0,4),'RIFF');let audio,rate,channels;
for(let n=12;n+8<=wav.length;){const name=wav.toString('ascii',n,n+4),size=wav.readUInt32LE(n+4);if(name==='fmt '){assert.equal(wav.readUInt16LE(n+8),1);channels=wav.readUInt16LE(n+10);rate=wav.readUInt32LE(n+12);assert.equal(wav.readUInt16LE(n+22),16);}if(name==='data')audio=wav.subarray(n+8,n+8+size);n+=8+size+(size%2);}
assert.equal(audio.length/(channels*2*rate),12);let peak=0;for(let n=0;n<audio.length;n+=2)peak=Math.max(peak,Math.abs(audio.readInt16LE(n)));assert(peak<32767);assert.equal(peak,verification.audio.peak_pcm16);
const survey=(await readFile(c+'survey-responses.csv','utf8')).trim().split(/\r?\n/).slice(1).map(line=>line.split(','));assert.equal(survey.length,24);
const analysis=JSON.parse(await readFile(c+'survey-analysis.json','utf8'));
for(const version of ['before','after']){const rows=survey.filter(r=>r[1]===version);assert.equal(rows.length,12);assert.equal(new Set(rows.map(r=>r[0])).size,12);assert.equal(rows.reduce((sum,r)=>sum+Number(r[3]),0),analysis[version].completed);assert.equal(rows.reduce((sum,r)=>sum+Number(r[5]),0)/12,analysis[version].mean_ease);const times=rows.map(r=>Number(r[4])).sort((a,b)=>a-b);assert.equal((times[5]+times[6])/2,analysis[version].median_seconds_all_attempts);}
assert.equal(analysis.before.median_seconds_all_attempts,30.5);
for(const id of ['u1-applications','u2-data','u2-applications','u3-applications','u3-hardware','u4-data','u4-web','u4-impacts','u4-projects']){assert(practicalResources[id].some(([,url])=>/production-workflows|worked-cases/.test(url)));assert(/production-workflows|worked-cases/.test(studentPage(id)));}
assert(sessionPage('U3-W05-L1').includes('worked-cases/mobile-trend.html'));assert(sessionPage('U4-W12-L1').includes('worked-cases/survey-revision.html'));
const restored=JSON.parse(await readFile(p+'recovery/observed-restore.json','utf8'));assert.equal(restored.restored_sha256,restored.approved_v1_sha256);assert.notEqual(restored.restored_sha256,restored.working_v2_sha256);
console.log('Passed: bound file hashes, actual GIF frame/delay blocks, WAV duration/peak, paired survey totals/means/medians, recovery digests and chapter/session integration. Native editor/OS trials remain explicit.');
