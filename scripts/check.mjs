import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { units, chapters, sources } from '../curriculum.js';
import { lessons } from '../lessons.js';
import { pacing, teachingWeeks, teachingLessons, examWeeks, sequenceCsv } from '../teaching.js';
import { sessionPhases, teachingPage, sessionPage } from '../planner-ui.js';
import { studentTopics } from '../student-topics.js';
import { readingList, studentContents, studentPage } from '../student-ui.js';
assert.equal(sources[12].version,'2027');
assert.equal(sources[11].version,'2026');
assert.equal(units.length,4);assert.equal(chapters.length,20);
assert.equal(new Set(chapters.map(c=>c.id)).size,chapters.length);
for(const u of units)assert.equal(chapters.filter(c=>c.unit===u.id).length,5);
for(const [id,lesson] of Object.entries(lessons)){
  assert(chapters.some(c=>c.id===id&&c.status==='Draft pilot'));
  assert(lesson.goals.length>=3);assert(lesson.body.includes('<details>'));
  assert(lesson.body.includes('Evidence to keep:'));
}
for(const c of chapters)assert.equal(Boolean(lessons[c.id]),c.status==='Draft pilot');
const html=await readFile('index.html','utf8');
for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){
  if(match[1].startsWith('http'))continue;
  assert(!match[1].startsWith('/'),'Assets must work on GitHub Pages project paths');
  await readFile(match[1].split('?')[0]);
}
assert(html.includes('tabindex="-1"'));assert(html.includes('aria-live="polite"'));
console.log('Passed: syllabus versions, 4 units, 20 unique section mappings, 2 pilot lessons and project-relative assets.');
assert.equal(pacing.lessonMinutes,55);
assert.equal(teachingWeeks.length,64);assert.equal(teachingLessons.length,256);assert.equal(examWeeks.length,8);
assert.equal(new Set(teachingLessons.map(l=>l.id)).size,256);
for(const unit of units){
  const weeks=teachingWeeks.filter(w=>w.unit===unit.id);
  const slots=teachingLessons.filter(l=>l.unit===unit.id);
  assert.deepEqual(weeks.map(w=>w.week),Array.from({length:16},(_,i)=>i+1));
  assert.equal(weeks.length,16);assert.equal(slots.length,64);assert.equal(slots.reduce((s,l)=>s+l.minutes,0),3520);
  assert.equal(new Set(slots.map(l=>l.task)).size,64);
  assert.deepEqual(slots.map(l=>l.number),Array.from({length:64},(_,i)=>i+1));
  for(const w of weeks){assert.equal(w.lessons.length,4);assert(w.evidence);for(const id of w.chapterIds)assert(chapters.some(c=>c.id===id&&c.unit===unit.id));}
  for(const l of slots){assert.equal(l.minutes,55);assert.equal(sessionPhases(l).reduce((s,p)=>s+p.minutes,0),55);assert(sessionPage(l.id).includes('55 MINUTES'));}
  assert.deepEqual(examWeeks.filter(w=>w.unit===unit.id).map(w=>w.week),[17,18]);
  assert.equal(sequenceCsv(unit.id).split('\r\n').length,65);
  assert.equal((teachingPage(unit.id).match(/class="week-plan"/g)||[]).length,16);
}
for(const c of chapters)assert(teachingWeeks.some(w=>w.chapterIds.includes(c.id)),`No scheduled teaching for ${c.id}`);
for(const year of [11,12])assert.deepEqual([...teachingWeeks,...examWeeks].filter(w=>w.year===year).map(w=>w.yearWeek).sort((a,b)=>a-b),Array.from({length:36},(_,i)=>i+1));
assert(examWeeks.every(w=>w.teachingLessons===0));
assert.equal(sequenceCsv().split('\r\n').length,257);
assert(sessionPage('invalid').includes('Session not found'));
console.log('Passed: 256 unique sessions; 64 lessons / 3,520 minutes per unit; 55-minute phase budgets; 36 weeks per year; exam separation; all section links; filtered CSV exports.');
assert.equal(studentTopics.length,20);
assert.equal(new Set(studentTopics.map(t=>t.id)).size,20);
for(const topic of studentTopics){
  assert(teachingWeeks.some(w=>w.unit===topic.unit&&w.week===topic.week));
  assert(topic.quiz.answer>=0&&topic.quiz.answer<topic.quiz.options.length);
  assert(topic.sections.length>=4);assert(topic.practice.length>=3);assert(topic.task.steps.length>=4);
  assert(topic.task.evidence&&topic.task.success.length>=3&&topic.exit);
  assert(topic.chapterIds.every(id=>chapters.some(c=>c.id===id)));
  const page=studentPage(topic.id);
  for(const heading of ['What you’ll learn','Before you begin','Worked example','Try it with support','Practise and explain','Apply independently','Quick check','Chapter recap','Exit question'])assert(page.includes(heading));
  assert(page.includes('aria-live="polite"'));
}
assert.equal(readingList(1).length,8);assert(readingList(1)[0].href==='#read/u1-brief');
assert(!studentContents(12).includes('href="#unit/1"'));
assert(studentPage('invalid').includes('Chapter not found'));
console.log('Passed: twenty student chapters, valid weekly links, explanation/practice/application structure, answer keys and reading order.');

assert.equal(readingList(2).length,5);
assert.equal(readingList(2)[0].href,'#read/u2-data');
assert(studentPage('u2-data').includes('Chapter 2.1'));
assert(studentPage('u2-data').includes('unit2-student-workbook.html'));

assert.equal(readingList(3).length,5);
assert(studentPage('u3-design').includes('Chapter 3.1'));
assert(studentPage('u3-design').includes('YEAR 12'));
assert(studentPage('u3-design').includes('teaching from 2027'));
assert(studentPage('u3-design').includes('unit3-student-workbook.html'));
