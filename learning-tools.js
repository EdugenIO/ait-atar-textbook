import { studentTopics } from './student-topics.js?v=0.4.1';
import { glossary } from './curriculum.js?v=0.4.1';

export const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const terms = Object.entries({...glossary,...Object.fromEntries(studentTopics.flatMap(t=>t.vocabulary))}).sort(([a],[b])=>a.localeCompare(b,'en-AU',{numeric:true}));
export function glossaryPage(){
  const letters=[...new Set(terms.map(([term])=>/^[0-9]/.test(term)?'0–9':term[0].toUpperCase()))];
  return `<h1>Glossary</h1><p class="lede">Find a term, read its meaning, then follow a link to see it in use.</p><nav class="glossary-alphabet" aria-label="Glossary letters">${letters.map(l=>`<a href="#glossary/letter-${slug(l)}">${l}</a>`).join('')}</nav>${letters.map(l=>`<section><h2 id="letter-${slug(l)}">${l}</h2><dl>${terms.filter(([term])=>(/^[0-9]/.test(term)?'0–9':term[0].toUpperCase())===l).map(([term,meaning])=>`<div class="term" id="term-${slug(term)}"><dt><a href="#glossary/term-${slug(term)}">${escapeHtml(term)}</a></dt><dd>${escapeHtml(meaning)}${studentTopics.filter(t=>t.vocabulary.some(([v])=>v===term)).map(t=>`<br><a href="#read/${t.id}/key-terms">See in ${escapeHtml(t.title)}</a>`).join('')}</dd></div>`).join('')}</dl></section>`).join('')}`;
}

const visualContent = {
  'u1-brief': {
    title:'Turn a request into a decision',
    graphic:`<ol class="decision-chain"><li><strong>1 · Request</strong>Promote a repair café.</li><li><strong>2 · Audience need</strong>Residents need the date and venue.</li><li><strong>3 · Criterion</strong>A viewer can find both details on the poster.</li><li><strong>4 · Design choice</strong>Group the date and venue below the title.</li><li><strong>5 · Evidence</strong>Ask a viewer to find them. Record any difficulty.</li></ol>`,
    caption:'Each step gives the next decision a reason. If viewers cannot find the details, revise the design and check again.',
    predict:'The client says “make it exciting”. Which step is still missing before you choose a layout?',
    answer:'Find out what the audience needs to know or do. “Exciting” does not tell you which information matters or how to check success.',
    change:'The poster will now be viewed on a phone instead of a noticeboard. Which decision and check would you revisit?',
    changeAnswer:'Check the text size and arrangement at the actual phone viewing size. Ask someone to locate the date and venue again; the original layout may no longer be readable.'
  },
  'u1-elements': {
    title:'Seven elements you can see',
    graphic:`<div class="element-studies"><div><span class="study line-study" aria-hidden="true"></span><strong>Line</strong>A divider separates groups.</div><div><span class="study shape-study" aria-hidden="true"></span><strong>Shape</strong>A flat rectangle groups a label.</div><div><span class="study space-study" aria-hidden="true"><span>A</span><span>B</span></span><strong>Space</strong>A gap separates items.</div><div><span class="study texture-study" aria-hidden="true"></span><strong>Texture</strong>A pattern suggests a rough surface.</div><div><span class="study colour-study" aria-hidden="true"></span><strong>Colour</strong>Green and orange differ in hue.</div><div><span class="study tone-study" aria-hidden="true"></span><strong>Tone</strong>Pale and dark areas differ in lightness.</div><div><span class="study form-study" aria-hidden="true"></span><strong>3D form</strong>Shading makes a flat circle appear rounded.</div></div>`,
    caption:'These are visual components. The text labels explain what each sample represents; colour is not the only clue.',
    predict:'A dark rectangle sits behind a date. Which two elements create the panel and separate it from a pale background?',
    answer:'Shape creates the rectangle. Tone creates the difference in lightness between the dark panel and pale background.',
    change:'Keep the wording, size and position fixed. Add more space around the date. What changed, and how could you check its effect?',
    changeAnswer:'Space changed. Compare both versions at the same viewing size and ask someone to find the date. Record whether the extra space helps distinguish it from nearby information.'
  },
  'u1-principles': {
    title:'Compare relationships between the same items',
    graphic:`<div class="principle-pair"><figure><div class="mini-composition competing"><strong>Repair Café</strong><b>Saturday</b><b>Bring one item</b><span>Community hall</span></div><figcaption><strong>Competing emphasis:</strong> several large labels compete for attention.</figcaption></figure><figure><div class="mini-composition ordered"><strong>1 · Repair Café</strong><div><b>2 · Saturday</b><span>Community hall</span></div><span>3 · Bring one item</span></div><figcaption><strong>Planned hierarchy:</strong> title first, grouped practical details second, action third. The numbers show an intended viewing path.</figcaption></figure></div><div class="balance-pair"><div><span class="weight large"></span><span class="weight large"></span><p><strong>Symmetrical balance:</strong> similar visual weight on each side.</p></div><div><span class="weight large"></span><span class="small-weights"><i></i><i></i><i></i></span><p><strong>Asymmetrical balance:</strong> a larger item can be balanced by a group of smaller items.</p></div></div>`,
    caption:'Size, tone and position affect visual weight. These diagrams illustrate relationships, not a formula that guarantees a successful layout.',
    predict:'In the planned hierarchy, which details form a group? What makes their relationship visible?',
    answer:'The date and venue are close together in one group. Their proximity connects the practical details, while separation from the title distinguishes their role.',
    change:'Make the action line larger than the title. What might happen to the viewing path?',
    changeAnswer:'The action may attract attention first. That might suit some briefs, but it changes the planned priority. Ask viewers what they notice before deciding whether it works.'
  },
  'u1-typography': {
    title:'Use a grid to organise; use thirds to explore',
    graphic:`<div class="composition-pair"><figure><div class="grid-example"><strong>Repair Café</strong><span>Saturday · 10 am</span><span>Community hall</span><small>Bring one small item</small></div><figcaption><strong>Alignment grid:</strong> shared left edges connect the title and details. The vertical lines are guides, not printed content.</figcaption></figure><figure><div class="thirds-example"><span class="focal-point">Focal point</span><span class="thirds-label">3 columns × 3 rows</span></div><figcaption><strong>Rule of thirds:</strong> the marked intersection is one possible focal position. It does not guarantee the best composition.</figcaption></figure></div><div class="type-pair"><div><strong>Repair Café</strong><b>Saturday · 10 am</b><span>Community hall</span><small>Clear size differences show title, date and supporting detail.</small></div><div><span>Repair Café</span><span>Saturday · 10 am</span><span>Community hall</span><small>Equal sizes provide fewer clues about priority.</small></div></div>`,
    caption:'The same content can use different arrangements. Choose a layout that supports the audience’s task and check it at the intended size.',
    predict:'The date and venue almost line up, but their left edges differ slightly. What would a shared grid line help you change?',
    answer:'Align their left edges deliberately. Consistent alignment can make their relationship easier to follow and removes an accidental near-alignment.',
    change:'Your design looks clear on a large editing screen but the venue is hard to read on a phone. What should you revise and retest?',
    changeAnswer:'Try a larger venue label, clearer spacing or stronger tonal separation. Inspect the actual phone-sized output and ask someone to locate the venue again.'
  }
};

export function chapterVisual(id){const v=visualContent[id];if(!v)return '';return `<section class="visual-guide" aria-labelledby="visual-heading"><p class="eyebrow">Visual walkthrough</p><h2 id="visual-heading">${v.title}</h2><figure>${v.graphic}<figcaption>${v.caption}</figcaption></figure><p><strong>Pause and predict:</strong> ${v.predict}</p><details class="answer"><summary>Show the explanation</summary><p>${v.answer}</p></details><p><strong>Try a small change:</strong> ${v.change}</p><details class="answer"><summary>Compare your reasoning</summary><p>${v.changeAnswer}</p></details></section>`;}

const transfer = {
  'u1-brief':['A fresh client: the school library','The library needs a phone-friendly guide for new Year 11 students. It must show opening hours, where to borrow a laptop and how to ask for help. The librarian has not supplied the final hours.','Name the client and audience. Write one testable criterion, one design decision and one question for the client.','The librarian is the client; new Year 11 students are the audience. A criterion could be that a student can locate laptop-borrowing instructions on the first screen. Group those instructions under a clear heading. Confirm the opening hours rather than inventing them.'],
  'u1-elements':['A fresh context: a sports-club notice','A sports club needs a notice saying “Training moved to Court 2”. The background photograph makes the small text hard to read.','Change two elements. Explain what each change could do, and how you would check the result.','For example, place the message in a plain rectangular panel (shape) and use a dark message on a pale panel (tone). Check the actual viewing size and ask someone to read the new location. A different solution can work if supported by evidence.'],
  'u1-principles':['A fresh context: a festival guide','A festival page gives its title, sponsor list and “Find a stage” control equal prominence. Visitors mainly need to locate their next event.','Choose a dominant item, group related information and describe the viewing path you would test.','Make the stage-finding control prominent and group event names with locations. A possible path is guide title → stage finder → event details. Test whether visitors can find their next stage; do not assume the largest title always serves the task.'],
  'u1-typography':['A fresh context: a canteen menu','A phone menu uses the same text size for food names, prices and section headings. Prices almost line up.','Sketch a clearer hierarchy and alignment. Explain how you would test it with a student.','Use distinct section headings, consistent item text and a shared alignment for prices. Keep each price clearly associated with its item. Ask a student to find an item and its price on the phone-sized output, then revise any confusion.']
};
export function transferPractice(id){const [title,context,prompt,answer]=transfer[id];return `<section class="transfer-practice"><h2 id="fresh-scenario">${title}</h2><p>${context}</p><p>${prompt}</p><details class="answer"><summary>Compare with an example response</summary><p>${answer}</p></details></section>`;}

export function bindPrintControls(){
  document.querySelectorAll('button[data-print-mode]').forEach(button=>button.addEventListener('click',()=>{
    document.body.dataset.printMode=button.dataset.printMode;
    window.print();
  }));
}

if(typeof window!=='undefined')window.addEventListener('afterprint',()=>{document.body.dataset.printMode='student';});
