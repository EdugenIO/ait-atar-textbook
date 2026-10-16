# Curriculum baseline and first release

Decision date: 16 October 2026.

The user selected Year 12 ATAR for teaching from 2027. The Year 12 document supplied in the original request is superseded as the authoring baseline.

| Year | Selected syllabus | Document identifier | Content locations (printed pages) |
| --- | --- | --- | --- |
| 11 | ATAR for teaching from 2026 | 2013/35758[v5] | Unit 1: 7–10; Unit 2: 11–13 |
| 12 | ATAR for teaching from 2027 | 2013/35142[v6] | Unit 3: 7–9; Unit 4: 10–12 |

Official source links are maintained in `curriculum.js`. Year 12 was inspected through the official SCSA PDF as linked from the course page on 16 October 2026. Direct local download encountered a website access challenge; the PDF text was available through the web reader. No local copy of that PDF is redistributed.

The 2027 document's introductory notice identifies refreshed rationale, aims and General Capabilities. Both teaching content and page references must still be checked against the selected document; the site does not infer alignment from the older attachment.

## Mapping boundary

`curriculum.js` currently contains 20 section destinations, five per unit. These map the content-area headings, not each knowledge and skill bullet. They are intended as a transparent authoring scaffold. Draft pilot lessons are partial introductions and are not treated as complete section coverage.

The next expansion should store one row for every requirement and nested item, with:

- A local requirement ID, clearly labelled as local.
- Year, unit, syllabus version, printed page and source URL.
- Knowledge or skill classification and parent requirement.
- A concise paraphrase of the required learning.
- Lesson, activity, review question and expected student evidence.
- Authoring and curriculum review statuses recorded separately.

Preserve the distinction between a drafted lesson, a reviewed requirement and a fully covered section. Keep exact official wording in linked SCSA documents; use original explanations and brief paraphrases in this public resource.

## First release checks

- Node validation: selected syllabus versions; unique chapter IDs; four units with five content areas each; draft status agrees with available lessons; local assets resolve.
- JavaScript syntax checks and static build.
- Browser: overview renders, Year 12 lesson opens, coverage filters return 20/all and 10/Year 12 rows, topic search returns both network destinations, no captured console warnings or errors in those interactions.

Teacher review, a full syllabus audit and examination coverage are outstanding.
