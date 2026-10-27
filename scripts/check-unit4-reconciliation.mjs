import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterPages} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {sessionPage} from '../planner-ui.js';
const data=JSON.parse(await readFile('audits/unit4-requirements.json','utf8')),rows=data.requirements;
assert.equal(data.version,'2013/35142[v6], effective 2027');assert(data.source.includes('/1273182/'));
assert.equal(rows.length,87);assert.equal(rows.filter(r=>!r.context).length,74);assert.equal(new Set(rows.map(r=>r.id)).size,87);
// Extracted marker order, not a certified semantic hierarchy: secure processing is flagged.
assert.deepEqual([1,2].map(depth=>rows.filter(r=>r.locator.split(' / ').at(-1).split('.').length===depth).length),[40,47]);
const roots={data:[13,3],networks:[3,2],impacts:[7,0],applications:[1,3],projects:[5,3]};
for(const [area,counts] of Object.entries(roots))for(const [i,kind] of ['Knowledge','Skills'].entries())assert.equal(rows.filter(r=>r.area===area&&r.kind===kind&&!r.parent).length,counts[i],area+' '+kind);
for(const r of rows){
 assert([10,11,12].includes(r.page));if(r.parent)assert(rows.some(p=>p.id===r.parent));assert.equal(r.context,rows.some(c=>c.parent===r.id));
 const [id,key]=r.explanation.split('#topic/')[1].split('/');const t=studentTopics.find(t=>t.id===id);assert(t&&t.unit===4);assert(chapterPages(t).some(p=>p.key===key),r.id+' '+key);
 for(const field of ['worked','practice','evidence']){const [file,anchor]=r[field].split('#');const body=await readFile('practical-packs/unit4-evidence/'+file,'utf8');assert(body.includes(`id="${anchor}"`));assert(body.includes('Actual learner performance'));assert(body.includes('fictional community-centre'));assert(body.includes('<section id="independent"><h2>Apply independently</h2><p>'));assert(body.includes('supplied model.</p><ol>'));}
 assert(r.source_url.endsWith('#page='+(r.page+4)));
}
for(const label of ['Disaster recovery plan','Audit trail','Full backup','Differential backup','Incremental backup','Data warehouses','Data marts','Cloud data','Passwords','Firewalls','Biometrics','Anti-virus software','Digital signatures','Digital certificates','Encryption','HTML and CSS','Graphics','Audio and video','Accessibility','Internationalisation','Mobile web','TCP/IP','HTTP','802.3 Ethernet','Physical security','Work hours','Employee email use','Employee internet use','Employee privacy','Data confidentiality','Document sensitivity','Accessibility level','Online-application availability','Service availability','Service types','Surveys','Client feedback','Self-reflection'])assert(rows.some(r=>r.summary===label),label);
assert.equal(rows.filter(r=>r.id.startsWith('U4-DATA-K4')).length,9);
assert(rows.filter(r=>r.id.startsWith('U4-DATA-K4')).every(r=>r.limitation.includes('Source-format review pending')));
assert(rows.find(r=>r.id==='U4-DATA-S2').limitation.includes('second-browser'));
for(const r of rows.filter(r=>r.id.startsWith('U4-APPLICATIONS-S')))assert(r.limitation.includes('loopback'));
const map=await readFile('audits/unit4-reconciliation.html','utf8');assert(map.includes('Year 12 from 2027'));assert(map.includes('Source-format review pending'));
const sla=JSON.parse(await readFile('practical-packs/unit4-evidence/sla-model.json','utf8'));
assert(sla.fictional);assert.equal(sla.window_minutes,30*24*60);assert.equal(sla.allowed_unavailability_minutes,216);assert(Math.abs(sla.window_minutes*(1-sla.target_percent/100)-216)<1e-9);assert.equal(sla.calculated_availability_percent,(43200-180)/43200*100);
const svg=await readFile('practical-packs/unit4-evidence/centre-lan.svg','utf8');assert(svg.includes('<title'));assert(svg.includes('not an implemented configuration'));assert(svg.includes('Separate SSID names alone do not prove isolation'));
const log=await readFile('practical-packs/unit4-evidence/review-log.csv','utf8');assert(log.includes('expected_result,actual_observation,status,revision,retest,reviewer'));
for(const id of ['u4-data','u4-web','u4-networks','u4-impacts','u4-applications','u4-projects'])assert(studentPage(id).includes('unit4-evidence/'));
assert(sessionPage('U4-W01-L1').includes('unit4-evidence/'));
for(const file of ['unit4-student-workbook.html','unit4-answer-workbook.html'])assert((await readFile(file,'utf8')).includes('unit4-evidence/'));
console.log('Passed: Unit 4 87-row review structure, 74 leaves, explicit source-format caveat, 2027 metadata/PDF offsets, exact teaching destinations, operational limits, fictional SLA arithmetic and chapter/session/worksheet integration.');
