import {softwareLicenceComment,reuseFooter} from './reuse-notice.mjs';
import {mkdir,writeFile} from 'node:fs/promises';
import {studentLessons,studentLessonPage,studentLessonIndex} from '../student-lessons.js';
const out='student-lessons';await mkdir(out,{recursive:true});
function portable(html){return html.replace(/href="([^"]+)"/g,(all,url)=>{
 if(/^(https?:|data:|mailto:)/.test(url))return all;
 if(url.startsWith('#learn/')){const [,id,anchor]=url.split('/');return `href="${id}.html${anchor?'#'+anchor:''}"`;}
 if(url.startsWith('#learning'))return 'href="index.html'+(url.split('/')[1]?'#unit-'+url.split('/')[1]:'')+'"';
 if(url.startsWith('#'))return 'href="../index.html'+url+'"';
 if(url.startsWith('student-lessons/'))return 'href="'+url.slice('student-lessons/'.length)+'"';
 return 'href="../'+url+'"';
});}
const shell=(title,body)=>`<!doctype html>${softwareLicenceComment}<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))} · AIT ATAR</title><link rel="stylesheet" href="../style.css"><link rel="stylesheet" href="../learning.css"></head><body data-print-mode="student"><a class="skip" href="#lesson-main">Skip to lesson</a><main id="lesson-main" tabindex="-1" class="standalone-student-lesson">${body}${reuseFooter('../')}</main><script type="module">import {bindPrintControls} from '../learning-tools.js?v=0.45';bindPrintControls();</script></body></html>`;
for(const l of studentLessons)await writeFile(`${out}/${l.id}.html`,shell(l.task,portable(studentLessonPage(l.id))));
await writeFile(`${out}/index.html`,shell('Student lessons',portable(studentLessonIndex())));
await writeFile(`${out}/evidence-log.csv`,'\uFEFFlesson_id,requirement,expected_result,tool_and_environment,actual_observation,revision,retest,remaining_limit\n,,,,,,,\n');
await writeFile('audits/student-lesson-map.json',JSON.stringify({edition:'0.45',scope:'Editorial lesson-to-chapter section selections, not independent SCSA approval.',lessons:studentLessons.map(l=>({id:l.id,unit:l.unit,week:l.week,slot:l.slot,minutes:l.minutes,chapter:l.chapter,sectionIndices:l.sections,route:'#learn/'+l.id,standalone:'student-lessons/'+l.id+'.html'}))},null,2)+'\n');
console.log('Exported 256 standalone student lesson pages, lesson index, blank evidence log and explicit section map.');
