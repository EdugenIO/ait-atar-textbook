import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterPages} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {sessionPage} from '../planner-ui.js';
const data=JSON.parse(await readFile('audits/unit3-requirements.json','utf8')),rows=data.requirements;
assert.equal(data.version,'2013/35142[v6], effective 2027');
assert(data.source.includes('/1273182/'));
assert.equal(rows.length,75);assert.equal(rows.filter(r=>!r.context).length,67);assert.equal(new Set(rows.map(r=>r.id)).size,75);
// Counted from the content outline, excluding the five introductory area labels.
assert.deepEqual([1,2,3].map(depth=>rows.filter(r=>r.locator.split(' / ').at(-1).split('.').length===depth).length),[42,30,3]);
const roots={design:[2,5],hardware:[4,2],impacts:[8,0],applications:[6,6],projects:[3,6]};
for(const [area,counts] of Object.entries(roots))for(const [i,kind] of ['Knowledge','Skills'].entries())assert.equal(rows.filter(r=>r.area===area&&r.kind===kind&&!r.parent).length,counts[i],area+' '+kind);
for(const r of rows){
 assert([7,8,9].includes(r.page));if(r.parent)assert(rows.some(p=>p.id===r.parent));assert.equal(r.context,rows.some(c=>c.parent===r.id));
 const [id,key]=r.explanation.split('#topic/')[1].split('/');const t=studentTopics.find(t=>t.id===id);assert(t&&t.unit===3);assert(chapterPages(t).some(p=>p.key===key),r.id+' '+key);
 for(const field of ['worked','practice','evidence']){const [file,anchor]=r[field].split('#');const body=await readFile('practical-packs/unit3-evidence/'+file,'utf8');assert(body.includes(`id="${anchor}"`));assert(body.includes('Actual learner performance'));assert(body.includes('fictional community-festival'));}
 // The web PDF reader identifies printed p.7 as zero-based P10: physical page 11.
 assert(r.source_url.endsWith('#page='+(r.page+4)));
}
for(const label of ['Usability','Inclusivity','Accessibility','Colour schemes','Colour profiles','Multi-layer track editing','Frames','Typography','Templates','Prototype','Structured','Storyboards','Site maps','Flow charts','Gantt charts','Project management software','User experience (UX)','User interface (UI)'])assert(rows.some(r=>r.summary===label),label);
assert(rows.find(r=>r.id==='U3-APPLICATIONS-S5.1').limitation.includes('CSS palette'));
assert(rows.find(r=>r.id==='U3-APPLICATIONS-S3').limitation.includes('multi-track application project'));
const map=await readFile('audits/unit3-reconciliation.html','utf8');assert(map.includes('Year 12 from 2027'));assert(!map.includes('Year 11 from 2026'));
const html=await readFile('practical-packs/unit3-evidence/festival.html','utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
for(const [,anchor] of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(anchor));
assert(html.includes('<details><summary>Help finding a session'));assert(html.includes('id="main" tabindex="-1"'));assert(!html.includes('<form'));assert(!html.includes('<script'));
const css=await readFile('practical-packs/unit3-evidence/festival.css','utf8');for(const feature of [':focus-visible','@media(max-width:600px)','@media print','.skip:focus'])assert(css.includes(feature));
const log=await readFile('practical-packs/unit3-evidence/evidence-log.csv','utf8');assert(log.includes('expected_result,actual_observation,status,revision,retest'));
for(const id of ['u3-design','u3-hardware','u3-impacts','u3-applications','u3-projects'])assert(studentPage(id).includes('unit3-evidence/'));
assert(sessionPage('U3-W01-L1').includes('unit3-evidence/'));
assert.equal(studentTopics.filter(t=>t.unit===3).length,5);
console.log('Passed: Unit 3 source hierarchy (42/30/3), 67 leaves, 2027 metadata and PDF offsets, valid section/model/task/check links, explicit operational limits, template anchors/help/keyboard/print structure and lesson integration.');
