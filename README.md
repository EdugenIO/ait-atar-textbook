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
