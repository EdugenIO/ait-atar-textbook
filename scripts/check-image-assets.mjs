import assert from 'node:assert/strict';
import {stat,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {studentTopics} from '../student-topics.js';
import {chapterPages,chapterOverview,topicPage} from '../chapter-pages.js';
import {studentPage} from '../student-ui.js';
const images=new Set();let routes=0;
for(const t of studentTopics){
 const pages=[chapterOverview(t.id),studentPage(t.id),...chapterPages(t).map(p=>topicPage(t.id,p.key))];
 for(const html of pages){routes++;for(const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/g)){
 const tag=match[0],src=match[1];assert(/\balt="[^"]+"/.test(tag),'Image needs a descriptive alternative');
 if(src.startsWith('data:'))continue;assert(!/^https?:/.test(src),'Lesson images should be bundled for reliable delivery');images.add(src);
 }}
}
for(const src of images){const path=resolve(src);assert((await stat(path)).size>0,'Missing source image '+src);if(src.endsWith('.svg')){const svg=await readFile(path,'utf8');assert(svg.includes('<svg')&&svg.includes('<title')&&svg.includes('<desc'),'Incomplete SVG '+src);}}
const alignment=await readFile('assets/concepts/u1-typography-1-v031.svg','utf8');assert(!alignment.includes('Tea       $3'),'SVG spaces do not position columns');
for(const t of studentTopics.filter(t=>t.id==='u1-typography'))for(const [i,section] of t.sections.entries()){
 const page=topicPage(t.id,chapterPages(t)[i].key);assert(/<img\b|<svg\b/.test(page),'Typography concept needs a visible example: '+section[0]);
}
console.log(`Passed: ${images.size} bundled images exist across ${routes} rendered lesson routes; all five typography concepts have visible examples.`);
