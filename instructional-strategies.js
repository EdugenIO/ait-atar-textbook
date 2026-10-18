const e=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const instructionalActivities={
  "u1-brief": {
    "index": 1,
    "strategy": "Sort and justify",
    "title": "Client, audience or both?",
    "context": "A librarian commissions an opening-hours poster for new students. Sort these needs: approve the final wording; find the opening time; know where to get help. A need may belong to both people.",
    "steps": [
      "Sort on your own first.",
      "Compare with a partner, or write one alternative grouping.",
      "Justify one choice using the person’s role, not their job title."
    ],
    "answer": "The librarian approves wording as client. Students need opening times and help as the audience. Both may need accurate information; explain any overlap.",
    "teaching": "Listen for students treating the client as the only user. Ask whose task the poster must support."
  },
  "u1-elements": {
    "index": 1,
    "strategy": "Sketch and explain",
    "title": "Make the grouping visible",
    "context": "A notice must show Saturday 10 am, Hall 2 and Book at the library. Keep the wording unchanged.",
    "steps": [
      "Sketch a layout using space alone to show related details.",
      "Add one line or shape only if it clarifies a relationship.",
      "Point to the visual choice and explain what it communicates."
    ],
    "answer": "Keep time and venue close as event details; separate the booking instruction. A divider or panel can strengthen the distinction. Several layouts can work.",
    "teaching": "Model one relationship with two labels, then let students arrange the third. Ask what each gap communicates."
  },
  "u1-principles": {
    "index": 2,
    "strategy": "Compare and revise",
    "title": "Change one relationship",
    "context": "Use the poster to revise above. Keep its words, but improve the relationship between headings and their details.",
    "steps": [
      "Sketch a revision using repetition.",
      "Sketch a second revision using proximity.",
      "Explain which relationship each change makes clearer."
    ],
    "answer": "Repeating heading treatment connects the sections visually. Smaller gaps between each heading and its detail make local groups clearer. These changes support unity in different ways.",
    "teaching": "Think aloud about one heading–detail pair. If students only name a principle, ask them to point to the changed element and explain its effect."
  },
  "u1-typography": {
    "index": 1,
    "strategy": "Think, compare, explain",
    "title": "Choose an alignment",
    "context": "A phone notice contains three lines of practical information: date, venue and booking instructions.",
    "steps": [
      "Choose an alignment and sketch the three lines.",
      "Compare a second alignment using exactly the same words.",
      "Explain how a reader would find the beginning of each line."
    ],
    "answer": "A shared left edge often makes multi-line information easier to scan. Centred text may suit a short title. Judge the arrangement at its intended size rather than declaring one alignment always correct.",
    "teaching": "Use the same content in both sketches. Ask students to explain the reading task before expressing a preference."
  },
  "u1-hardware": {
    "index": 2,
    "strategy": "Predict, trace, check",
    "title": "The power goes off",
    "context": "A photo was saved yesterday. Today you edit it but have not saved again when power is lost.",
    "steps": [
      "Predict what may remain.",
      "Draw separate boxes for working memory and saved storage.",
      "Trace where yesterday’s file and today’s unsaved edits belong."
    ],
    "answer": "Yesterday’s saved file normally remains in non-volatile storage. Unsaved edits in RAM may be lost. Autosave or recovery could change the outcome, so check the application rather than promising recovery.",
    "teaching": "Ask students to trace the two versions separately. If they say everything is lost, return to the distinction between working memory and saved files."
  },
  "u1-applications": {
    "index": 5,
    "strategy": "Fade the worked example",
    "title": "Complete a lookup explanation",
    "context": "Use the vertical lookup example on this page.",
    "steps": [
      "Identify the lookup value and the first column searched.",
      "Cover the worked result and explain how the return-column number is counted.",
      "Change only the lookup code to an unknown code. Predict what must be checked."
    ],
    "answer": "Count the return column within the selected lookup range. With an exact-match lookup, an unknown code needs explicit handling; it should not silently become a valid quantity.",
    "teaching": "Model finding the first matching row, then leave the return-column step for students. Require a row-and-column trace, not just a formula copied from the example."
  },
  "u1-impacts": {
    "index": 0,
    "strategy": "Distinguish near neighbours",
    "title": "Credit is not permission",
    "context": "A creator is named beneath a reused image, but the team has not checked the licence.",
    "steps": [
      "State what the credit tells you.",
      "State what it does not establish.",
      "Write the next check before public reuse."
    ],
    "answer": "Credit identifies a source or creator. It does not by itself establish permission. Check the licence, permission or applicable exception and its conditions for the intended use.",
    "teaching": "Listen for attribution being used as a substitute for permission. Ask what evidence would support the intended reuse; avoid assuming a legal outcome."
  },
  "u1-projects": {
    "index": 1,
    "strategy": "Turn a claim into evidence",
    "title": "Make “easy to use” observable",
    "context": "A client says the event poster must be easy to use.",
    "steps": [
      "Choose one audience task.",
      "Write an observable criterion for that task.",
      "Describe a small check and the observation you would record."
    ],
    "answer": "For example: a new visitor can locate the venue on the delivered poster. Ask a visitor to find it and record the action and any difficulty. A colour preference alone does not establish success.",
    "teaching": "Model the difference between a preference and an observable task. If the criterion stays vague, ask what a viewer would actually do."
  },
  "u2-data": {
    "index": 1,
    "strategy": "Compare one change at a time",
    "title": "Crop or resample?",
    "context": "An image contains an opening-hours sign. You need a smaller delivery file.",
    "steps": [
      "Predict what cropping could remove.",
      "Predict what reducing pixel dimensions changes.",
      "Choose a comparison that would let you inspect both readability and file size."
    ],
    "answer": "Cropping removes part of the image. Resampling changes pixel dimensions. Preserve required opening hours, compare delivery copies at the intended size and record both readability and size.",
    "teaching": "Keep the source unchanged. If students judge only file size, ask them to locate the required information in the exported copy."
  },
  "u2-networks": {
    "index": 2,
    "strategy": "Explain a calculation",
    "title": "Keep the units visible",
    "context": "An 80 MB file crosses an ideal constant 20 Mb/s link. Use 8 bits per byte and decimal MB and Mb.",
    "steps": [
      "Convert the file size to megabits.",
      "Divide by the rate and label the result.",
      "Explain one reason the observed time could differ."
    ],
    "answer": "80 MB × 8 = 640 Mb; 640 Mb ÷ 20 Mb/s = 32 seconds in this ideal model. Overhead, competing traffic and changing throughput can increase the observed time.",
    "teaching": "Model cancelling Mb in the division. If a student obtains 4 seconds, inspect the byte-to-bit conversion before repeating the calculation."
  },
  "u2-impacts": {
    "index": 1,
    "strategy": "Consider another perspective",
    "title": "A new purpose for an address",
    "context": "An email was collected for a booking reminder. A staff member proposes a marketing list.",
    "steps": [
      "Explain the original purpose from the customer’s perspective.",
      "Identify what the new proposal changes.",
      "List the information needed before deciding whether the new use is appropriate."
    ],
    "answer": "Check the stated collection purpose, notices, consent where relevant and applicable organisational and legal requirements. Possession of an address alone does not establish permission for every use.",
    "teaching": "Ask students to distinguish access from authorised use. Accept a qualified answer that identifies missing evidence rather than guessing a legal conclusion."
  },
  "u2-applications": {
    "index": 1,
    "strategy": "Predict then calculate",
    "title": "Play the same frames faster",
    "context": "A sequence contains 24 frames. Compare playback at 12 and 24 frames per second.",
    "steps": [
      "Predict which version lasts longer before calculating.",
      "Calculate each duration.",
      "Explain what must change if the faster rate must keep the original duration."
    ],
    "answer": "24 ÷ 12 = 2 seconds; 24 ÷ 24 = 1 second. To last 2 seconds at 24 fps, the sequence needs 48 displayed frames. Adding frames does not automatically improve the motion.",
    "teaching": "Have students describe frames per second in words. If they predict a longer duration at a higher rate, trace how many frames are consumed in one second."
  },
  "u2-projects": {
    "index": 2,
    "strategy": "Sequence and justify",
    "title": "Which task can start?",
    "context": "A page needs approved opening hours before its final content check. Its layout can be sketched while the hours are being confirmed.",
    "steps": [
      "Draw the dependencies.",
      "Identify one task that can start now.",
      "Explain what still prevents final content sign-off."
    ],
    "answer": "Layout sketching can proceed with clearly marked placeholders. The final content check depends on confirmed hours. Parallel work must still respect shared people and resources.",
    "teaching": "Ask students to distinguish work that can start from work that can be accepted as finished. Revisit dependencies if they order tasks only by preference."
  },
  "u3-design": {
    "index": 1,
    "strategy": "Explain to a partner",
    "title": "From choice to audience task",
    "context": "Two session cards use the same heading style and spacing.",
    "steps": [
      "Point out the repeated visual choices.",
      "Explain the relationship they suggest.",
      "Link that relationship to a visitor finding another session. Ask a partner, or yourself, what evidence is still needed."
    ],
    "answer": "Repeated treatment can signal related session cards and make scanning more predictable. A task observation is still needed to check whether visitors locate a relevant session successfully.",
    "teaching": "Prompt choice → relationship → task. If the explanation ends with “looks consistent”, ask how that helps a visitor act."
  },
  "u3-hardware": {
    "index": 1,
    "strategy": "Judge the evidence",
    "title": "Known, unknown or unsupported?",
    "context": "A specification lists 256 GB storage and advertises all-day battery life. The brief requires 200 GB free and six hours of field use.",
    "steps": [
      "Separate advertised facts from required evidence.",
      "Name one unknown for each requirement.",
      "Choose a check that could resolve each unknown."
    ],
    "answer": "Capacity does not establish current free space. “All-day” does not establish six hours under the intended workload. Check available storage and suitable runtime evidence with test conditions.",
    "teaching": "Ask for the exact claim each source supports. If students pass the device immediately, distinguish a specification from a requirement being met."
  },
  "u3-impacts": {
    "index": 5,
    "strategy": "Test the inference",
    "title": "Access and reuse",
    "context": "A report can be accessed through an FOI release. It includes a photograph.",
    "steps": [
      "Write what access establishes.",
      "Write the extra conclusion a team might mistakenly infer.",
      "Identify a reuse check that remains necessary."
    ],
    "answer": "Access to the report does not automatically grant unrestricted republication of a photograph within it. Check rights, permissions and applicable conditions for the intended use.",
    "teaching": "Model a qualified conclusion: “We can access this; we still need to check…” Avoid treating release as a universal licence."
  },
  "u3-applications": {
    "index": 2,
    "strategy": "Observe and revise",
    "title": "A title disappears too quickly",
    "context": "Viewers cannot finish reading a final instruction before the video ends.",
    "steps": [
      "Name the observation without blaming the viewer.",
      "Propose one timing change.",
      "Describe a retest using the actual exported video."
    ],
    "answer": "Increase the instruction’s readable display time or simplify it while preserving meaning. Test the delivery copy with representative viewers and check whether they can read and act on it.",
    "teaching": "Separate successful export from successful communication. Ask students to keep the instruction content constant when testing a timing change."
  },
  "u3-projects": {
    "index": 3,
    "strategy": "Trace a dependency",
    "title": "Approved does not mean ready",
    "context": "A build needs both approved design and prepared assets. The design is approved, but the assets are late.",
    "steps": [
      "Draw both prerequisites leading to the build.",
      "Identify useful work that may remain unblocked.",
      "Explain what the schedule must record."
    ],
    "answer": "The full build cannot be assumed ready from design approval alone. Review unblocked work, asset availability, resource capacity and agreed timing; update the schedule and change record.",
    "teaching": "Ask students to point to every incoming dependency. If they focus only on approval, trace the missing asset into the actual build task."
  },
  "u4-data": {
    "index": 1,
    "strategy": "Draw from memory",
    "title": "Recover the chain",
    "context": "Study the backup diagram, then cover it or look away.",
    "steps": [
      "Sketch F, I1 and I2 with their days and dependencies.",
      "Explain the Tuesday recovery order.",
      "Check your sketch, correct it in a different colour and explain the consequence of losing I1."
    ],
    "answer": "For the stated incremental chain, restore F then I1 then I2. Missing I1 means complete Tuesday recovery cannot be assumed. The last increment is not a replacement for earlier required increments.",
    "teaching": "Let students retrieve before re-showing the diagram. If they omit I1, contrast each increment’s reference point with a differential backup."
  },
  "u4-web": {
    "index": 5,
    "strategy": "Generate boundary cases",
    "title": "Try to break the rule",
    "context": "A required field accepts whole-number group sizes from 1 to 20 inclusive.",
    "steps": [
      "List expected outcomes before testing.",
      "Include 0, 1, 20, 21, an empty value and 2.5.",
      "Explain what acceptance proves and what it does not prove."
    ],
    "answer": "Accept 1 and 20; reject 0, 21, empty and 2.5 under this rule. Passing validation does not prove the entered group size is truthful. A real receiving service needs its own checks.",
    "teaching": "Model one boundary only, then let students generate the others. If the test set contains only valid values, ask which failure the test could expose."
  },
  "u4-networks": {
    "index": 7,
    "strategy": "Reason from observations",
    "title": "What does this fault rule out?",
    "context": "The staff printer and local files work. One external booking service fails on one laptop.",
    "steps": [
      "Separate observations from explanations.",
      "Give two possible causes still consistent with the observations.",
      "Choose a comparison that would narrow the possibilities."
    ],
    "answer": "Local success is evidence that some local functions work, not proof that every network component is healthy. Compare another device and another external service; consider device settings, name resolution, connectivity and service-specific faults.",
    "teaching": "Ask students to label each statement “observed” or “possible”. If they immediately replace the router, ask what comparison would justify that step."
  },
  "u4-impacts": {
    "index": 6,
    "strategy": "Separate related criteria",
    "title": "Available to whom?",
    "context": "A cloud guide loads reliably, but keyboard users cannot reach its booking control.",
    "steps": [
      "Write one observation about availability.",
      "Write one observation about accessibility.",
      "Choose a separate check for each criterion."
    ],
    "answer": "Reliable loading supports an availability observation. The keyboard barrier is an accessibility problem. Check service availability over an appropriate period and test the booking task with keyboard input separately.",
    "teaching": "Listen for one successful criterion being used to pass the other. Ask students to state the user task and evidence for each conclusion."
  },
  "u4-applications": {
    "index": 3,
    "strategy": "Teach a short process",
    "title": "Explain, show, try, review",
    "context": "Teach a partner to enter a valid whole-number group size from 1 to 12 in a practice form. Use invented data.",
    "steps": [
      "Explain the rule in one sentence.",
      "Model one valid value and why it fits.",
      "Let the learner try 13 and recover using helpful feedback, then review a new example. If working alone, write both sides of the exchange."
    ],
    "answer": "A model such as 6 shows a valid whole number. For 13, feedback can say “Enter a whole number from 1 to 12.” Review with a new value such as 2.5 and ask the learner to explain the rule.",
    "teaching": "Do not take over the learner’s attempt. If recovery fails, revisit the message and model one step before the learner tries again."
  },
  "u4-projects": {
    "index": 7,
    "strategy": "Triangulate evidence",
    "title": "Liked it, but could not use it",
    "context": "A survey reports that visitors like a guide. Observation shows that several cannot find the booking link.",
    "steps": [
      "State what each evidence source can support.",
      "Explain why the results need not contradict each other.",
      "Recommend a revision and a task-based retest."
    ],
    "answer": "Satisfaction and task success answer different questions. Visitors may like the appearance while struggling to book. Revise the link’s label or placement and observe the booking task again; report the sample limits.",
    "teaching": "Ask students to keep preference separate from performance. If one source is discarded, ask what question it was designed to answer."
  }
};
export function learningStrategy(id,index,{teacher=true}={}){const a=instructionalActivities[id];if(!a||a.index!==index)return '';return `<section class="learning-strategy" aria-label="Learning activity"><p class="eyebrow">${e(a.strategy)}</p><h2>${e(a.title)}</h2><p>${e(a.context)}</p><ol>${a.steps.map(s=>`<li>${e(s)}</li>`).join('')}</ol><details class="answer"><summary>Compare your reasoning after trying</summary><p>${e(a.answer)}</p><p>Use the explanation to correct your reasoning, then try the step again without looking.</p></details>${teacher?`<details class="teacher-note"><summary>Teaching move: model, listen and respond</summary><p>${e(a.teaching)}</p><p>Use this short activity in place of a similar practice question. Let students think first, then explain in writing, speech or a sketch. Use their reasoning to decide whether to model another example or move on.</p></details>`:''}</section>`;}
export function teachingStrategyGuide(id){const a=instructionalActivities[id];if(!a)return '';return `<details class="teacher-note"><summary>Teaching this chapter: ${e(a.strategy.toLowerCase())}</summary><p><strong>Focus:</strong> ${e(a.title)}. Use the activity on topic ${a.index+1} while teaching the concept, rather than adding it as extra homework.</p><p><strong>Model and respond:</strong> ${e(a.teaching)}</p><ol><li>Activate prior knowledge with one existing recall question. Allow thinking time before discussion.</li><li>Model one decision aloud in the worked example. Leave the next step for students, then reduce support for the independent task.</li><li>Choose the chapter activity or one practice question. Ask for a reason as well as an answer; compare alternative explanations.</li><li>At the next lesson, revisit the chapter’s exit question without notes. After a later related chapter, ask what still applies and what has changed.</li></ol><p><strong>Adapt:</strong> offer a vocabulary cue or partly completed sketch if needed. For extension, change one condition and ask whether the explanation still holds. Students can work alone or with a partner; no account, marks or submission is required.</p><p><strong>Feedback:</strong> identify one sound idea, name the specific gap and ask the learner to revise and explain the change. Re-model a step when the underlying distinction is still unclear.</p></details>`;}
