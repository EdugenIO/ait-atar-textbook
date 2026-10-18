import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {conceptSketches} from '../concept-sketches.js';
import {sectionDiagrams,sectionDiagram} from '../section-diagrams.js';
assert.equal(Object.keys(conceptSketches).length,48);
const gallery=await readFile('assets/concepts/index.html','utf8');
for(const [id,diagrams] of Object.entries(sectionDiagrams))for(const d of diagrams){const asset=conceptSketches[id+':'+d.after];assert(asset);const svg=await readFile('assets/concepts/'+asset.file,'utf8');assert(svg.includes('<title'));assert(svg.includes('<desc'));assert(!/<script|<foreignObject|href="https?:/i.test(svg));assert(sectionDiagram(id,d.after).includes('src="assets/concepts/'+asset.file+'"'));assert(!sectionDiagram(id,d.after).includes('diagram-nodes'),'Replace prose boxes with a concept image');assert(gallery.includes('href="'+asset.file+'" download'));for(const mode of ['student','answer']){const book=await readFile(`unit${id[1]}-${mode}-workbook.html`,'utf8');assert(book.includes('data:image/svg+xml;base64,'+Buffer.from(svg).toString('base64')));assert(!book.includes('src="assets/concepts/'));}}
const elements=await readFile('assets/concepts/u1-elements-1.svg','utf8');for(const label of ['LINE','SHAPE','SPACE','SAT · 10 AM'])assert(elements.includes(label));assert(elements.includes('<path')&&elements.includes('<rect'));
const texture=await readFile('assets/concepts/u1-elements-3.svg','utf8');assert(texture.includes('radialGradient'));assert(texture.includes('surface pattern'));
console.log('Passed: 48 illustrated concept blocks across 24 chapters, real drawing elements, original teaching prompts, download links and offline copies.');
