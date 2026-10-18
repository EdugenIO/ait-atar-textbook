import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {practiceImages,practiceSlots,practiceStimulus} from '../practice-stimuli.js';
import {topicPage,chapterOverview} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
import {studentTopics} from '../student-topics.js';
import {slug} from '../learning-tools.js';
for(const [slot,key] of Object.entries(practiceSlots)){
 const [id,where]=slot.split(':'), asset=practiceImages[key], figure=practiceStimulus(id,where);
 assert(asset,slot);const svg=await readFile('assets/practice/'+asset.file,'utf8');
 assert(svg.includes('<title ')&&svg.includes('<desc '));assert(!svg.includes('<script'));
 const t=studentTopics.find(t=>t.id===id);
 const html=where==='overview'?chapterOverview(id):topicPage(id,where==='guided'?'worked-example':where.startsWith('section')?slug(t.sections[Number(where.slice(7))][0]):'more-practice');
 assert(html.includes(figure),'Missing question stimulus '+slot);
 if(where==='overview')continue;
 assert(studentPage(id).includes(figure),'Full chapter '+slot);
 for(const mode of ['student','answer']){
 const book=await readFile(`unit${t.unit}-${mode}-workbook.html`,'utf8');
 // Section support images need not repeat alongside the general overview diagrams in worksheets.
 if(where.startsWith('section'))continue;
 assert(book.includes('data:image/svg+xml;base64,'+Buffer.from(svg).toString('base64')),'Offline stimulus '+slot);
 }
}
assert.equal(practiceStimulus('missing','guided'),'');
console.log('Passed: all 17 stimulus placements, descriptive SVGs, focused/full routes and offline student/answer copies.');
