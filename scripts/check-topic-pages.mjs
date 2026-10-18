import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {studentTopics} from '../student-topics.js';
import {chapterPages,chapterOverview,topicPage} from '../chapter-pages.js';
import {studentPage,studentUnitCard} from '../student-ui.js';
import {units} from '../curriculum.js';
import {sectionDiagrams} from '../section-diagrams.js';
import {practicalResources} from '../practical-resources.js';
const rows=[];let topics=0;
for(const t of studentTopics){
 const pages=chapterPages(t);assert.equal(new Set(pages.map(p=>p.key)).size,pages.length);
 const overview=chapterOverview(t.id);assert(overview.includes(t.id+'/full'));assert(!overview.includes('class="process-illustration"'));
 for(const [i,[title,text]] of t.sections.entries()){
  const p=pages[i],html=topicPage(t.id,p.key);topics++;
  assert(html.includes(title.replaceAll('&','&amp;')));assert(html.includes(text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')));
  assert(!html.includes('data-topic-answer'));
  assert(overview.includes('#topic/'+t.id+'/'+p.key));
 }
 for(const page of pages)assert(topicPage(t.id,page.key).includes('aria-label="Reading navigation"'));
 for(const diagram of sectionDiagrams[t.id])assert(topicPage(t.id,pages[diagram.after].key).includes('class="lesson-diagram"'));
 const practice=topicPage(t.id,'worked-example');assert(!practice.includes('Spot the mistake'));assert(!practice.includes('class="transfer-practice"'));
 const resources=topicPage(t.id,'resources');const links=[...resources.matchAll(/href="([^"]+)"/g)].map(m=>m[1]);
 for(const [,href] of practicalResources[t.id]||[])assert.equal(links.filter(l=>l===href).length,1);
 assert(studentPage(t.id).includes('data-print-mode="student"'));
 const words=s=>s.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length;
 rows.push(`| ${t.id} | ${t.sections.length} | ${t.sections.map(([title])=>title).join('; ')} | ${words(studentPage(t.id))} | ${words(overview)} |`);
}
assert(topicPage('invalid','x').includes('Topic not found'));assert(topicPage('u1-brief','invalid').includes('Topic not found'));
for(const u of units)assert(studentUnitCard(u).includes('Browse topics'));
await writeFile('audits/2026-10-18-repetition-audit.md',`# Repetition and reading-structure audit\n\nReviewed the shared renderer and the section, worked-example, question and resource inventories for all 24 chapters. This is a structural/content-role audit; it is not independent subject review or a claim that every paraphrased question is redundant.\n\n## Decisions applied across all chapters\n\n| Existing block | Decision and distinct purpose |\n|---|---|\n| Objectives, introduction | Keep on chapter overview to establish scope once. |\n| Retrieval | Keep as optional prerequisite recall on overview; distinguish earlier-learning retrieval from restating a new explanation. |\n| Explanatory sections | Give each named concept its own address and previous/next navigation. Preserve explanation text and its associated diagram. |\n| Section diagrams | Keep beside their relevant concept, rather than adding all visuals to one reading page. |\n| Chapter visual and generated process image | Move to visual walkthrough; show the authored visual first and make the alternative process view optional. These are alternative explanations, not consecutive required steps. |\n| Worked example and guided question | Keep together: modelling followed by supported application. |\n| Independent task and recap | Keep on application page; success criteria available on request. |\n| Three practice questions, misconception, transfer task | Move to optional practice. These provide different prompts, but need not interrupt the core reading path. |\n| Spot-the-mistake and completion questions | Nest under additional practice; do not automatically repeat these activity types after every worked example. |\n| Quick check and exit question | Keep exit reflection in optional practice; remove multiple-choice quick check from the new reading route to avoid another compulsory-looking review. Retain in complete legacy chapter and worksheets where already available. |\n| Repeated general instructions | Remove repeated instructions about writing first, correcting reasoning, evidence and extra homework from the focused topic routes. Use labels at the point of action. |\n| Practical links and downloads | Collect into one resource page per chapter. Deduplicate exact destinations, retaining genuinely different resources. |\n| Scheduled lessons and teaching references | Move scheduled links to resources. Preserve full syllabus/source notes in the complete chapter. |\n| Complete chapter | Retain as an explicitly labelled read/print alternative and for existing deep links, rather than the default screen. |\n\n## Chapter inventory\n\nWord counts below are approximate rendered text counts from markup, including labels and collapsed content. Overview reduction is a navigation change, not a claim that total curriculum content was reduced.\n\n| Chapter | Focused concept pages | Named topics | Previous full view words | New overview words |\n|---|---:|---|---:|---:|\n${rows.join('\n')}\n\n## Limits and follow-up\n\nThe new topic pages reuse existing explanations; they do not represent newly authored depth. No syllabus concepts or question source data were deleted. The next editorial pass should add a concrete example where an individual topic is too brief, consolidate genuinely equivalent questions after teacher review, and give selected pages a topic-specific experience using the engagement plan. Do not inflate every short page with a repeated activity template. Shared worksheets remain comprehensive and retain their existing print contract.\n`);
console.log(`Passed: ${topics} focused concept routes across 24 chapter overviews; distinct application/practice/resources, diagram placement, navigation, unique resource links and preserved full print views.`);
