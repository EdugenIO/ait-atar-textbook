import {svgIllustrations} from '../svg-illustrations.js';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {topicFigure,topicFigures} from '../topic-figures.js';
import {studentTopics} from '../student-topics.js';
import {sectionDiagrams} from '../section-diagrams.js';
import {topicPage} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {slug} from '../learning-tools.js';
assert.equal(Object.keys(topicFigures).length,24);
for(const t of studentTopics){const f=topicFigures[t.id];assert(f);assert(f.index>=0&&f.index<t.sections.length);assert(!sectionDiagrams[t.id].some(d=>d.after===f.index),'Avoid placing a second figure on an already illustrated topic');assert(f.caption.length>60);const figure=topicFigure(t.id,f.index);assert(figure.includes('figure-explanation'));assert(!figure.includes('class="answer"'));assert(topicPage(t.id,slug(t.sections[f.index][0])).includes(figure));assert.equal(studentPage(t.id).split('class="topic-figure"').length-1,1);if(figure.includes('<svg')){assert(figure.includes('<title'));assert(figure.includes('<desc'));assert(figure.includes('role="img"'));}for(const mode of ['student','answer']){const book=await readFile(`unit${t.unit}-${mode}-workbook.html`,'utf8');assert(book.includes(f.title),'Printable version must retain the figure title');assert(book.includes(f.caption.replaceAll('&','&amp;').replaceAll('\"','&quot;').replaceAll("'",'&#39;')),'Printable caption preserved');if(svgIllustrations[t.id]){const bytes=await readFile('assets/diagrams/'+svgIllustrations[t.id].file);assert(book.includes('data:image/svg+xml;base64,'+bytes.toString('base64')),'SVG must be embedded for offline printing');}else assert(book.includes(figure));}}
assert((await readFile('assets/diagrams/lookup-row-trace.svg','utf8')).includes('return quantity 8'));assert((await readFile('assets/diagrams/lookup-row-trace.svg','utf8')).includes('A2:C4'));
assert(topicFigure('u4-applications',8).includes('1 and 12'));assert(topicFigure('u4-applications',8).includes('2.5 or letters'));
assert.equal(topicFigure('u1-hardware',0),'');assert.equal(topicFigure('missing',0),'');
console.log('Passed: 24 targeted figures across 4 units, no collisions with existing section diagrams, descriptive SVGs, exact topic placement and identical student/answer print content.');
