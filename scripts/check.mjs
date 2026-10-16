import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { units, chapters, sources } from '../curriculum.js';
import { lessons } from '../lessons.js';
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
  await readFile(match[1]);
}
assert(html.includes('tabindex="-1"'));assert(html.includes('aria-live="polite"'));
console.log('Passed: syllabus versions, 4 units, 20 unique section mappings, 2 pilot lessons and project-relative assets.');
