import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {svgIllustrations} from '../svg-illustrations.js';
import {topicFigure,topicFigures} from '../topic-figures.js';
assert.equal(Object.keys(svgIllustrations).length,12);
for(const unit of [1,2,3,4])assert.equal(Object.keys(svgIllustrations).filter(id=>id.startsWith('u'+unit+'-')).length,3);
const gallery=await readFile('assets/diagrams/index.html','utf8');
for(const [id,asset] of Object.entries(svgIllustrations)){
 const svg=await readFile('assets/diagrams/'+asset.file,'utf8');assert(svg.includes('xmlns="http://www.w3.org/2000/svg"'));assert(svg.includes('<title id="title">'));assert(svg.includes('<desc id="desc">'));assert(svg.includes('viewBox="0 0 900 540"'));assert(!/<script|<foreignObject|(?:href|src)="https?:/i.test(svg),'SVGs must be self-contained');
 assert(asset.description.length>100);assert(gallery.includes('href="'+asset.file+'" download'));assert(topicFigure(id,topicFigures[id].index).includes('src="assets/diagrams/'+asset.file+'"'));
 for(const mode of ['student','answer']){const book=await readFile(`unit${id[1]}-${mode}-workbook.html`,'utf8');assert(book.includes('data:image/svg+xml;base64,'+Buffer.from(svg).toString('base64')));assert(!book.includes('src="assets/diagrams/'));}
}
console.log('Passed: 12 self-contained SVG illustrations, 3 per unit, descriptive alternatives, download gallery, lesson placement and offline worksheet embedding.');
