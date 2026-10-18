import {unit4ProjectReinforcement} from './unit4-project-chapter.js?v=0.30';
import {unit4LearningReinforcement} from './unit4-learning-chapter.js?v=0.30';
import {unit4ImpactsReinforcement} from './unit4-impacts-chapter.js?v=0.30';
import {unit4NetworkReinforcement} from './unit4-network-chapter.js?v=0.30';
export const reinforcementActivities={
...unit4NetworkReinforcement,
...unit4ImpactsReinforcement,
...unit4LearningReinforcement,
...unit4ProjectReinforcement,
  "u1-brief": {
    "context": "A library welcome guide",
    "mistake": "The client asks for a guide, so I will choose the information without asking about students.",
    "correction": "The client and audience have different roles. Confirm what new students need to do, then agree content and criteria with the librarian.",
    "steps": [
      "Need: students must find laptop-borrowing instructions.",
      "Criterion: ____________________.",
      "Check: ask a student to locate the instructions."
    ],
    "completion": "A suitable criterion is that a new student can locate the laptop-borrowing instructions from the guide’s opening page. Agree the expected result and test in the intended context.",
    "annotations": [
      "Notice how a broad request becomes a specific user task.",
      "The later check must measure the agreed task, not just the designer’s opinion."
    ]
  },
  "u1-elements": {
    "context": "A changed-venue notice",
    "mistake": "I added a busy texture behind the message because more detail always improves communication.",
    "correction": "A busy texture may compete with the message. Simplify the background or add a plain panel, then check whether the venue is readable at the intended size.",
    "steps": [
      "Message: Training moved to Court 2.",
      "Element change: ____________________.",
      "Check: read the notice at its intended size and distance."
    ],
    "completion": "For example, increase tonal contrast by placing dark message text on a pale plain panel. Explain the intended effect and check the actual output.",
    "annotations": [
      "Each visual choice should serve the message rather than add decoration alone.",
      "Judge the combined result at the delivery size; isolated element names are not evidence."
    ]
  },
  "u1-principles": {
    "context": "A festival page",
    "mistake": "The sponsor list should dominate because it contains the most words.",
    "correction": "Visual priority should support the audience’s task and the brief. If visitors need the next venue, give that information appropriate emphasis rather than ranking by word count.",
    "steps": [
      "Task: find the next event’s venue.",
      "Priority item: ____________________.",
      "Supporting group: event name, time and venue."
    ],
    "completion": "Give the venue-finding information or control clear prominence. Test whether visitors can complete the task; there can be more than one defensible layout.",
    "annotations": [
      "The example links a visual decision to a principle and a user task.",
      "A predicted viewing path should be checked with the actual audience task."
    ]
  },
  "u1-typography": {
    "context": "A phone menu",
    "mistake": "Every line is centred, so the menu must be easier to scan.",
    "correction": "Centred text can suit short material, but is not automatically easiest to scan. Compare a consistent alignment and keep each price clearly associated with its item.",
    "steps": [
      "Item text: consistent type treatment.",
      "Price association and alignment: ____________________.",
      "Test: find one item and its price on a phone."
    ],
    "completion": "Use a consistent price column or place each price clearly beside its item, with enough spacing to avoid wrong associations. Recheck at narrow width and enlarged text.",
    "annotations": [
      "Typography choices establish distinct information roles.",
      "The check needs the actual reading context, not only the designer’s large display."
    ]
  },
  "u1-hardware": {
    "context": "An editing computer",
    "mistake": "A 1 TB drive means the computer has 1 TB of working RAM.",
    "correction": "Secondary storage and RAM are different resources. Check actual RAM for the active editing workload and available storage for saved and temporary files.",
    "steps": [
      "Input: microphone captures speech.",
      "Processing: ____________________.",
      "Output: headphones play the result; storage keeps the saved file."
    ],
    "completion": "The processor runs instructions that manipulate the audio data, such as changing its volume. The complete task also depends on software, memory and other hardware.",
    "annotations": [
      "Identify what each component does in this workflow.",
      "A larger specification in one resource cannot stand in for every other requirement."
    ]
  },
  "u1-applications": {
    "context": "A logo export",
    "mistake": "I enlarged a small JPEG and saved it as SVG, so its original pixels now contain extra detail.",
    "correction": "Changing a container or filename does not recreate lost image detail. Use suitable original vector artwork for scalable shapes or obtain an adequate raster source.",
    "steps": [
      "Keep: original and editable source.",
      "Export choice for intended delivery: ____________________.",
      "Inspect: output quality, support and file size."
    ],
    "completion": "Choose a supported format suited to the actual asset and destination. For example, a supported SVG may suit vector logo artwork; check embedded raster content and delivery requirements.",
    "annotations": [
      "The source asset and output purpose guide format selection.",
      "Check the exported result rather than assuming an extension guarantees quality."
    ]
  },
  "u1-impacts": {
    "context": "An image for a notice",
    "mistake": "The image is on a public website and I credited its creator, so permission is settled.",
    "correction": "Public access and attribution do not by themselves establish permission. Check a suitable licence, permission or applicable exception and its conditions for this use.",
    "steps": [
      "Asset and proposed use: record both.",
      "Basis for reuse and conditions: ____________________.",
      "Record: source, terms and required credit."
    ],
    "completion": "Record the actual permission or licence and check that the intended publication fits its terms. If uncertain, use an original or suitably approved alternative.",
    "annotations": [
      "The reasoning separates credit from the basis for reuse.",
      "A source record should preserve the relevant terms as well as a URL."
    ]
  },
  "u1-projects": {
    "context": "An event campaign plan",
    "mistake": "The poster looks finished, so we can skip the criteria checks.",
    "correction": "Completion and meeting the brief are different. Check the final output against the agreed criteria and revise issues before handing it over.",
    "steps": [
      "Need: readers find event time and place.",
      "Draft: prepare a layout and style guide.",
      "Evaluation evidence: ____________________."
    ],
    "completion": "Observe readers locating the time and place at the intended output size. Record the version, result and any revision or retest against the criteria.",
    "annotations": [
      "A useful plan connects the brief to production decisions.",
      "The evaluation should refer back to observable criteria."
    ]
  },
  "u2-data": {
    "context": "An image comparison",
    "mistake": "JPEG A is smaller than PNG B, so JPEG is always the best format.",
    "correction": "One comparison cannot establish a universal winner. Check the same source, dimensions, settings, visible quality and destination requirements.",
    "steps": [
      "Source: one unchanged image.",
      "Controlled conditions: ____________________.",
      "Record: output size, visible quality and support."
    ],
    "completion": "Use the same pixel dimensions and viewing conditions while changing one relevant format or quality choice at a time. Record any differences that cannot be controlled.",
    "annotations": [
      "A controlled comparison makes the cause of a difference easier to identify.",
      "File size is one outcome, not a complete judgement of suitability."
    ]
  },
  "u2-networks": {
    "context": "A small-business LAN",
    "mistake": "The access point has wireless coverage, so it automatically supplies an internet service.",
    "correction": "An access point connects wireless devices to the LAN. Internet access also needs an appropriate upstream connection and routing; some products combine roles.",
    "steps": [
      "Wireless device ↔ access point.",
      "Access point ↔ ____________________.",
      "Router ↔ upstream internet service."
    ],
    "completion": "Connect the access point to the LAN, commonly through its switch, with the router providing the upstream route. Label actual device roles and check the equipment design.",
    "annotations": [
      "Connections and component roles need separate labels.",
      "A sensible proposal relates those roles to locations, capacity and user needs."
    ]
  },
  "u2-impacts": {
    "context": "A shared business folder",
    "mistake": "Everyone can open the folder, so everyone may reuse its contents for any purpose.",
    "correction": "Technical access does not settle appropriate use. Check the purpose, authority and relevant information-handling requirements before reuse.",
    "steps": [
      "Task: staff need a shared resource.",
      "Potential access barrier: ____________________.",
      "Response: choose support and check the full task."
    ],
    "completion": "A barrier could be unreliable connectivity, inaccessible content or insufficient skills. Choose a response matched to that barrier, then check whether staff can complete the task.",
    "annotations": [
      "Separate the ability to obtain information from permission to use it.",
      "A decision should consider participation barriers beyond device ownership."
    ]
  },
  "u2-applications": {
    "context": "A business resource",
    "mistake": "The blue rectangle says “Opening hours”, so I do not need to test it.",
    "correction": "A visual control does not establish working behaviour. Check its destination, keyboard operation and whether the result matches its label.",
    "steps": [
      "Control label: Opening hours.",
      "Expected action: ____________________.",
      "Test: activate using keyboard and pointer."
    ],
    "completion": "Open the correct hours destination and display current approved information. Record the result for each input method and correct any broken route.",
    "annotations": [
      "A useful action starts with a clear user goal.",
      "The output must be checked in its intended delivery environment."
    ]
  },
  "u2-projects": {
    "context": "A client delivery plan",
    "mistake": "Tasks use different files, so one person can complete both at the same time.",
    "correction": "Separate files do not establish available capacity. Check the person’s effort, durations, equipment and dependencies before scheduling parallel work.",
    "steps": [
      "Requirement: a business resource meets an agreed need.",
      "Task and owner: identify both.",
      "Capacity/dependency check: ____________________."
    ],
    "completion": "Check that prerequisite work is ready and that the owner and required equipment are available during the planned task period. Adjust overlaps that are not feasible.",
    "annotations": [
      "The plan should connect requirements to manageable work.",
      "A completion claim needs evidence of the actual delivered result."
    ]
  },
  "u3-design": {
    "context": "A festival interface",
    "mistake": "My mouse test passed, so the interface is fully accessible.",
    "correction": "That test provides evidence only for the tested interaction and context. Check relevant keyboard, structure, media and other accessibility requirements; record remaining limits.",
    "steps": [
      "Observation: a visitor misses the venue.",
      "Revision linked to the observation: ____________________.",
      "Retest: repeat the venue-finding task and relevant access checks."
    ],
    "completion": "For example, group time and venue under clear labels instead of using an isolated ambiguous icon. Collect new observations rather than assuming the change worked.",
    "annotations": [
      "Connect the element and principle to the visitor’s task.",
      "A revision is a hypothesis until the follow-up checks provide evidence."
    ]
  },
  "u3-hardware": {
    "context": "A portable device proposal",
    "mistake": "Device C has more RAM, so unknown app support can be counted as passed.",
    "correction": "Unknown compatibility remains unverified. Confirm required app support before comparing optional advantages.",
    "steps": [
      "Essential app support: unknown.",
      "Status and next evidence needed: ____________________.",
      "Recommendation: conditional until the evidence is available."
    ],
    "completion": "Mark app support as unverified. Check official compatibility information and a representative trial where possible; do not report the device as meeting this essential requirement yet.",
    "annotations": [
      "Specification values become useful when related to the actual workload.",
      "Recommendations should state which essentials are passed, failed or unknown."
    ]
  },
  "u3-impacts": {
    "context": "A received document",
    "mistake": "Receiving a document through FOI automatically clears every issue involved in publishing it.",
    "correction": "Access and republication are separate decisions. Check applicable copyright, privacy and other conditions before publishing; seek appropriate guidance if uncertain.",
    "steps": [
      "Asset: a commissioned photograph.",
      "Ownership and intended-use evidence: ____________________.",
      "Publication decision: check the proposed output against the terms."
    ],
    "completion": "Check the commission agreement and permissions for the intended use rather than assuming payment settles every right. Keep terms and required attribution with the asset.",
    "annotations": [
      "Identify the specific right or responsibility rather than treating all rights as interchangeable.",
      "An appropriate process does not guarantee a legal outcome; record limits and use suitable guidance."
    ]
  },
  "u3-applications": {
    "context": "A festival video",
    "mistake": "Captions are present, so it is fine if a large title covers them.",
    "correction": "The combined output still needs to be readable. Move or retime the title and verify captions, other required information and the audio mix in the delivery copy.",
    "steps": [
      "Issue: music masks narration.",
      "Edit to trial: ____________________.",
      "Check: listen to the combined export and inspect media alternatives."
    ],
    "completion": "Lower or adjust supporting music where speech needs to be clear, then check the full mix. Ensure captions and other required alternatives remain accurate and usable.",
    "annotations": [
      "Separate editable layers make targeted revisions possible.",
      "Inspect the combined delivery output, not only individual tracks."
    ]
  },
  "u3-projects": {
    "context": "A six-day project plan",
    "mistake": "The prototype is approved, so the full build can begin even though required assets are missing.",
    "correction": "The illustrated build depends on both prototype approval and prepared assets. Review unblocked tasks or an agreed alternative and update the schedule.",
    "steps": [
      "Change: another language version is requested.",
      "New dependencies: ____________________.",
      "Decision: agree scope, resources and revised timing."
    ],
    "completion": "Identify approved translation, language review, layout and testing as dependencies for that version. Record availability and client agreement before promising completion.",
    "annotations": [
      "The example distinguishes calendar overlap from feasible parallel work.",
      "A revised plan must preserve dependencies, capacity and meaningful testing."
    ]
  },
  "u4-data": {
    "context": "A recovery sequence",
    "mistake": "For Tuesday’s incremental restore, use Sunday’s full backup and Tuesday’s increment; Monday’s increment is unnecessary.",
    "correction": "For the stated Sunday–Tuesday incremental scheme, restore F, then I1, then I2. Missing I1 means this chain cannot be assumed to recover Tuesday completely.",
    "steps": [
      "Scheme: Sunday full, Monday differential, Tuesday differential.",
      "Files for Tuesday recovery: ____________________.",
      "Check: restore and verify expected sample records."
    ],
    "completion": "Use the Sunday full backup and Tuesday differential backup. Tuesday’s differential includes changes since the full backup; Monday’s differential is not required for this recovery point.",
    "annotations": [
      "Read each backup’s reference point before selecting a restore sequence.",
      "A complete-looking schedule still needs usable copies and a successful recovery check."
    ]
  },
  "u4-web": {
    "context": "A group-size field",
    "mistake": "The browser accepts a value, so the server can trust it without checking.",
    "correction": "Browser checks can be bypassed. A real receiving service must enforce the relevant rules on the server too; passing a rule does not prove the claim is true.",
    "steps": [
      "Rule: required whole number from 1 to 20 inclusive.",
      "Upper-boundary tests and expected results: ____________________.",
      "Retest: confirm clear feedback and consistent rules."
    ],
    "completion": "Test 20 as accepted and 21 as rejected. Also test empty, lower-boundary and non-whole values; record browser and server checks separately for a real service.",
    "annotations": [
      "Explicit rules determine expected results before testing.",
      "Keep validation behaviour separate from truthfulness, identity and permission."
    ]
  }
};
const e=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function exampleAnnotation(topicId,index,total){
 const activity=reinforcementActivities[topicId];
 if(!activity)return '';
 const text=index===0?activity.annotations[0]:index===total-1?activity.annotations[1]:null;
 return text?`<p class="example-annotation"><strong>Why this matters:</strong> ${e(text)}</p>`:'';
}
export function reinforcementPractice(topicId){
 const a=reinforcementActivities[topicId];if(!a)return '';
 return `<section class="reinforcement-practice"><h2>Spot the mistake · ${e(a.context)}</h2><p>Read this fictional student response. Identify the error, explain why it matters and rewrite the reasoning.</p><blockquote class="mistake-example"><strong>Response to check:</strong> ${e(a.mistake)}</blockquote><details class="answer"><summary>Compare the correction</summary><p>${e(a.correction)}</p></details><h2>Complete the example</h2><p>Use the chapter ideas to fill the missing step. Explain your choice before opening the example answer.</p><ol class="completion-steps">${a.steps.map(step=>`<li>${e(step)}</li>`).join('')}</ol><details class="answer"><summary>Compare the completed reasoning</summary><p>${e(a.completion)}</p><p>Other responses can work when they meet the stated need and are supported by evidence.</p></details></section>`;
}
