import {processImages,imagePlacements} from '../process-images.js';
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
assert.equal(visualTitles.size,24,'Each chapter needs its own visual teaching example');
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
console.log('Passed: twenty-four distinct visual guides, transfer practice, glossary destinations, both print controls and answer-free student worksheets.');

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
console.log('Passed: 48 section diagrams across all authored chapters, with prompts in worksheets and explanations only in answer copies.');

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
console.log('Passed: annotated models and two reinforcement activities in all 24 chapters; student worksheets preserve prompts and omit solutions.');

assert.equal(Object.keys(imagePlacements).length,studentTopics.length);
for(const topic of studentTopics){
 const asset=processImages[imagePlacements[topic.id].asset];
 const bytes=await readFile('assets/processes/'+asset.file);
 if(asset.file.endsWith('.svg'))assert(bytes.toString('utf8').includes('<svg')&&bytes.toString('utf8').includes('<desc'));
 else assert.equal(bytes.toString('ascii',0,4),'RIFF');
 assert(asset.alt.length>40);
 assert.equal((studentPage(topic.id).match(/class="process-illustration"/g)||[]).length,1);
 const worksheet=await readFile(`unit${topic.unit}-student-workbook.html`,'utf8');
 assert(worksheet.includes('data:image/webp;base64,'),'Downloaded worksheets must include offline images');
 assert(!worksheet.includes('src="assets/processes/'),'No external image dependency in downloaded worksheets');
}
console.log('Passed: illustrated processes in all 24 chapters, descriptive alternatives and embedded worksheet images.');

assert.equal((studentPage('u4-networks').match(/Session plan/g)||[]).length,8);

assert.equal((studentPage('u4-impacts').match(/Session plan/g)||[]).length,12);

assert.equal((studentPage('u4-applications').match(/Session plan/g)||[]).length,12);

assert.equal((studentPage('u4-projects').match(/Session plan/g)||[]).length,16);

for(const unit of [1,2,3,4]){
 const answers=await readFile(`unit${unit}-answer-workbook.html`,'utf8');
 assert(!answers.includes('<details class="answer">'),'Answer workbooks must not leave answer panels collapsed by default');
 assert(answers.includes('<details class="answer" open>'));
}
for(const topic of studentTopics){
 const seen=new Set([topic.id]);let cursor=topic;
 while(cursor.prerequisite){assert(!seen.has(cursor.prerequisite),'Prerequisite cycle');seen.add(cursor.prerequisite);cursor=studentTopics.find(t=>t.id===cursor.prerequisite);assert(cursor,'Missing prerequisite');}
}
console.log('Passed: printable answer visibility and complete acyclic prerequisite links.');

for(const unit of [1,2,3,4])for(const mode of ['student','answer']){
 const html=await readFile(`unit${unit}-${mode}-workbook.html`,'utf8');
 const home='https://edugenio.github.io/ait-atar-textbook/#home';
 assert.equal(html.split(`href="${home}"`).length-1,2,'Home navigation at both ends of every worksheet');
 assert(html.includes(`href="https://edugenio.github.io/ait-atar-textbook/#unit/${unit}"`),'Return to matching unit');
 assert(html.includes('worksheet-navigation no-print'),'Navigation must stay off printed worksheets');
}
console.log('Passed: all eight worksheets link to textbook home and matching unit, including downloaded copies.');
