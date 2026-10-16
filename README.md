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
