import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterPages} from '../chapter-pages.js';
const map=JSON.parse(await readFile('audits/unit1-requirements.json','utf8')),rows=map.requirements;
assert.equal(rows.length,133);assert.equal(rows.filter(r=>!r.context).length,108);assert.equal(new Set(rows.map(r=>r.id)).size,133);
// Independently transcribed outline counts from printed pp. 7–10. Introductory
// five-area list is excluded; parent contexts are not counted as leaf reviews.
const roots={design:[5,5],hardware:[10,1],impacts:[8,1],applications:[6,5],projects:[3,3]};
assert.deepEqual([1,2,3].map(depth=>rows.filter(r=>r.locator.split(' / ').at(-1).split('.').length===depth).length),[47,76,10]);
for(const [area,counts] of Object.entries(roots))for(const [i,kind] of ['Knowledge','Skills'].entries())assert.equal(rows.filter(r=>r.area===area&&r.kind===kind&&!r.parent).length,counts[i],area+' '+kind);
for(const r of rows){
 assert([7,8,9,10].includes(r.page));assert(r.status.includes('pending')||r.status.includes('unverified')||r.context);
 if(r.parent)assert(rows.some(parent=>parent.id===r.parent));
 assert.equal(r.context,rows.some(child=>child.parent===r.id));
 const [id,key]=r.explanation.split('#topic/')[1].split('/'),topic=studentTopics.find(t=>t.id===id);
 assert(topic&&topic.unit===1);assert(chapterPages(topic).some(p=>p.key===key),r.id);
 for(const field of ['worked','practice','evidence']){const [file,anchor]=r[field].split('#');const body=await readFile('practical-packs/unit1-evidence/'+file,'utf8');assert(body.includes(`id="${anchor}"`),r.id+' '+field);assert(body.includes('Teacher/classroom performance is unverified'));}
 assert(r.explanation_url.startsWith('https://edugenio.github.io/ait-atar-textbook/'));
 assert(r.source_url.endsWith('#page='+(r.page+4)));
}
for(const name of ['CGM','SVG','BMP','GIF','JPEG','TIFF','PNG','MP3','WAV','WMA','Windows','Mac OS / macOS','iOS','Android','Linux'])assert(rows.some(r=>r.summary===name),name);
const licences=await readFile('practical-packs/unit1-evidence/licences.html','utf8');assert(licences.includes('14-day trial'));assert(licences.includes('no installation is required'));
const svg=await readFile('practical-packs/unit1-evidence/element-comparison.svg','utf8');assert(svg.includes('radialGradient'));assert(svg.includes('Texture'));assert(svg.includes('Tone'));
console.log('Passed: Unit 1 source-order hierarchy (47/76/10), 108 leaf reviews, exact live chapter destinations, model/task/check anchors, named formats/OS and unverified-performance status.');
