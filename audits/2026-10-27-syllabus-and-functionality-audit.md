# AIT syllabus, accuracy and functionality audit

27 October 2026 · baseline `1bb5939`, edition 0.37 · corrections prepared as 0.38.

## Finding

The textbook has authored drafts in all 20 content areas, but it should **not be described as fully syllabus-compliant or independently approved**. Several operational skills still need complete software outputs and observed checks. Some Year 12 research/evaluation tasks lack a supplied worked evidence set. The earlier 185 checkpoints group nested requirements and cannot establish complete item-by-item coverage.

This is an editorial review of the textbook, not an SCSA school Syllabus Delivery Audit. A public textbook is not required to reproduce a school's assessment system. Assessment compliance depends on the school's adopted program, conditions, authentication, marking and moderation.

## Baseline and method

- Confirmed [SCSA's course listing](https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/technologies/applied-information-technology) on 27 October: Year 11 from 2026 and the forthcoming Year 12 from 2027. The latter is the user-selected baseline, not the applicable Year 12 syllabus for students completing 2026.
- Reviewed official Year 11 content pp. 7–13 and Year 12 content pp. 7–12; assessment tables and the Year 12 examination design were checked separately. Official documents retain their own terms; teaching summaries and findings here are original.
- Inspected the 24 authored chapters' explanation, worked-example, question and application-task inventories, the 20-area register, historical grouped checkpoints, seven practical packs, shared navigation/search/printing and the build/check scripts. This does not certify every sentence or every nested official sub-item.
- Compared the current public [CS source](https://github.com/EdugenIO/cs-atar-textbook/tree/11a9b8a) at commit `11a9b8a`, dated 26 October 2026. The snapshot was taken in a separate reference directory; the CS project was not modified.
- Direct PDF downloads met the publisher's automated-access challenge. Official text remained available through the web reader; the local Year 11 copy was also available. The Year 12 screenshot fetch failed, so no visual PDF-layout verification is claimed.

Sources: [Year 11, 2026](https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1232466/Applied-Information-Technology-ATAR-Year-11-Syllabus-for-teaching-from-2026.PDF); [Year 12, 2027](https://senior-secondary.scsa.wa.edu.au/__data/assets/pdf_file/0006/1273182/Applied-Information-Technology-ATAR-Year-12-Syllabus-for-teaching-from-2027.PDF).

The [20-area review](2026-10-27-area-review.csv) records current chapter evidence and an actionable limit for every content area. The [185-checkpoint reconciliation](2026-10-27-checkpoint-reconciliation.csv) retains previous IDs and historical fields, adding current area findings. It is an inventory reconciliation, not a claim that grouped items have become atomised official requirements. The browser hub is `#audits`.

## Content and accuracy findings

| Priority | Finding | Action/status |
|---|---|---|
| P1 | Unit 1 spreadsheet evidence permitted a hand-traced table in place of using software. | Corrected: require an editable spreadsheet and observed results; paper tracing is preparation. The supplied lookup workbook remains available. |
| P1 | Unit 2 data permitted analysis instead of producing delivery copies. | Corrected: require two actual application exports with recorded settings and comparisons. |
| P1 | Unit 2 animation task could stop at a storyboard. | Corrected: require an editable working animation and observed playback, alongside the comparison. |
| P1 | Unit 3 production permitted analysing a sample and choosing between interactive output and export. | Corrected: require editing a multi-track sample, an interactive prototype and inspected publication export. Retain editable sources and delivery checks. |
| P1 | Supplied resources are sometimes mistaken for demonstrated native-tool operation. | Still open: capture actual editor/export, maintenance, restore and online response-setting evidence. Starter/model checks are useful but do not substitute for those operations. |
| P1 | Year 12 worked evidence is thin for emerging-device trends, global content restrictions, source comparison and survey-led revision. | Supply four bounded worked evidence sets with dates, limitations and repeatable checks. Fictional scenarios alone do not establish facts about a real product or country. |
| P1 | Mapping remains grouped, with some content-area links rather than precise requirement destinations. | Expand nested requirements and record explanation/model/practice/reviewer decisions. No completion percentage is justified. |
| P2 | Earlier audit descriptions say practical packs are missing despite subsequent delivery. | Current hub and area review now distinguish supplied packs from remaining workflow and classroom checks. Preserve earlier reports as dated history. |

Selected accuracy checks retained: decimal bit/byte transfer estimates; 24 frames at 12 fps = 2 seconds; full/differential/incremental recovery distinctions; 99.9% availability over a simplified 30-day period corresponds to 43.2 minutes rather than a guaranteed outage cap; exact-match lookup errors are distinct from a real zero. Existing TLS/legacy SSL and 802.11-family/802.1X clarifications should remain visible alongside syllabus terminology.

Current primary guidance supports the existing qualifications about [small-business Privacy Act coverage](https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business) and [certification before enforcing a design right](https://www.ipaustralia.gov.au/design-rights/how-to-apply-for-a-design-right). These are selected source checks, not a comprehensive legal audit. [W3C language guidance](https://www.w3.org/International/questions/qa-html-language-declarations.en) supports retaining language declarations as one part of internationalisation; it does not establish full internationalisation or accessibility conformance.

## Assessment and pacing

For future teacher planning, AIT's school assessment categories Project / Short answer / Extended answer / Examination have year-level totals of **40/15/15/30** (Year 11) and **40/10/10/40** (Year 12). Do not transplant Computer Science category names, project allocations or marking guides.

The Year 12 examination design has ten minutes reading and three hours working time, with multiple-choice / short answer / extended answer / scenario weights **15/25/20/40**. A short self-marked practice pilot must be labelled accordingly. Its content, question counts and timer must not be advertised as a full examination unless they meet the whole brief.

The user's local schedule stays at 64 × 55-minute lessons per unit (58 h 40 m), followed by two exam-reserve weeks. It is a local plan, not the syllabus's prescribed duration: Year 11 has notional 55 hours per unit and Year 12 has 110 for the pair. School examinations and the external timetable are separate.

## CS functionality comparison and delivery

| Feature observed in CS | AIT decision |
|---|---|
| Ranked text search, aliases, glossary/section links and show-more pagination | Implemented with AIT content. All results remain reachable; activity destinations retained; query text uses text nodes. |
| Skip-link bypasses chapter routing; navigation moves focus to destination | Implemented. Previously `#main` could enter the route parser and display a missing page. |
| Labelled keyboard scroll regions for wide tables/examples | Implemented in the shared renderer, preserving existing named wrappers and print reflow. |
| Coverage/audit hub with dated review material | Implemented: `#audits`, current CSVs, source versions, area findings and next steps. |
| Unit/week planner controls and objective/activity/check cards | Next UI batch, using AIT's existing 256 sessions. Current generic phase plans need lesson-specific detail. |
| Browser presentations, editable slides, teacher notes and availability-aware links | Pilot one reviewed AIT week after planner alignment; no empty download buttons. |
| Assessment planning catalogue and alternatives | Separate AIT teacher-resource authoring batch, with correct category totals and school review. |
| Static exam practice with timers, local drafts, self-marking, correction/export/print | Reuse the interaction concept after original AIT questions and criteria are reviewed. Do not copy CS question content or imply automatic grading. |
| Download action styling and social preview artwork | Later presentation work; preserve ordinary explanatory links and any required code attribution. |

The new modules are original AIT implementations informed by observable CS behaviour; no substantial CS source block was copied.

## Ordered next steps

1. Complete actual native-tool evidence in Units 2–3 and link sources, exports and observed checks.
2. Add the four missing Year 12 worked evidence sets, including survey findings → justified change → retest.
3. Expand and review individual nested syllabus requirements before any coverage-complete claim.
4. Upgrade the teacher planner without adding lessons or consuming the exam reserve; then pilot one week of lesson presentations.
5. Build original AIT assessment and optional practice libraries using the CS functionality patterns and AIT rules.
6. Obtain independent subject review and broader keyboard, zoom, screen-reader, browser and classroom evidence.

Each batch is complete only when its teaching explanation, actual model, independent task, expected checks, linked files and tested output are present. A plan, screenshot or numerical answer alone is insufficient evidence of application skills.

## Validation

The full automated textbook suite, new search/access regression checks, static build and rendered resource inventory were run for this batch. Search tests include all-result pagination through a partial final page, correct focus after show-more, valid chapter/section/activity destinations, alias/Unicode normalisation, empty/no-result recovery and route-preserving skip behaviour. Browser observations and final counts are recorded with the release verification below.

Automated checks establish bounded behaviour and resource integrity, not subject approval, student mastery, all-browser compatibility or WCAG conformance. Native desktop application trials and exhaustive external-link checks remain outside this batch.

Release verification: all automated checks passed; the expanded resource inventory inspected 608 pages, including the audit hub, four unit planners and all 256 sessions. It found no broken local resource links, duplicate static IDs, missing image alternatives or missing image dimensions. Browser checks observed design search pagination from 12 to 24 results with focus on the first new result, VLOOKUP navigation to its specific section, and keyboard activation of Skip to content preserving the current route and focusing `main`. The audit hub and application chapter were visually inspected; at a 390 px viewport the hub had no page-wide horizontal overflow. Viewport override was reset. This is a limited Chromium-based trial, not multi-browser or screen-reader sign-off.
