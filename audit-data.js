// Editorial judgements, 27 October 2026. IDs below are local textbook IDs.
export const auditAreas=[
 [1,'design','7–8',['u1-elements','u1-principles','u1-typography','u1-projects'],'Draft explanation, visual models and practice located','Use the editable layout activities to retain before/after designs and annotations. Check individual nested design items with a subject teacher.'],
 [1,'hardware','8–9',['u1-hardware'],'Draft explanation and worked comparison located','Retain a completed requirements comparison and representative device test; minimum specifications alone do not prove usability.'],
 [1,'impacts','9',['u1-impacts'],'Draft explanation and source-log practice located','Review publication permissions and references against the actual asset licence. Legal explanations remain general teaching material.'],
 [1,'applications','9–10',['u1-applications'],'Spreadsheet and measured format workflows supplied','Use the exported reference comparison and independent brief; verify target-tool support for required legacy formats. CGM support remains unverified.'],
 [1,'projects','10',['u1-brief','u1-projects'],'Draft brief, representations and revision task located','Retain alternative layouts, design criteria, an implemented prototype and evidence of revision, rather than only a plan.'],
 [2,'data','11–12',['u2-data'],'Actual export and disposable ZIP-restore references supplied','Complete the learner operation log and supervised OS-utility trial. Command-line file restoration does not establish native OS cleanup or drive optimisation.'],
 [2,'networks','12',['u2-networks'],'Draft concepts, arithmetic and LAN design task located','Teacher-check diagram roles, media, topology and client-server distinction; capture a justified learner design.'],
 [2,'impacts','12–13',['u2-impacts'],'Draft scenario and privacy qualifications located','Apply a dated source check to Privacy Act coverage and disposal; retain an access-barrier and fallback evaluation.'],
 [2,'applications','13',['u2-applications'],'Animation timing and actual audio/media references supplied','Use the worked software pathways to create and inspect learner sources/exports. Record native-tool version, controls, playback and responsive-link tests.'],
 [2,'projects','13',['u2-projects'],'Draft management and client-check tasks located','Link the task plan to completed outputs, actual client-task checks and changes; review resource and time constraints.'],
 [3,'design','7',['u3-design'],'Requirement-linked interface model and annotated revision pathway supplied','Test a built interface with representative input methods; name untested accessibility questions and retain comparative annotations.'],
 [3,'hardware','8',['u3-hardware'],'Dated primary-source mobile trend case supplied','Apply the conditional comparison to a new client; check actual app, accessories, battery and viewing conditions. Review sources before reuse.'],
 [3,'impacts','8',['u3-impacts'],'Requirement-linked rights, FOI and collaboration decision cases supplied','Recheck jurisdiction-specific legal details before classroom issue; retain distinctions between copyright, certified design rights and FOI access.'],
 [3,'applications','8–9',['u3-applications'],'Actual mixed MP4 reference and production pathway supplied','Retain learner editor-native project, template variants and inspected publication output. Native editor open/save and printer-specific approval remain unperformed.'],
 [3,'projects','9',['u3-projects'],'Requirement-linked planning representations and resource counterexample supplied','Retain actual schedule changes, design representations and build evidence; a Gantt chart alone does not demonstrate project management.'],
 [4,'data','10–11',['u4-data','u4-web'],'Fictional source-comparison case and web pack supplied','Use the five-source decision and independent transfer; complete a second-browser record and keep unpublished drafts distinct from approved evidence.'],
 [4,'networks','11',['u4-networks'],'Draft LAN justification and protocol clarification located','Keep legacy syllabus wording alongside modern TLS and 802.11 explanations. Verify configurations before claiming visitor isolation.'],
 [4,'impacts','11–12',['u4-impacts'],'Dated primary-source global restriction comparison supplied','Keep historical snapshots distinct from present-day availability; compare sources and perspectives in a new approved case.'],
 [4,'applications','12',['u4-applications'],'Tutorial and receiving-side lab supplied; online deployment unverified','Retain fictional response receipt, permitted review, export/deletion and settings evidence in an approved environment. Local execution does not prove online service configuration.'],
 [4,'projects','12',['u4-projects'],'Paired fictional survey, revision prototypes and retest model supplied','Recalculate results, inspect sampling/order limits and collect separate approved learner observations. Invented records are not a real study.']
].map(([unit,area,pages,topics,status,next])=>({unit,area,pages,topics,status,next,sourceYear:unit<3?11:12}));

export const featureReview=[
 ['Ranked search, section/glossary destinations and show more','Implemented in this batch','Search the authored AIT content, keep all results reachable and avoid duplicate legacy pilot destinations.'],
 ['Skip-link and route focus','Implemented in this batch','Skip to the current main content without routing to a missing page; focus the new heading after navigation.'],
 ['Keyboard scroll regions for tables and examples','Implemented in this batch','Contain wide content and label focusable regions while preserving print output.'],
 ['Coverage and audit hub','Implemented in this batch','Show current evidence, limits and a prioritised backlog; keep historical reports clearly dated.'],
 ['Teacher planner with unit/week controls and lesson cards','Next functionality batch','Retain the existing 256 sessions and exam reserves. Add objectives, specific activities and checks rather than duplicating a generic phase template.'],
 ['Browser lesson presentations, editable slides and notes','After planner/content alignment','Generate AIT-specific decks from reviewed lesson data. Show download buttons only when matching files exist.'],
 ['Assessment planning library','Separate teacher-resource batch','Use AIT assessment categories and weights, content mappings, authentication and school review. Do not copy CS tasks, game rubrics or category names.'],
 ['Static exam-practice workflow','After an AIT question/criterion pilot','Adapt timers, local drafts, finish/review, self-marking and exports; write original AIT questions. A short practice set is not a full SCSA examination.'],
 ['Consistent download actions and social preview artwork','Later presentation batch','Group resource actions without changing explanatory links; create AIT artwork and metadata. Preserve required attribution if reusing code.']
].map(([feature,status,next])=>({feature,status,next}));

export const nextSteps=[
 ['P1','Complete operational evidence','Unit 2 data/applications and Unit 3 applications: produce the actual native-tool outputs, version restore and before/after logs using supplied assets.','An editable source, inspected export, observed test log and revision are linked from the lesson.'],
 ['P1','Trial and extend the supplied worked evidence sets','Four worked evidence sets are delivered in edition 0.39. Apply their independent tasks and record classroom findings separately from supplied examples.','Each uses bounded claims, dated sources or clearly fictional data, limitations and a review/retest record.'],
 ['P1','Reconcile nested syllabus items','Units 1–3 now have individual source-order maps. Expand Unit 4 next, retaining precise teaching evidence and reviewer decisions.','Every item has precise explanation, worked example, independent practice and reviewer decision; unresolved gaps remain visible.'],
 ['P2','Upgrade the teacher planner','Bring across CS-style unit/week controls, objective/activity/check cards and truthful resource availability.','All 64 lessons per unit remain 55 minutes; exam weeks 17–18 remain separate reserves.'],
 ['P2','Pilot lesson presentations','Start with one four-lesson AIT week after its activities are reviewed.','Browser slides, editable deck and teacher notes agree and are linked only when delivered.'],
 ['P2','Design AIT assessment and practice libraries','Use the CS interaction patterns with original AIT content and the correct year-level design.','Teacher review checks category totals, item mappings, task authenticity and practice/issued-assessment separation.'],
 ['P3','Independent subject and accessibility review','Review completed mappings, native workflows, keyboard/zoom/screen-reader use and pacing.','Record reviewer, environment, date, finding and correction; do not infer approval from automated tests.']
].map(([priority,title,scope,done])=>({priority,title,scope,done}));
