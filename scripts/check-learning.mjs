import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentTopics} from '../student-topics.js';
import {chapterVisual,transferPractice,terms,slug,glossaryPage} from '../learning-tools.js';
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
assert.equal(visualTitles.size,4,'Each chapter needs its own visual teaching example');
const termIds=terms.map(([term])=>'term-'+slug(term));
assert.equal(new Set(termIds).size,terms.length,'Term URLs must be unique');
const sorted=[...terms].sort(([a],[b])=>a.localeCompare(b,'en-AU',{numeric:true}));
assert.deepEqual(terms,sorted);
for(const id of termIds)assert(glossaryPage().includes(`id="${id}"`));
const student=await readFile('unit1-student-workbook.html','utf8');
const answers=await readFile('unit1-answer-workbook.html','utf8');
assert(!student.includes('<details class="answer">'),'Student download must omit answer disclosures entirely');
for(const topic of studentTopics){
  assert(!student.includes(topic.guided.answer));
  assert(answers.includes(topic.guided.answer));
  assert(student.includes(topic.guided.prompt));
}
console.log('Passed: four distinct visual guides, transfer practice, glossary destinations, both print controls and answer-free student worksheets.');
