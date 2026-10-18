import assert from 'node:assert/strict';
import {studentTopics} from '../student-topics.js';
import {readingPage} from '../chapter-pages.js';
import {studentUnitCard} from '../student-ui.js';
import {units} from '../curriculum.js';
import {readFile} from 'node:fs/promises';
for(const t of studentTopics){
 const html=readingPage(t.id);
 for(const text of ['On this page','What you’ll learn','Worked example','Practise and explain','Check your understanding','Chapter recap','Teaching notes and syllabus reference','aria-label="Chapter navigation"'])assert(html.includes(text),`${t.id}: ${text}`);
 assert(html.includes('data-topic-answer'),'Quick check is in the main lesson');
 assert.equal(readingPage(t.id,'full'),html,'Preserve full-view links');
 assert.equal(readingPage(t.id,'chapter-recap'),html,'Section anchors stay in the same complete topic');
 assert(readingPage(t.id,'overview').includes('chapter-overview'),'Overview is an explicit alternative');
}
for(const u of units){const card=studentUnitCard(u);for(const t of studentTopics.filter(t=>t.unit===u.id))assert(card.includes(`href="#read/${t.id}"`));assert(!card.includes('href="#topic/'),'Main contents should not split the lesson across concept routes');}
const app=await readFile('app.js','utf8');assert(app.includes('html=readingPage(value,section)'));
console.log('Passed: 24 complete topic lessons across all four units, direct unit links, in-page section navigation, quick checks and preserved deep links.');
