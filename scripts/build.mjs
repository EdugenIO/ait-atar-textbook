import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const name of ['index.html', 'style.css', 'app.js', 'curriculum.js', 'lessons.js', '.nojekyll']) await copyFile(name, `dist/${name}`);
console.log('Static site built in dist/');
