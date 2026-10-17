import { mkdir, copyFile } from 'node:fs/promises';
await import('./export-sequence.mjs');
await import('./export-workbook.mjs');
await import('./export-print-workbooks.mjs');
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'style.css', 'app.js', 'curriculum.js', 'lessons.js', 'teaching.js', 'planner-ui.js', 'campaign-resources.csv', 'campaign-source-log.csv', 'campaign-design-plan.md', 'unit2-business-templates.md', 'unit2-web-example.html', 'unit3-first-chapters.js', 'unit3-practice-templates.md', 'unit3-student-workbook.html', 'unit3-answer-workbook.html', 'unit2-final-chapters.js', 'unit2-communication-practice.md', 'unit2-project-practice.md', 'unit2-first-chapters.js', 'unit2-student-workbook.html', 'unit2-answer-workbook.html', 'unit1-next-chapters.js', 'chapter-hardware.js', 'learning-tools.js', 'learning.css', 'unit1-student-workbook.html', 'unit1-answer-workbook.html', 'student-ui.js', 'student-topics.js', 'unit1-design-workbook.md', 'teaching-sequence.md', 'teaching-lessons.csv', 'exam-weeks.csv', '.nojekyll']) await copyFile(name, `dist/${name}`);
console.log('Static site built in dist/');
