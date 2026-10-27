import assert from 'node:assert/strict';
import {buildSearchIndex,findSearchResults,normaliseSearch,bindSearch} from '../search.js';
import {studentTopics} from '../student-topics.js';
import {chapterPages} from '../chapter-pages.js';
import {auditAreas} from '../audit-data.js';
import {auditHub} from '../audit-hub.js';
import {bindSkipLink} from '../reading-access.js';
const index=buildSearchIndex();
assert.equal(normaliseSearch('ＴＣＰ／ＩＰ'),'tcp ip');
assert.equal(findSearchResults(' ',index).length,0);
assert.equal(findSearchResults('<script>unlikely-text</script>',index).length,0);
assert(findSearchResults('VLOOKUP',index).some(r=>r.href.includes('u1-applications')));
assert(findSearchResults('802.11x',index).some(r=>r.href==='#read/u4-networks'));
assert(findSearchResults('recovery',index).some(r=>r.kind==='Activity'));
for(const result of index){
 const [kind,id,key]=result.href.slice(1).split('/');
 if(kind==='read')assert(studentTopics.some(t=>t.id===id));
 if(kind==='topic')assert(chapterPages(studentTopics.find(t=>t.id===id)).some(p=>p.key===key));
}
let focused;
class Element{
 constructor(tag){this.tag=tag;this.children=[];this.listeners={};this.value='';}
 append(c){this.children.push(c);} replaceChildren(){this.children=[];}
 addEventListener(type,fn){this.listeners[type]=fn;} focus(){focused=this;}
}
globalThis.document={createElement:tag=>new Element(tag)};
globalThis.location={hash:'#home'};
const input=new Element('input'),results=new Element('div');
const entries=Array.from({length:25},(_,i)=>({title:`Item ${i}`,label:`Item ${i}`,href:`#read/item${i}`,kind:'Chapter',aliases:[],body:'shared'}));
bindSearch(input,results,{index:entries,pageSize:12});input.value='shared';input.listeners.input();
assert.equal(results.children.filter(c=>c.tag==='a').length,12);
results.children.at(-1).listeners.click();assert.equal(results.children.filter(c=>c.tag==='a').length,24);assert.equal(focused,results.children[13]);
results.children.at(-1).listeners.click();assert.equal(results.children.filter(c=>c.tag==='a').length,25);assert.equal(focused,results.children[25]);
input.value='none';input.listeners.input();assert.equal(results.children.length,1);
input.value='';input.listeners.input();assert.equal(results.children.length,0);
let prevented=false,mainFocused=false,scrolled=false;
const skip=new Element('a');bindSkipLink(skip,{focus(){mainFocused=true;},scrollIntoView(){scrolled=true;}});skip.listeners.click({preventDefault(){prevented=true;}});assert(prevented&&mainFocused&&scrolled);assert.equal(location.hash,'#home');
assert.equal(auditAreas.length,20);assert.equal(new Set(auditAreas.map(a=>`${a.unit}-${a.area}`)).size,20);
assert(auditHub().includes('40 / 10 / 10 / 40%'));
assert(!studentTopics.find(t=>t.id==='u1-applications').task.evidence.includes('or hand-traced'));
assert(studentTopics.find(t=>t.id==='u3-applications').task.evidence.includes('editable multi-track project'));
console.log('Passed: ranked/normalised search, valid section/activity destinations, all 25 paginated results, focus at both page boundaries, no-result/reset, route-preserving skip and 20-area review.');
