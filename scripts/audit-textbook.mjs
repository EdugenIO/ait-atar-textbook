import {readFile,stat,readdir,mkdir,writeFile} from 'node:fs/promises';
import {resolve,dirname,relative,extname} from 'node:path';
import {studentTopics} from '../student-topics.js';
import {studentPage} from '../student-ui.js';
import {chapterPages,topicPage} from '../chapter-pages.js';
const root=resolve('.'),broken=[],images=[],external=new Set(),pages=[];
async function inspect(label,html,base=root){
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  const duplicateIds=[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))];
  pages.push({page:label,words:html.replace(/<[^>]+>/g,' ').split(/\s+/).filter(Boolean).length,duplicateIds});
  for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    const url=m[1].replaceAll('&amp;','&');
    if(/^https?:/.test(url)){external.add(url);continue;}
    if(/^(#|data:|mailto:|tel:|blob:)/.test(url))continue;
    const path=decodeURIComponent(url.split(/[?#]/)[0]);if(!path)continue;
    const target=resolve(base,path.replace(/^\/ait-atar-textbook\//,''));
    try{await stat(target);}catch{broken.push({page:label,url});}
  }
  for(const m of html.matchAll(/<img\b[^>]*>/g))images.push({page:label,alt:/\balt="[^"]*"/.test(m[0]),dimensions:/\bwidth=/.test(m[0])&&/\bheight=/.test(m[0]),src:/\bsrc="([^"]+)"/.exec(m[0])?.[1]});
}
for(const t of studentTopics){await inspect(`#read/${t.id}`,studentPage(t.id));for(const p of chapterPages(t))await inspect(`#topic/${t.id}/${p.key}`,topicPage(t.id,p.key));}
async function walk(dir){const out=[];for(const entry of await readdir(dir,{withFileTypes:true})){if(['.git','dist','node_modules'].includes(entry.name))continue;const path=resolve(dir,entry.name);if(entry.isDirectory())out.push(...await walk(path));else if(extname(path)==='.html')out.push(path);}return out;}
for(const file of await walk(root))await inspect(relative(root,file),await readFile(file,'utf8'),dirname(file));
const result={authoredChapters:studentTopics.length,inspectedPages:pages.length,brokenLocalLinks:[...new Map(broken.map(x=>[JSON.stringify(x),x])).values()],duplicateIds:pages.filter(p=>p.duplicateIds.length),imageTags:images.length,imagesWithoutAlt:images.filter(i=>!i.alt),imagesWithoutDimensions:images.filter(i=>!i.dimensions).length,uniqueExternalLinks:external.size,longestChapters:pages.filter(p=>p.page.startsWith('#read')).sort((a,b)=>b.words-a.words).slice(0,6)};
await mkdir('audits',{recursive:true});await writeFile(process.argv[2]||'audits/latest-automated-inventory.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if(result.brokenLocalLinks.length||result.duplicateIds.length||result.imagesWithoutAlt.length||result.imagesWithoutDimensions)process.exitCode=1;
