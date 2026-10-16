import { mkdir, copyFile } from 'node:fs/promises';
await import('./export-sequence.mjs');
await import('./export-workbook.mjs');
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'style.css', 'app.js', 'curriculum.js', 'lessons.js', 'teaching.js', 'planner-ui.js', 'student-ui.js', 'student-topics.js', 'unit1-design-workbook.md', 'teaching-sequence.md', 'teaching-lessons.csv', 'exam-weeks.csv', '.nojekyll']) await copyFile(name, `dist/${name}`);
console.log('Static site built in dist/');
