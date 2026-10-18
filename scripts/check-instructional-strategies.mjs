import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {instructionalActivities,learningStrategy,teachingStrategyGuide} from '../instructional-strategies.js';
import {studentTopics} from '../student-topics.js';
import {topicPage} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {slug} from '../learning-tools.js';
assert.equal(Object.keys(instructionalActivities).length,studentTopics.length);
assert(new Set(Object.values(instructionalActivities).map(a=>a.strategy)).size>=12,'Use varied strategies');
for(const t of studentTopics){
 const a=instructionalActivities[t.id];assert(a.index>=0&&a.index<t.sections.length);assert.equal(a.steps.length,3);
 const activity=learningStrategy(t.id,a.index);assert(activity.includes('class="answer"'));assert(activity.includes('class="teacher-note"'));
 assert(topicPage(t.id,slug(t.sections[a.index][0])).includes(activity),t.id+' focused activity');
 assert(studentPage(t.id).includes(activity),t.id+' full activity');
 assert(topicPage(t.id,'resources').includes(teachingStrategyGuide(t.id)),t.id+' teacher guide');
 for(const mode of ['student','answer']){
 const book=await readFile(`unit${t.unit}-${mode}-workbook.html`,'utf8');assert(book.includes(a.context.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));
 if(mode==='student'){assert(!book.includes('Teaching move: model, listen and respond'));assert(!book.includes('class="answer"'));}
 else assert(book.includes(teachingStrategyGuide(t.id)));
 }
}
assert.equal(learningStrategy('missing',1),'');
console.log('Passed: 24 distinct chapter activities, varied strategies, exact concept placement, teacher guidance and answer-free student worksheets.');
