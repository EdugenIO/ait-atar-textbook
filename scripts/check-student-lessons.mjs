import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentLessons,studentLessonPage,studentLessonIndex,chapterLessonLinks} from '../student-lessons.js';
import {studentTopics} from '../student-topics.js';
import {teachingLessons,examWeeks} from '../teaching.js';
import {sessionPage,sessionPhases} from '../planner-ui.js';
import {chapterOverview} from '../chapter-pages.js';
import {studentUnit} from '../student-ui.js';
assert.equal(studentLessons.length,256);assert.equal(new Set(studentLessons.map(l=>l.id)).size,256);assert.equal(new Set(studentLessons.map(l=>l.model)).size,256);
for(const unit of [1,2,3,4]){
 assert.equal(studentLessons.filter(l=>l.unit===unit).length,64);assert(studentUnit(unit).includes('#learning/'+unit));
 const index=studentLessonIndex(unit);for(const l of studentLessons.filter(l=>l.unit===unit))assert(index.includes('#learn/'+l.id));
}
let minWords=Infinity,maxWords=0;
for(const l of studentLessons){
 const original=teachingLessons.find(t=>t.id===l.id);assert.equal(l.task,original.task);assert.equal(l.minutes,55);assert.equal(sessionPhases(l).reduce((n,p)=>n+p.minutes,0),55);
 assert(l.week<=16);const t=studentTopics.find(t=>t.id===l.chapter);assert(t&&t.unit===l.unit);assert(l.sections.length>=1&&l.sections.length<=3);
 for(const i of l.sections)assert(t.sections[i],l.id+' missing section '+i);
 const page=studentLessonPage(l.id);assert(page.includes(l.model.replaceAll('&','&amp;').replaceAll('>','&gt;').replaceAll('<','&lt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));
 const ids=[...page.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,l.id+' duplicate IDs');
 for(const strategy of ['retrieval','explicit-instruction','worked-example','self-explanation','faded-example','peer-instruction','independent-application','metacognition','error-analysis','interleaved-practice','transfer'])assert(page.includes('data-strategy="'+strategy+'"'),l.id+' '+strategy);
 assert(page.includes('lesson-extension'));assert(page.includes('not additional required activities'));assert(!/<form|<textarea|localStorage/.test(page));assert(!page.includes('<img'),'Do not repeat chapter artwork across every scheduled lesson');
 assert(sessionPage(l.id).includes('#learn/'+l.id));assert(chapterOverview(l.chapter).includes('#learn/'+l.id));assert(chapterLessonLinks(l.chapter).includes('#learn/'+l.id));
 const standalone=await readFile('student-lessons/'+l.id+'.html','utf8');assert(standalone.includes('id="lesson-main"'));assert(standalone.includes('href="#lesson-main"'));assert(standalone.includes('href="../index.html#session/'+l.id+'"'));assert(!standalone.includes('href="student-lessons/'));
 for(const [,target] of standalone.matchAll(/href="U[1-4]-W\d\d-L\d\.html#([^"]+)"/g))assert(ids.includes(target));
 const words=page.replace(/<[^>]+>/g,' ').split(/\s+/).filter(Boolean).length;minWords=Math.min(words,minWords);maxWords=Math.max(words,maxWords);assert(words>900,l.id+' needs substantive reading/model/practice');
}
assert.equal(examWeeks.length,8);assert(studentLessonPage('missing').includes('not found'));assert(studentLessonIndex(5).includes('not found'));
const build=await readFile('scripts/build.mjs','utf8');assert(build.includes("'student-lessons.js'"));assert(build.includes("'lesson-sequence.js'"));assert(build.includes("cp('student-lessons','dist/student-lessons'"));
console.log(`Passed: 256 separate student lessons, 256 distinct model decisions, valid explicit readings and standalone links, chapter/unit/teacher navigation, 11 strategy hooks, optional practice and preserved 55-minute/exam boundaries. Rendered depth: ${minWords}–${maxWords} words including optional reference material.`);
