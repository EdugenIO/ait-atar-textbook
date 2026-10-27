import {studentTopics} from './student-topics.js?v=0.43';
import {chapterPages} from './chapter-pages.js?v=0.43';
import {glossary} from './curriculum.js?v=0.43';
import {slug} from './learning-tools.js?v=0.43';

export const normaliseSearch=value=>String(value).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const matches=(text,query)=>{
  const words=normaliseSearch(text).split(' '),parts=query.split(' ');
  return words.some((_,i)=>parts.every((word,j)=>words[i+j]?.startsWith(word)));
};
const aliases={
 'u1-applications':['spreadsheet','vlookup','hlookup','lookup table','file formats'],
 'u4-networks':['ssl','tls','802.11x','802.1x','ethernet','TCP/IP'],
 'u4-data':['backup','restore','digital signature','digital certificate'],
 'u4-web':['W3C','Web 3.0','internationalization','internationalisation','validation'],
 'u2-impacts':['Privacy Act','digital divide']
};
export function buildSearchIndex(){
 const entries=[];
 for(const t of studentTopics){
  entries.push({title:t.title,label:`Unit ${t.unit}: ${t.title}`,href:`#read/${t.id}`,kind:'Chapter',aliases:aliases[t.id]||[],body:[t.intro,...t.goals,...t.sections.flat(),JSON.stringify(t.worked),t.guided.prompt,...t.practice.flat(),...t.task.steps,t.recap,t.exit].join(' ')});
  for(const page of chapterPages(t).filter(p=>p.index!==undefined))entries.push({title:page.title,label:page.title,context:`Unit ${t.unit} · ${t.title}`,href:`#topic/${t.id}/${page.key}`,kind:'Section',aliases:[],body:t.sections[page.index][1]});
  for(const page of chapterPages(t).filter(p=>p.index===undefined&&!['worked-example','more-practice','visual-guide','resources'].includes(p.key)))entries.push({title:page.title,label:page.title,context:`${t.title} · Explore`,href:`#topic/${t.id}/${page.key}`,kind:'Activity',aliases:[],body:t.title});
 }
 for(const [term,definition] of Object.entries({...glossary,...Object.fromEntries(studentTopics.flatMap(t=>t.vocabulary))}))entries.push({title:term,label:term,href:`#glossary/${slug(term)}`,kind:'Glossary',aliases:[],body:definition});
 return entries;
}
export function findSearchResults(input,index){
 const query=normaliseSearch(input);if(query.length<2)return [];
 return index.map(entry=>({...entry,score:matches(entry.title,query)?100:entry.aliases.some(alias=>matches(alias,query))?60:matches(entry.body,query)?20:0})).filter(entry=>entry.score).sort((a,b)=>b.score-a.score||a.label.localeCompare(b.label));
}
export function bindSearch(input,result,{index=buildSearchIndex(),pageSize=12,onSameDestination=()=>{}}={}){
 let found=[],shown=pageSize;
 function display(focusFrom=null){
  result.replaceChildren();if(normaliseSearch(input.value).length<2)return;
  const count=Math.min(shown,found.length),status=document.createElement('p');status.className='search-status';
  status.textContent=found.length?`${found.length} results; showing ${count}${count===found.length?' (all)':''}.`:'No matching topic. Try a chapter title, section or glossary term.';result.append(status);
  const links=[];
  for(const entry of found.slice(0,count)){
   const link=document.createElement('a');link.href=entry.href;link.textContent=entry.label;
   const context=document.createElement('small');context.textContent=entry.context||entry.kind;link.append(context);
   link.addEventListener('click',event=>{if(link.hash===location.hash){event.preventDefault();onSameDestination();}});result.append(link);links.push(link);
  }
  if(count<found.length){const more=document.createElement('button');more.type='button';more.className='secondary search-more';more.textContent='Show more results';more.addEventListener('click',()=>{shown+=pageSize;display(count);});result.append(more);}
  if(focusFrom!==null)links[focusFrom]?.focus();
 }
 input.addEventListener('input',()=>{found=findSearchResults(input.value,index);shown=pageSize;display();});
}
