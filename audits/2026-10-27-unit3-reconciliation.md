# Unit 3 individual content reconciliation · edition 0.42

27 October 2026 · Year 12 syllabus effective 1 January 2027, `2013/35142[v6]`, printed pp. 7–9. Reviewed against the [official SCSA 2027 syllabus](https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1273182/Applied-Information-Technology-ATAR-Year-12-Syllabus-for-teaching-from-2027.PDF), currently linked from the course page under What’s changing. This prospective baseline is the user-selected edition; Year 12 students in 2026 require their applicable syllabus.

## Scope and source hierarchy

The [readable map](unit3-reconciliation.html), [CSV](unit3-requirements.csv) and [JSON](unit3-requirements.json) preserve source order, parent/child relationships and printed-page references. Labels are editorial paraphrases; IDs are local locators, not SCSA codes. This is a content authoring review, not school-program compliance or SCSA approval.

The outline has **42 top-level content bullets, 30 second-level bullets and three nested entries: 75 rows, eight parent contexts and 67 leaf reviews**. Five introductory content-area labels are excluded. Top-level knowledge/skill counts by area are design 2/5, hardware 4/2, impacts 8/0, applications 6/6 and projects 3/6. The three nested design entries remain under the relevant GUI-help parent, matching the published outline rather than being promoted to top-level outcomes.

Year 12 physical PDF page references use printed page +4 (printed p.7 is zero-based P10, PDF page 11 one-based), matching the current Year 11 offset. Shared publication now accepts explicit baseline, version, offset and fictional context parameters; it retains the previous Unit 2 defaults. No Year 11 version or baseline label is reused for this Year 12 map.

All 75 rows point to specific existing chapter sections and relevant worked/task/check anchors. Locating authored material does not establish independent quality review, actual learner performance or a completion percentage. Units 1–3 have detailed maps; Unit 4 retains the broader earlier inventory. Whole-course assessment, resource and policy requirements are outside this content-only table.

## Targeted additions

Seven original guides extend existing chapter tasks without adding weeks or assessment projects:

| Guide | Worked support and independent application |
|---|---|
| Interface | Connect element → principle → intended task effect → observed check. Annotate hierarchy, navigation, audience and contextual help; distinguish usability, inclusion and accessibility; revise and retest. |
| Devices | Use explicit fictional A/B/C specifications and model conditions to gate compatibility, mobility and runtime. Unknowns remain unverified. Transfer the existing dated primary-source trend case into a new client investigation. |
| Rights | Separate IP ownership/reuse, FOI access and publication decisions. Use invented assets and claims, qualified Australian legal response routes and current primary guidance. |
| Collaboration | Compare physical, virtual and hybrid access/coordination implications; select an approved tool and retain versions, review and approval. A local role rehearsal is not actual online operation. |
| Timeline | Model picture/audio layers, titles, transitions, effects and sound; connect to actual existing media exports and editable starters. Learners retain their own native project, reopened export and revised/retested interactive integration. |
| Publication | Compare publication types and trade-offs; create/reuse a template, manage containers/layers/typography and separate colour schemes from actual colour-profile/output operations. |
| Planning | Develop brief, approach choice, purposeful representations, dependency/resource-aware schedule and actual progress/change/evaluation records. Includes the one-person counterexample to two parallel full-day jobs. |

The original editable `festival.html` and `festival.css` provide same-page programme/detail routes, contextual expandable help, skip navigation, visible keyboard focus, responsive cards and print-specific presentation. They collect no information and use invented event details. They are a working HTML/CSS reference and template, not a native desktop publication project or certified print proof. The separate planning model supplies storyboard, site-map, decision-flow and Gantt-style schedule representations. The blank CSV log separates expected results, actual observations, revisions and retests.

## Accuracy and unresolved evidence

The rights guide references [IP Australia](https://www.ipaustralia.gov.au/design-rights), [Attorney-General’s Department](https://www.ag.gov.au/rights-and-protections/copyright/copyright-owners), [Legal Aid WA](https://www.legalaid.wa.gov.au/node/365) and [OAIC FOI guidance](https://www.oaic.gov.au/freedom-of-information/your-freedom-of-information-rights/what-is-freedom-of-information), checked 27 October 2026. Classroom cases are qualified teaching examples; real decisions require current applicable procedures and appropriate advice.

Actual learner multi-track editing, application-native save/reopen, colour-profile handling, target-output proofing and online-tool operation remain unverified. A supplied MP4, CSS palette, browser print preview or model log does not establish these skills. The map names multi-track and profile operations explicitly as operational follow-ups. Representative user/accessibility trials and independent teacher review remain open; no WCAG or all-browser claim follows from this batch.

## Integration and verification

The five Unit 3 chapters, matching session companions, Unit 3 worksheets, practical library, coverage/audit hubs and portable archives link the new resources. The existing 64 × 55-minute lessons, 16 teaching weeks and two exam-reserve weeks per unit are preserved.

Regeneration: `python scripts/build-unit3-reconciliation.py`, then `python scripts/package-practical.py unit3-evidence`. The dedicated regression check verifies the 42/30/3 hierarchy and area counts, parent consistency, unique IDs, 2027 metadata/PDF offsets, explanation destinations, model/task/check anchors, explicit operational limits, template routes/help/focus/print structure and lesson integration. Run the complete checks, build, local-resource audit and browser verification before publishing. Next substantive content batch: Unit 4.

Release verification: the full automated suite passed, including the loopback response lab. The build and resource audit inspected 656 pages with no broken local links, duplicate static IDs, missing image alternatives or missing dimensions. All practical ZIPs passed integrity checks. Browser observations confirmed the festival detail/return routes, Enter activation of contextual help, skip-link focus on `main`, and a single-column 390 px layout without page-wide overflow; the temporary viewport override was reset. Storyboard, site-map and decision-flow SVGs loaded and were visually reviewed. These are bounded Chromium-based checks, not multi-browser, assistive-technology or native-tool sign-off. The application chapter now explicitly explains online-tool functions and selection/export/access limits.
