import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {studentLessons} from '../student-lessons.js';
const code=await readFile('LICENSE-CODE.txt','utf8'),content=await readFile('LICENSE-CONTENT.txt','utf8'),scope=await readFile('LICENSE.md','utf8');
assert(code.startsWith('MIT License'));assert(code.includes('Copyright (c) 2026 Brett Sullivan and contributors'));assert(code.includes('Permission is hereby granted'));assert(content.includes('Attribution 4.0 International'));assert(content.includes('Section 3 -- License Conditions.'));
assert(scope.includes('Educational prose embedded in source files remains under CC BY 4.0'));assert(scope.includes('official SCSA materials'));assert(scope.includes('https://github.com/EdugenIO/ait-atar-textbook'));
for(const file of ['app.js','README.md','licensing.html','CONTRIBUTING.md']){const s=await readFile(file,'utf8');assert(s.includes('CC BY 4.0'),file);assert(s.includes('MIT'),file);}
for(const l of studentLessons){const page=await readFile('student-lessons/'+l.id+'.html','utf8');assert(page.includes(code));assert(page.includes('reuse-notice'));assert(page.includes('href="../licensing.html"'));}
for(const unit of [1,2,3,4])for(const kind of ['student','answer']){const page=await readFile(`unit${unit}-${kind}-workbook.html`,'utf8');assert(page.includes(code));assert(page.includes('CC BY 4.0'));assert(page.includes('https://edugenio.github.io/ait-atar-textbook/licensing.html'));}
const build=await readFile('scripts/build.mjs','utf8');for(const name of ['LICENSE.md','LICENSE-CODE.txt','LICENSE-CONTENT.txt','CONTRIBUTING.md','licensing.html'])assert(build.includes("'"+name+"'"));
console.log('Passed: matching content/software licence split, author/source/third-party scope, 256 standalone notices, all eight offline worksheets and publish-build licence files. Archive notice bytes are checked by package-practical.py.');
