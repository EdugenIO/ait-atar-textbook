// Editorial judgements, 27 October 2026. IDs below are local textbook IDs.
export const auditAreas=[
 [1,'design','7–8',['u1-elements','u1-principles','u1-typography','u1-projects'],'Draft explanation, visual models and practice located','Use the editable layout activities to retain before/after designs and annotations. Check individual nested design items with a subject teacher.'],
 [1,'hardware','8–9',['u1-hardware'],'Draft explanation and worked comparison located','Retain a completed requirements comparison and representative device test; minimum specifications alone do not prove usability.'],
 [1,'impacts','9',['u1-impacts'],'Draft explanation and source-log practice located','Review publication permissions and references against the actual asset licence. Legal explanations remain general teaching material.'],
 [1,'applications','9–10',['u1-applications'],'Worked spreadsheet pack supplied; format workflow partial','Require an editable spreadsheet and observed results. Add a measured graphic/audio export comparison covering the named legacy formats as well as current choices.'],
 [1,'projects','10',['u1-brief','u1-projects'],'Draft brief, representations and revision task located','Retain alternative layouts, design criteria, an implemented prototype and evidence of revision, rather than only a plan.'],
 [2,'data','11–12',['u2-data'],'Models and starter assets supplied; native operations unverified','Complete an approved disposable-file version restore and maintenance log. Use a real application for export comparisons; a simulation is preparatory evidence.'],
 [2,'networks','12',['u2-networks'],'Draft concepts, arithmetic and LAN design task located','Teacher-check diagram roles, media, topology and client-server distinction; capture a justified learner design.'],
 [2,'impacts','12–13',['u2-impacts'],'Draft scenario and privacy qualifications located','Apply a dated source check to Privacy Act coverage and disposal; retain an access-barrier and fallback evaluation.'],
 [2,'applications','13',['u2-applications'],'Animation, media and web starters supplied; workflow partial','Require a working animation as well as its storyboard, an edited audio export and linked responsive prototype. Native software outputs need inspection.'],
 [2,'projects','13',['u2-projects'],'Draft management and client-check tasks located','Link the task plan to completed outputs, actual client-task checks and changes; review resource and time constraints.'],
 [3,'design','7',['u3-design'],'Draft hierarchy, help and navigation practice located','Test a built interface with representative input methods; name untested accessibility questions and retain comparative annotations.'],
 [3,'hardware','8',['u3-hardware'],'Fictional worked comparison; dated trend case missing','Supply a bounded emerging-mobile-device case with dated primary sources, client criteria, unknowns and a review date.'],
 [3,'impacts','8',['u3-impacts'],'Draft rights, FOI and collaboration scenarios located','Recheck jurisdiction-specific legal details before classroom issue; retain distinctions between copyright, certified design rights and FOI access.'],
 [3,'applications','8–9',['u3-applications'],'Timeline and publication packs supplied; native production partial','Require an edited multi-track sample, reusable template, interactive output and inspected delivery copy; log profile and output settings.'],
 [3,'projects','9',['u3-projects'],'Draft approach, dependency and project-plan task located','Retain actual schedule changes, design representations and build evidence; a Gantt chart alone does not demonstrate project management.'],
 [4,'data','10–11',['u4-data','u4-web'],'Recovery/web models and implementation pack supplied; evidence partial','Add a supplied source-comparison set and completed second-browser record. Keep Web 3.0 meanings explicit; require an implemented standards example.'],
 [4,'networks','11',['u4-networks'],'Draft LAN justification and protocol clarification located','Keep legacy syllabus wording alongside modern TLS and 802.11 explanations. Verify configurations before claiming visitor isolation.'],
 [4,'impacts','11–12',['u4-impacts'],'Draft global scenarios; sourced comparative case missing','Add a dated global restriction case with primary sources and limits; do not treat a fictional scenario as evidence about a country.'],
 [4,'applications','12',['u4-applications'],'Tutorial and receiving-side lab supplied; online deployment unverified','Retain fictional response receipt, permitted review, export/deletion and settings evidence in an approved environment. Local execution does not prove online service configuration.'],
 [4,'projects','12',['u4-projects'],'Draft SLA and evaluation reasoning; supplied analysis set missing','Supply fictional survey responses and observation notes, then work through limitations, revision and retest. Distinguish an expected result from an observed one.']
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
 ['P1','Supply missing worked evidence sets','Year 12 device trend, global restriction comparison, source-verification set and survey-to-revision example.','Each uses bounded claims, dated sources or clearly fictional data, limitations and a review/retest record.'],
 ['P1','Reconcile nested syllabus items','Expand the historical 185 grouped checkpoints into individually reviewable official sub-items.','Every item has precise explanation, worked example, independent practice and reviewer decision; unresolved gaps remain visible.'],
 ['P2','Upgrade the teacher planner','Bring across CS-style unit/week controls, objective/activity/check cards and truthful resource availability.','All 64 lessons per unit remain 55 minutes; exam weeks 17–18 remain separate reserves.'],
 ['P2','Pilot lesson presentations','Start with one four-lesson AIT week after its activities are reviewed.','Browser slides, editable deck and teacher notes agree and are linked only when delivered.'],
 ['P2','Design AIT assessment and practice libraries','Use the CS interaction patterns with original AIT content and the correct year-level design.','Teacher review checks category totals, item mappings, task authenticity and practice/issued-assessment separation.'],
 ['P3','Independent subject and accessibility review','Review completed mappings, native workflows, keyboard/zoom/screen-reader use and pacing.','Record reviewer, environment, date, finding and correction; do not infer approval from automated tests.']
].map(([priority,title,scope,done])=>({priority,title,scope,done}));
