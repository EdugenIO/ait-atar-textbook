import {reinforcementActivities} from '../reinforcement-activities.js';
import {sectionDiagrams} from '../section-diagrams.js';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterVisual,transferPractice,terms,slug,glossaryPage,escapeHtml} from '../learning-tools.js';
import {studentPage} from '../student-ui.js';
await import('./export-print-workbooks.mjs');
const visualTitles=new Set();
for(const topic of studentTopics){
  const visual=chapterVisual(topic.id);
  visualTitles.add(visual.match(/id="visual-heading">([^<]+)/)[1]);
  assert(visual.includes('Pause and predict:'));
  assert(visual.includes('Try a small change:'));
  assert(transferPractice(topic.id).includes('class="answer"'));
  const page=studentPage(topic.id);
  assert(page.includes('data-print-mode="student"')&&page.includes('data-print-mode="answers"'));
  for(const [term] of topic.vocabulary)assert(page.includes(`#glossary/term-${slug(term)}`));
}
assert.equal(visualTitles.size,20,'Each chapter needs its own visual teaching example');
const termIds=terms.map(([term])=>'term-'+slug(term));
assert.equal(new Set(termIds).size,terms.length,'Term URLs must be unique');
const sorted=[...terms].sort(([a],[b])=>a.localeCompare(b,'en-AU',{numeric:true}));
assert.deepEqual(terms,sorted);
for(const id of termIds)assert(glossaryPage().includes(`id="${id}"`));
for(const unit of [1,2,3,4]){
const student=await readFile(`unit${unit}-student-workbook.html`,'utf8');
const answers=await readFile(`unit${unit}-answer-workbook.html`,'utf8');
assert(!student.includes('<details class="answer">'),'Student download must omit answer disclosures entirely');
for(const topic of studentTopics.filter(t=>t.unit===unit)){
  assert(!student.includes(escapeHtml(topic.guided.answer)));
  assert(answers.includes(escapeHtml(topic.guided.answer)));
  assert(student.includes(escapeHtml(topic.guided.prompt)));
}
}
console.log('Passed: twenty distinct visual guides, transfer practice, glossary destinations, both print controls and answer-free student worksheets.');

assert.equal((studentPage('u1-hardware').match(/Session plan/g)||[]).length,8);
assert.equal((studentPage('u1-typography').match(/Session plan/g)||[]).length,4);
assert(studentPage('u1-typography').includes('#read/u1-hardware'));

for(const [id,count] of [['u1-applications',16],['u1-impacts',8],['u1-projects',12]])assert.equal((studentPage(id).match(/Session plan/g)||[]).length,count);

for(const topic of studentTopics)for(const [,file] of topic.downloads||[])assert((await readFile(file)).length>0);

for(const [id,count] of [['u2-data',12],['u2-networks',12],['u2-impacts',8]])assert.equal((studentPage(id).match(/Session plan/g)||[]).length,count);

for(const id of ['u2-applications','u2-projects'])assert.equal((studentPage(id).match(/Session plan/g)||[]).length,16);
assert(studentPage('u2-projects').includes('WEEKS 1, 12, 14, 15'));

for(const [id,count] of [['u3-design',16],['u3-hardware',8],['u3-impacts',12]])assert.equal((studentPage(id).match(/Session plan/g)||[]).length,count);

assert.equal((studentPage('u3-applications').match(/Session plan/g)||[]).length,20);
assert.equal((studentPage('u3-projects').match(/Session plan/g)||[]).length,16);
assert(studentPage('u3-design').includes('unit3-student-workbook.html'));

for(const id of ['u4-data','u4-web']){assert.equal((studentPage(id).match(/Session plan/g)||[]).length,12);assert(studentPage(id).includes('unit4-student-workbook.html'));}

assert.equal(Object.keys(sectionDiagrams).length,studentTopics.length);
for(const topic of studentTopics){
 const diagrams=sectionDiagrams[topic.id];
 assert.equal(diagrams.length,2);
 assert.equal((studentPage(topic.id).match(/class="lesson-diagram"/g)||[]).length,2);
 const student=await readFile(`unit${topic.unit}-student-workbook.html`,'utf8');
 const answers=await readFile(`unit${topic.unit}-answer-workbook.html`,'utf8');
 for(const diagram of diagrams){
  assert(diagram.after<topic.sections.length);
  assert(student.includes(escapeHtml(diagram.title)));
  assert(student.includes(escapeHtml(diagram.prompt)));
  assert(!student.includes(escapeHtml(diagram.answer)));
  assert(answers.includes(escapeHtml(diagram.answer)));
 }
}
console.log('Passed: 40 section diagrams across all authored chapters, with prompts in worksheets and explanations only in answer copies.');

assert.equal(Object.keys(reinforcementActivities).length,studentTopics.length);
for(const topic of studentTopics){
 const a=reinforcementActivities[topic.id];const page=studentPage(topic.id);
 assert.equal((page.match(/class="example-annotation"/g)||[]).length,2);
 assert(page.includes(escapeHtml(a.mistake))&&page.includes(escapeHtml(a.completion)));
 const student=await readFile(`unit${topic.unit}-student-workbook.html`,'utf8');
 const answers=await readFile(`unit${topic.unit}-answer-workbook.html`,'utf8');
 for(const text of [a.mistake,...a.steps,...a.annotations])assert(student.includes(escapeHtml(text)));
 for(const text of [a.correction,a.completion]){assert(!student.includes(escapeHtml(text)));assert(answers.includes(escapeHtml(text)));}
 assert(student.includes(escapeHtml(topic.worked.title)));
}
console.log('Passed: annotated models and two reinforcement activities in all 20 chapters; student worksheets preserve prompts and omit solutions.');
