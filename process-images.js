import {unit4ProjectPlacement} from './unit4-project-chapter.js?v=0.43';
import {unit4LearningPlacement} from './unit4-learning-chapter.js?v=0.43';
import {unit4ImpactsPlacement} from './unit4-impacts-chapter.js?v=0.43';
import {unit4NetworkPlacement} from './unit4-network-chapter.js?v=0.43';
export const processImages={
  "computer": {
    "file": "computer-workflow.webp",
    "width": 1942, "height": 809,
    "alt": "A microphone sends captured speech to a computer, edited audio goes to headphones, and a separate drive exchanges saved data with the computer.",
    "steps": [
      "Input: capture speech with the microphone.",
      "Processing and output: run editing instructions, then play the result.",
      "Storage: load and save files separately from the main input-to-output flow."
    ]
  },
  "network": {
    "file": "network-workflow.webp",
    "width": 1774, "height": 887,
    "alt": "A cloud connects through a router to a switch, which links wired devices and an access point serving wireless devices.",
    "steps": [
      "Top: the router beneath the cloud connects the LAN to an upstream network.",
      "Centre: the row of switch ports connects local wired equipment.",
      "Right: the access point uses radio links for wireless devices. The shield is a symbol, not proof of security."
    ]
  },
  "recovery": {
    "file": "recovery-workflow.webp",
    "width": 1983, "height": 793,
    "alt": "A failed laptop is replaced by a working laptop that receives recovered files from a separate existing backup drive.",
    "steps": [
      "Identify the failure and the data needed for recovery.",
      "Use a suitable existing backup and its required restore sequence.",
      "Check the restored files and report any missing recent changes."
    ]
  },
  "project": {
    "file": "project-workflow.webp",
    "width": 2056, "height": 765,
    "alt": "People discuss a brief, sketch a design, build a digital product and test it, with a return arrow for revision.",
    "steps": [
      "Agree the problem, audience and requirements.",
      "Plan and build a suitable solution.",
      "Test against the brief and revise using evidence."
    ]
  },
  "design": {
    "file": "design-workflow.webp",
    "width": 1774, "height": 887,
    "alt": "A crowded poster is compared with a revised poster using a prominent heading area, grouped information and more open space.",
    "steps": [
      "Identify what the audience needs to notice or find.",
      "Adjust visual hierarchy, grouping, contrast and space.",
      "Check the intended effect at the actual viewing size."
    ]
  },
  "media": {
    "file": "media-workflow.webp",
    "width": 1942, "height": 809,
    "alt": "A camera, microphone and media folder feed an editable timeline, which branches to a captioned video and a static printed sheet.",
    "steps": [
      "Keep original source assets and their records.",
      "Arrange and revise an editable multimedia project.",
      "Export suitable outputs and check each delivery medium."
    ]
  },
  "rights": {
    "file": "rights-workflow.webp",
    "width": 1962, "height": 802,
    "alt": "A source image and document are examined, people review permission and access, then an approved image is used in a publication with a retained source record.",
    "steps": [
      "Identify the information or asset and its source.",
      "Check the intended purpose, permissions and relevant conditions.",
      "Publish only appropriate material and keep the decision record."
    ]
  }
};
export const imagePlacements={
...unit4NetworkPlacement,
...unit4ImpactsPlacement,
...unit4LearningPlacement,
...unit4ProjectPlacement,
  "u1-brief": {
    "asset": "project",
    "title": "Read the brief before making the product",
    "note": "Identify the client, intended audience and the task the resource should help them complete."
  },
  "u1-elements": {
    "asset": "design",
    "title": "See elements working together",
    "note": "Look for changed shape, tone and space. Explain how one change could make the message easier to read."
  },
  "u1-principles": {
    "asset": "design",
    "title": "Compare the intended reading order",
    "note": "Which area attracts attention first? Explain how emphasis and grouping could support the audience’s task."
  },
  "u1-typography": {
    "asset": "design",
    "title": "Inspect the text roles",
    "note": "The blocks stand for text roles, not readable copy. Choose a hierarchy and alignment, then test actual text in the intended output."
  },
  "u1-hardware": {
    "asset": "computer",
    "title": "Trace an audio task through a system",
    "note": "Identify input, processing, output and storage. The computer’s internal arrangement is illustrative, not a hardware assembly guide."
  },
  "u1-applications": {
    "asset": "media",
    "title": "Keep source, project and output distinct",
    "note": "The editable project and exported delivery copy have different jobs. Explain which one you need when making a revision."
  },
  "u1-impacts": {
    "asset": "rights",
    "title": "Make the reuse decision visible",
    "note": "Public access does not automatically establish permission. Check the intended use and record the applicable terms."
  },
  "u1-projects": {
    "asset": "project",
    "title": "Connect planning to review",
    "note": "Point to where criteria are agreed and where they are checked. A finished-looking product still needs evaluation."
  },
  "u2-data": {
    "asset": "recovery",
    "title": "Recover from a separate copy",
    "note": "A synchronised folder is not automatically a protected recovery copy. Explain what must be checked before relying on it."
  },
  "u2-networks": {
    "asset": "network",
    "title": "Follow a local connection to the internet",
    "note": "Follow a wireless device through access point, switch and router. This is one simplified topology; actual products may combine roles."
  },
  "u2-impacts": {
    "asset": "rights",
    "title": "Separate access from appropriate use",
    "note": "A key represents access control, not permission for every purpose. Check who needs the information and why."
  },
  "u2-applications": {
    "asset": "media",
    "title": "Inspect the delivered behaviour",
    "note": "An editable timeline is not the final viewing experience. Check exported playback, interaction and relevant alternatives."
  },
  "u2-projects": {
    "asset": "project",
    "title": "Plan the complete delivery route",
    "note": "Explain one requirement, one resource constraint and one check needed before handover."
  },
  "u3-design": {
    "asset": "design",
    "title": "Turn a visual intention into a test",
    "note": "A clearer-looking hierarchy is a proposal. Observe the intended task and check relevant accessibility requirements."
  },
  "u3-hardware": {
    "asset": "computer",
    "title": "Choose hardware for the workflow",
    "note": "Connect each component role to a client task. This drawing does not supply measurements or prove a device meets a specification."
  },
  "u3-impacts": {
    "asset": "rights",
    "title": "Keep rights and decisions with the asset",
    "note": "The illustration models a review process, not a legal outcome. Check the actual agreement and relevant conditions."
  },
  "u3-applications": {
    "asset": "media",
    "title": "Follow assets into separate delivery outputs",
    "note": "Track original media into the editable timeline, then compare a captioned video with a static printed resource."
  },
  "u3-projects": {
    "asset": "project",
    "title": "Use testing to guide revision",
    "note": "The return arrow represents review and improvement. Confirm dependencies and resource capacity before changing the schedule."
  },
  "u4-data": {
    "asset": "recovery",
    "title": "Restore, then verify",
    "note": "The drive represents an already-existing backup. Choose the complete restore set and check the recovered booking records."
  },
  "u4-web": {
    "asset": "project",
    "title": "Review a web resource before release",
    "note": "Include source checking, semantic structure, accessible interaction, form rules and compatibility tests in the review stage."
  }
};
const e=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function processIllustration(id){
 const placement=imagePlacements[id];if(!placement)return '';
 const asset=processImages[placement.asset];
 return `<figure class="process-illustration"><figcaption><strong>Illustrated process · ${e(placement.title)}</strong></figcaption><a class="process-image-link no-print" href="assets/processes/${asset.file}" target="_blank" rel="noopener">Open full-size illustration</a><img width="${asset.width}" height="${asset.height}" src="assets/processes/${asset.file}" alt="${e(asset.alt)}" loading="lazy" decoding="async"><ol>${asset.steps.map(step=>`<li>${e(step)}</li>`).join('')}</ol><p>${e(placement.note)}</p><p class="reference">AI-generated teaching illustration. Read the numbered explanation for the process; objects and connections are simplified.</p></figure>`;
}
