# Applied Information Technology ATAR — Classroom Textbook

Initial companion to https://edugenio.github.io/cs-atar-textbook/.

Target: https://edugenio.github.io/ait-atar-textbook/

## Curriculum

- Year 11: SCSA ATAR syllabus for teaching from 2026.
- Year 12: SCSA ATAR syllabus for teaching from 2027 (2013/35142[v6], effective 1 January 2027).
- Official documents are linked in `curriculum.js` and the site's About page. They retain SCSA's own terms.
- `curriculum.js` is a **section-level** authoring register, not a full dot-point audit. Printed page references were checked against the content-area headings. Expand it to individual knowledge/skill requirements before claiming complete coverage.

## Current scope

Four unit overviews, 20 chapter destinations, two original draft design lessons, search, glossary, revision guidance, project directions and a downloadable coverage register. All other chapters explicitly show Planned status. No unit is complete or teacher-reviewed.

Edition 0.2 adds the complete **draft teaching sequence**: 256 named 55-minute session plans, unit filters, weekly evidence, lesson navigation, printable plans and downloadable CSV/Markdown schedules. These plans do not imply that 256 full textbook lessons have been authored.

## Teaching time

Each unit has 16 teaching weeks × 4 lessons × 55 minutes = **64 lessons / 58 hours 40 minutes**. Two additional exam weeks follow, giving an **18-week unit block**. Projects, practice, feedback and revision are included within the teaching lessons. Exam weeks have no new teaching allocated, and the school sets examination duration and conditions.

Two units per year give 128 teaching lessons and a 36-week outline including exams. Four units across two years give 256 teaching lessons and eight reserved exam weeks. Week numbers reset per unit; year-week numbers run 1–36 independently for Year 11 and Year 12. These are relative planning weeks, not school term dates.

The sequence follows the companion CS textbook's time structure. Content and lesson tasks are newly authored for AIT.

Data: `teaching.js`. Planner UI: `planner-ui.js`. Generated downloads: `teaching-sequence.md`, `teaching-lessons.csv` and `exam-weeks.csv`. `npm run build` regenerates these exports from the same source used by the site.

The initial visual direction follows the CS companion's bookshelf layout, paper palette, serif headings and static hash routing. It does not import the CS curriculum or application code.

## Develop and validate

Requires Node.js 22 or newer. No package installation is needed.

```sh
npm run check
npm run build
npm run dev
```

Preview: http://127.0.0.1:4174/ait-atar-textbook/

## GitHub Pages

The included Actions workflow publishes `dist/` on pushes to `main`. Configure Settings → Pages → Source as GitHub Actions. Relative assets and hash routes support the `/ait-atar-textbook/` project path and direct refreshes.

## Next authoring work

1. Expand each section into individual syllabus requirements, including nested items, with source references and evidence expectations.
2. Teacher-review the two pilot lessons before using them as the house style.
3. Author Unit 1 in full, including spreadsheet skills; then Unit 2, Unit 3 and Unit 4.
4. Add full project briefs, marking guidance and examination practice.
5. Maintain a dated review log for syllabus alignment, technical accuracy and accessibility.

This is an independent teaching resource, not an official SCSA publication.

## Student textbook (edition 0.3)

Contents is now a numbered student reading pathway. Four original chapters develop Unit 1 weeks 1–4: understanding a brief, design elements, design principles, and typography/composition. The learning sequence follows the CS companion's approach: retrieval, explicit explanation, worked examples, guided practice, independent transfer, explained feedback and recap. Each chapter links to its four scheduled 55-minute lessons. The workbook is generated from the same chapter data.

Student chapter data: `student-topics.js`. Renderer and interactions: `student-ui.js`. Download: `unit1-design-workbook.md`. The two earlier pilot lessons remain available. Other chapter destinations still show their planned status; these four drafts do not establish complete syllabus coverage.

## Visual learning update (edition 0.4)

The first four student chapters now have different visual walkthroughs: brief-to-evidence decisions, seven design elements, relationships and balance, and grids/thirds/type hierarchy. Each includes prediction, revealed reasoning and a changed example. Fresh library, sport, festival and canteen scenarios support transfer. Glossary terms are alphabetised and linkable; headings support direct section links. Chapter printing separates student and answer copies, and the generated HTML worksheets omit practice answers from the student download entirely. The shared palette and reading proportions match the CS companion.

Run `npm run check` for the original validation plus visual/glossary/worksheet checks, then `npm run build`. These changes do not establish complete syllabus coverage or independent teacher review.

## Chapter 1.5 (edition 0.5)

Choosing hardware and software develops Unit 1 weeks 5–6 across eight scheduled lessons. It covers component roles, primary memory and secondary storage, peripherals, system types, operating systems and compatibility. The recommendation example uses fictional specifications, with a fresh field-interview scenario and explained practice. Both workbook exports now contain five chapters. The original hardware destination also opens the authored chapter. Curriculum reference: SCSA Year 11 2026, printed pages 8–9; independent teacher review remains pending.

## Remaining Unit 1 chapters (edition 0.6)

Chapters 1.6–1.8 develop media formats and spreadsheets (weeks 7–10), responsible communication (weeks 11–12), and the campaign design process (weeks 13–15). All eight Unit 1 reading destinations now have student drafts. Week 16 remains revision in the teaching sequence; no section is claimed independently reviewed or syllabus-complete. Chapter files include resource/source-log CSVs and a design-plan template. Official syllabus, Microsoft lookup documentation, Australian Government copyright guidance and eSafety reporting guidance informed the drafts. The legal content is introductory and decisions requiring clarification are referred for checking. Updates remain local until publication is requested.

## Unit 2 chapters 2.1–2.3 (edition 0.7)

Three student drafts develop file management (weeks 2–4), business networks (weeks 5–7), and privacy/access (weeks 8–9). Week 1 remains an initial project-planning session sequence; Unit 2 application and project chapters are still planned. Unit-aware numbering, references and worksheet exports keep the three Unit 2 chapters separate from Unit 1. The practice templates use fictional records. OAIC guidance informed the introductory privacy material; legal coverage and real organisational obligations require checking. Network rates are ideal arithmetic estimates, not measurements. Maintenance practice uses reviewed reports or approved disposable environments. These local additions have not been published.

## Unit 2 chapters 2.4–2.5 (edition 0.8)

Business communication develops weeks 10–13 with animation, audio export, web authoring, navigation and responsive/collaborative work. The project chapter links to non-consecutive weeks 1, 12, 14 and 15, covering the initial plan, web planning, production and evaluation. Its heading lists the actual weeks rather than an uninterrupted range. All five Unit 2 reading destinations now have drafts. Separate Unit 2 worksheets contain all five chapters. New practice files include communication and project templates plus an offline, self-contained HTML example with working section links, play/pause controls and a narrow/wide layout. Source references include SCSA, MDN, Audacity and Adobe. The published print hotfix remains in place on the public site; local drafts preserve its button-only print binding. New chapters remain unpublished.

## First Year 12 chapters (edition 0.9)

Three Unit 3 drafts develop interface design (weeks 1–4), devices (weeks 5–6), and rights/collaboration/convergence (weeks 6–8). The official 2027 Year 12 PDF was downloaded through its SCSA course-page link and its printed pages 7–9 were read; these chapter references use printed pages 7–8. The renderer and sidebar now distinguish Year 12 and its 2027 source from Year 11. A separate Unit 3 worksheet/answer pair and practice template are generated. Fictional device observations avoid implying current product recommendations, and legal scenarios use official guidance with qualified conclusions. The original interface pilot source remains in the repository; the main interface destination now opens the developed student chapter. No independent teacher sign-off or full syllabus audit is claimed. These additions remain local.

## Remaining Unit 3 chapters (edition 0.10)

Multimedia publication (weeks 8–11 and 14) develops multi-track production, reusable layouts, colour/output decisions and interactive delivery review. Client project planning (weeks 12–15) develops prototype/structured approaches, purposeful representations, Gantt dependencies/resources, change review and evidence-based handover. All five Unit 3 reading destinations now have drafts, and Unit 3 worksheets contain all five. The six-day Gantt and twelve-second timeline are labelled teaching plans, not recorded production outcomes. SCSA 2027 printed pages 8–9, Adobe documentation and W3C media guidance inform the lessons. Independent teacher sign-off and full requirement-level coverage review remain outstanding. These additions are local and unpublished.


## Working edition 0.11
Two Unit 4 managing-data chapters cover recovery/security (weeks 1–3) and web information/standards (weeks 4–6). Includes backup restore comparisons, boundary-test visuals, practice templates and separate student/answer workbooks. This is draft coverage, not independent curriculum sign-off. Remaining Unit 4 areas are planned.

## Working edition 0.12
Adds 40 section-specific reinforcement diagrams across all 20 authored chapters. Each has labelled nodes, a reasoning prompt and an explained answer. Diagrams reflow on narrow screens and are included in printable workbooks; student copies omit answer panels.
