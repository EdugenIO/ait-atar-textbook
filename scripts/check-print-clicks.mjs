import assert from 'node:assert/strict';

// Exercise the real binding function with click propagation from content to body.
const element=(mode,parent=null)=>({dataset:mode?{printMode:mode}:{},parent,listeners:[],addEventListener(type,handler){if(type==='click')this.listeners.push(handler);},click(){const event={currentTarget:this,target:this};for(let node=this;node;node=node.parent)for(const handler of node.listeners)handler({...event,currentTarget:node});}});
const body=element('student');
const paragraph=element(null,body);
const link=element(null,body);
const answerSummary=element(null,body);
const studentButton=element('student',body);
const answersButton=element('answers',body);
let printCalls=0;
const printEvents={};
const disclosures=[{open:false},{open:true},{open:false}];
globalThis.document={body,querySelectorAll(selector){
  if(selector==='[data-print-mode]')return [body,studentButton,answersButton];
  if(selector==='button[data-print-mode]')return [studentButton,answersButton];
  if(selector==='details.answer, details.teacher-note')return disclosures;
  throw new Error('Unhandled selector: '+selector);
}};
globalThis.window={print(){printCalls++;},addEventListener(type,handler){printEvents[type]=handler;}};
const {bindPrintControls}=await import('../learning-tools.js');
bindPrintControls();
for(const target of [paragraph,link,answerSummary,body])target.click();
assert.equal(printCalls,0,'Ordinary content clicks must not open print preview');
studentButton.click();
assert.equal(printCalls,1,'The student print button must print exactly once');
assert.equal(body.dataset.printMode,'student');
answersButton.click();
assert.equal(printCalls,2,'The answer print button must print exactly once');
assert.equal(body.dataset.printMode,'answers');
console.log('Passed: ordinary clicks do not print; each print button prints once with the correct mode.');

printEvents.beforeprint();
assert(disclosures.every(detail=>detail.open),'Answer printing must expose every answer and teaching disclosure');
printEvents.afterprint();
assert.deepEqual(disclosures.map(d=>d.open),[false,true,false],'Print must restore the prior on-screen disclosure state');
assert.equal(body.dataset.printMode,'student');
printEvents.beforeprint();
assert.deepEqual(disclosures.map(d=>d.open),[false,true,false],'Student printing must not expand answer disclosures');
printEvents.afterprint();
console.log('Passed: answer-print disclosures open temporarily and restore without changing student-print behaviour.');
