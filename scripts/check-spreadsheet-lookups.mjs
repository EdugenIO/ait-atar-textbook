import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {sessionPage} from '../planner-ui.js';
import {studentPage} from '../student-ui.js';
const path='practical-packs/spreadsheet-lookups/index.html';
assert(studentPage('u1-applications').includes(path));
for(const week of ['09','10'])for(let slot=1;slot<=4;slot++){
  const page=sessionPage(`U1-W${week}-L${slot}`);
  assert(page.includes(path));assert(page.includes('#read/u1-applications'));
  assert(!page.includes('Full activity assets and marking guidance for this session remain to be authored.'));
}
assert(!sessionPage('U1-W08-L1').includes(path));
for(const mode of ['student','answer'])assert((await readFile(`unit1-${mode}-workbook.html`,'utf8')).includes(path));
assert((await readFile('practical-packs/spreadsheet-lookups/campaign-lookups.xlsx')).subarray(0,4).equals(Buffer.from([80,75,3,4])));
console.log('Passed: spreadsheet workbook links in chapter, all eight scheduled sessions and both print worksheets. Run the Python export validator for formula/cache/table checks.');
