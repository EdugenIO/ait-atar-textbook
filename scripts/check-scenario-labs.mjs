import assert from 'node:assert/strict';
import {recoveryModel,recoveryResult,participationResult,participationLab,recoveryLab,bindScenarioLabs} from '../scenario-labs.js';
import {chapterPages,topicPage} from '../chapter-pages.js';
import {studentTopics} from '../student-topics.js';
for(const method of ['full','differential','incremental'])for(const failure of [60,84,108])for(const missing of [false,true]){
 const state=recoveryModel(method,failure,missing);
 const expectedPoint=failure===60?'Tuesday':failure===84?(missing?'Tuesday':'Wednesday'):(missing&&method==='incremental'?'Tuesday':'Thursday');
 const expectedHour={Tuesday:42,Wednesday:66,Thursday:90}[expectedPoint];
 assert.equal(state.point,expectedPoint,`${method}/${failure}/${missing}`);assert.equal(state.loss,failure-expectedHour);
 assert(!state.required.includes('Wednesday')||!missing);assert(state.timeline.filter(b=>b.required).every(b=>b.completed&&b.available));
 if(method==='full')assert.equal(state.required.length,1);
 if(method==='differential')assert.deepEqual(state.required,['Monday',expectedPoint]);
 if(method==='incremental')assert.deepEqual(state.required,['Monday','Tuesday',...(expectedPoint==='Wednesday'?['Wednesday']:expectedPoint==='Thursday'?['Wednesday','Thursday']:[])]);
}
assert(recoveryResult(recoveryModel()).includes('not the time needed to restore'));
const nodes={};const node=(id,value='')=>nodes[id]={value,checked:false,innerHTML:'',events:{},addEventListener(type,fn){this.events[type]=fn;}};
for(const [id,value] of [['recovery-method','incremental'],['recovery-failure','84'],['recovery-missing',''],['recovery-result',''],['recovery-reset',''],['participation-choice','assisted'],['participation-result',''],['participation-reset','']])node('#'+id,value);
bindScenarioLabs({querySelector:id=>nodes[id]||null});
nodes['#recovery-failure'].value='108';nodes['#recovery-missing'].checked=true;nodes['#recovery-failure'].events.change();assert(nodes['#recovery-result'].innerHTML.includes('66 hours'));
nodes['#recovery-method'].value='differential';nodes['#recovery-method'].events.change();assert(nodes['#recovery-result'].innerHTML.includes('18 hours'));
nodes['#recovery-reset'].events.click();assert.equal(nodes['#recovery-failure'].value,'84');assert.equal(nodes['#recovery-missing'].checked,false);
for(const choice of ['portal','assisted','paper']){nodes['#participation-choice'].value=choice;nodes['#participation-choice'].events.change();assert.equal(nodes['#participation-result'].innerHTML,participationResult(choice));}
nodes['#participation-reset'].events.click();assert.equal(nodes['#participation-choice'].value,'assisted');
bindScenarioLabs({querySelector:()=>null});
for(const [id,key] of [['u4-data','recovery-lab'],['u4-impacts','participation-lab']]){assert(chapterPages(studentTopics.find(t=>t.id===id)).some(p=>p.key===key));assert(topicPage(id,key).includes('class="teacher-note"'));}
assert(recoveryLab().includes('Paper activity:'));assert(participationLab().includes('Compare all three approaches on paper'));
console.log('Passed: all 18 recovery combinations, restore dependencies, missing-work windows, control changes, reset, scenario choices and topic routes.');
