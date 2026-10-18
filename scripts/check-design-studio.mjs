import assert from 'node:assert/strict';
import {bindDesignExperiences,briefClues,elementState,designExperiences,designExperience} from '../design-studio.js';
import {chapterPages,topicPage} from '../chapter-pages.js';
import {studentTopics} from '../student-topics.js';
const nodes={};const node=(id,value='')=>nodes[id]={value,innerHTML:'',textContent:'',dataset:{},events:{},addEventListener(type,fn){this.events[type]=fn;}};
for(const [id,value] of [['brief-lens','client'],['brief-clue',''],['element-notice',''],['element-contrast','strong'],['element-accent','green'],['element-scale','equal'],['element-description',''],['element-reset','']])node('#'+id,value);
bindDesignExperiences({querySelector:id=>nodes[id]||null});
for(const key of Object.keys(briefClues)){nodes['#brief-lens'].value=key;nodes['#brief-lens'].events.change();assert(nodes['#brief-clue'].innerHTML.includes(briefClues[key].explanation.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));}
for(const [key,value] of [['contrast','subtle'],['accent','violet'],['scale','large']]){nodes['#element-'+key].value=value;nodes['#element-'+key].events.change();assert.equal(nodes['#element-notice'].dataset[key],value);}
assert(nodes['#element-description'].textContent.includes('smaller difference'));assert(nodes['#element-description'].textContent.includes('venue is larger'));nodes['#element-reset'].events.click();assert.deepEqual(nodes['#element-notice'].dataset,elementState());assert(nodes['#element-description'].textContent.includes('dark text'));
bindDesignExperiences({querySelector:()=>null});
for(const [id,p] of Object.entries(designExperiences)){assert(chapterPages(studentTopics.find(t=>t.id===id)).some(page=>page.key===p.key));const html=topicPage(id,p.key);assert(html.includes('class="teacher-note"'));assert(html.includes('Reading navigation'));}
const comparison=designExperience('u1-principles');for(const phrase of ['Community design workshop','Saturday · 10 am','Studio 2 · Youth Centre','Book a place at the front desk','Supported by the community arts group'])assert.equal(comparison.split(phrase).length-1,2,'Comparison must preserve the same event wording');
console.log('Passed: five brief clues, notice controls and reset, three chapter routes, teacher notes and identical-content layout comparison.');
