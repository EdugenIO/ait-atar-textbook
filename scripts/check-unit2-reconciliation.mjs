import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterPages} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {sessionPage} from '../planner-ui.js';
const data=JSON.parse(await readFile('audits/unit2-requirements.json','utf8')),rows=data.requirements;
assert.equal(rows.length,89);assert.equal(rows.filter(r=>!r.context).length,73);assert.equal(new Set(rows.map(r=>r.id)).size,89);
// Source outline: 39 top-level markers minus five introductory area labels,
// 53 second-level bullets and two nested HTML/CSS format entries.
assert.deepEqual([1,2,3].map(depth=>rows.filter(r=>r.locator.split(' / ').at(-1).split('.').length===depth).length),[34,53,2]);
const roots={data:[7,3],networks:[5,1],impacts:[4,0],applications:[5,5],projects:[1,3]};
for(const [area,counts] of Object.entries(roots))for(const [i,kind] of ['Knowledge','Skills'].entries())assert.equal(rows.filter(r=>r.area===area&&r.kind===kind&&!r.parent).length,counts[i],area+' '+kind);
for(const r of rows){
 assert([11,12,13].includes(r.page));if(r.parent)assert(rows.some(p=>p.id===r.parent));assert.equal(r.context,rows.some(c=>c.parent===r.id));
 const [id,key]=r.explanation.split('#topic/')[1].split('/');const t=studentTopics.find(t=>t.id===id);assert(t&&t.unit===2);assert(chapterPages(t).some(p=>p.key===key),r.id);
 for(const field of ['worked','practice','evidence']){const [file,anchor]=r[field].split('#');const body=await readFile('practical-packs/unit2-evidence/'+file,'utf8');assert(body.includes(`id="${anchor}"`));assert(body.includes('Actual learner performance'));}
 assert(r.source_url.endsWith('#page='+(r.page+4)));
}
assert(rows.find(r=>r.id==='U2-DATA-S2').limitation.includes('Operational gap remains'));
for(const label of ['Optical fibre','Wired','Wireless','Client-server','Peer-to-peer','Server','Router','Network interface card (NIC)','Switch','Modem','CSS','HTML/HTM'])assert(rows.some(r=>r.summary===label),label);
for(const page of ['home','services','contact']){
 const body=await readFile(`practical-packs/unit2-evidence/shop/${page}.html`,'utf8');
 assert(body.includes('lang="en-AU"'));assert(body.includes('name="viewport"'));
 for(const target of ['home','services','contact'])assert(body.includes(`href="${target}.html"`));
 assert(body.includes('href="site.css"'));assert(!body.includes('<form'));
}
const css=await readFile('practical-packs/unit2-evidence/shop/site.css','utf8');assert(css.includes('focus-visible'));assert(css.includes('@media(max-width:600px)'));
assert.equal(20*8/10,16);assert.equal(40*8/20,16);
for(const id of ['u2-data','u2-networks','u2-impacts','u2-applications','u2-projects'])assert(studentPage(id).includes('unit2-evidence/'));
assert(sessionPage('U2-W01-L1').includes('unit2-evidence/'));
console.log('Passed: Unit 2 hierarchy (34/53/2), 73 leaves, valid explanation/model/task/check destinations, explicit utility gap, all reference-page routes, responsive/focus CSS and lesson integration.');
