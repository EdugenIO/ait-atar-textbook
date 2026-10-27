# Contributing

Thank you for helping improve the AIT ATAR textbook. The public repository is https://github.com/EdugenIO/ait-atar-textbook and the book is https://edugenio.github.io/ait-atar-textbook/ .

## Corrections and improvements

Open a GitHub issue or pull request with the chapter, lesson URL or resource filename, the problem, a proposed correction and relevant evidence/source. Distinguish the Year 11 syllabus from 2026 and the selected Year 12 syllabus from 2027. Do not submit student records, credentials, real customer data, unreleased school assessments or material you do not have permission to share publicly.

Contributions should be original or appropriately licensed, with third-party sources and notices identified. By submitting a contribution, you offer the original content under CC BY 4.0 and original software under MIT, following [LICENSE.md](LICENSE.md). Educational prose inside JavaScript/HTML remains content; the file extension alone does not decide its licence. Preserve attribution, describe adaptations and retain specific asset notices.

## Local development

Use a current supported Node.js release. The site has no npm package dependencies to install.

```sh
npm run dev
```

Use the URL printed by the development server. For checks and publishing preparation:

```sh
npm run check
npm run build
npm run audit
```

Some checks start a temporary loopback-only response lab. Python is needed for the optional regeneration/ZIP packaging scripts, not for browsing the book. Run `python scripts/package-practical.py` after changing practical resources or licence notices; it adds the current notices to each archive and checks ZIP integrity. Preserve source/output distinctions and any bound teaching fixtures.

Edit `lesson-sequence.js` for explicit lesson readings and model decisions, and the chapter modules for reference explanations. `scripts/export-student-lessons.mjs` generates the standalone lesson files. Keep all 64 × 55-minute lessons per unit and the two separate exam-reserve weeks. Do not present shared scaffolds, supplied model data or a local test as independent subject approval or real learner evidence.

## Publishing

GitHub Actions checks and builds pushes to `main`, then deploys `dist/` to GitHub Pages. Verify that the workflow succeeded and inspect the live result. Retain the licences in the published build, standalone lessons, worksheets and downloadable packs. Contributions and open publication do not replace the school's assessment, moderation or release processes.
