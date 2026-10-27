import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {studentTopics} from '../student-topics.js';
import {studentPage} from '../student-ui.js';
import {processImages,imagePlacements} from '../process-images.js';
const files=new Set(),hashes=new Set(),chapters=[],chapterImages=new Map();
for(const t of studentTopics){
 const asset=processImages[imagePlacements[t.id].asset],bytes=await readFile('assets/processes/'+asset.file);
 assert(!files.has(asset.file),'Process image reused across chapters: '+asset.file);files.add(asset.file);
 const hash=createHash('sha256').update(bytes).digest('hex');assert(!hashes.has(hash),'Renamed duplicate image: '+asset.file);hashes.add(hash);
 const page=studentPage(t.id);assert(page.includes('src="assets/processes/'+asset.file+'"'));assert(asset.alt.length>40);
 for(const src of new Set([...page.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1]))){if(!chapterImages.has(src))chapterImages.set(src,[]);chapterImages.get(src).push(t.id);}
 const worksheet=await readFile(`unit${t.unit}-student-workbook.html`,'utf8');
 assert(worksheet.includes('data:'+(asset.file.endsWith('.svg')?'image/svg+xml':'image/webp')+';base64,'+bytes.toString('base64')),'Worksheet image MIME/bytes mismatch');
 if(asset.file.endsWith('.svg')){const svg=bytes.toString('utf8');assert(svg.includes('width="900" height="430"'));assert(svg.includes('<title id="title">')&&svg.includes('<desc id="desc">'));assert(asset.credit.startsWith('Original textbook SVG'));}
 chapters.push({chapter:t.id,file:asset.file,sha256:hash});
}
assert.equal(files.size,24);assert.equal(chapters.filter(c=>c.file.endsWith('.svg')).length,17);
const crossChapterImageReuse=[...chapterImages].filter(([,ids])=>ids.length>1).map(([file,chapters])=>({file,chapters}));
assert.equal(crossChapterImageReuse.length,0,'Unexpected image-file reuse across different main chapters');
await writeFile('audits/process-image-diversity.json',JSON.stringify({edition:'0.44',scope:'Main-chapter image inventory, excluding repeated focused views and worksheets of the same chapter. Inline SVG/HTML visual blocks are outside the img-file inventory.',uniqueFiles:files.size,uniqueHashes:hashes.size,allChapterImageFiles:chapterImages.size,crossChapterImageReuse,chapters},null,2)+'\n');
console.log('Remaining cross-chapter img-file reuse: '+JSON.stringify(crossChapterImageReuse));
console.log('Passed: 24 distinct chapter process images (17 original SVGs + 7 retained WebPs), distinct file hashes, truthful credits and exact offline worksheet MIME/bytes.');
