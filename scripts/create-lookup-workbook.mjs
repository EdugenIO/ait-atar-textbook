// Run from the repository with the bundled artifact-tool runtime (see audit record).
import fs from 'node:fs/promises';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';
const output=resolve('../tmp/ait-spreadsheet/outputs/01a14356-880a-7200-93f6-d4dc3c99d8ba');
const pack=resolve('practical-packs/spreadsheet-lookups');
await fs.mkdir(output,{recursive:true});await fs.mkdir(pack,{recursive:true});
const wb=Workbook.create();
const names=['Worked lookups','Investigate','Practice','Sort and filter'];
const sheets=Object.fromEntries(names.map(name=>[name,wb.worksheets.add(name)]));
const ink='#18322D',green='#285747',soft='#EDF3ED',amber='#FFF1C2';
function value(s,cell,v){s.getRange(cell).values=[[v]];}
function formula(s,cell,f){s.getRange(cell).formulas=[[f]];}
function heading(s,range){s.getRange(range).format={fill:green,font:{name:'Arial',size:11,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',verticalAlignment:'center',rowHeight:28};}
function base(s,title,context){
  s.showGridLines=false;s.getRange('A1:H30').format={font:{name:'Arial',size:11,color:ink},rowHeight:24,verticalAlignment:'center',wrapText:false};
  for(const [col,width] of Object.entries({A:18,B:25,C:13,D:4,E:18,F:14,G:17,H:24}))s.getRange(`${col}1:${col}30`).format.columnWidth=width;
  value(s,'A2',title);s.getRange('A2').format.font={name:'Arial',size:16,bold:true,color:ink};s.getRange('A2:H2').format.rowHeight=32;
  value(s,'A4',context);s.getRange('A4').format.font={name:'Arial',size:11,italic:true,color:'#53655A'};
  s.tabColor=green;
}
function input(s,range){s.getRange(range).format.fill=amber;}
function calculated(s,range){s.getRange(range).format.fill=soft;s.getRange(range).setNumberFormat('0');}
const worked=sheets['Worked lookups'];
base(worked,'Campaign resources: exact lookups','Fictional classroom data. Amber cells are editable test inputs. Select a result to inspect its formula.');
worked.getRange('D1:D30').format.columnWidth=14;
worked.getRange('A7:C10').values=[['Code','Asset','Quantity'],['P01','Poster',12],['A02','Audio',8],['V03','Video',30]];heading(worked,'A7:C7');
worked.getRange('E7:G11').values=[['Test code','Quantity','What to notice'],['P01',null,'First record'],['A02',null,'Middle record'],['V03',null,'Last record'],['X99',null,'Missing code']];heading(worked,'E7:G7');input(worked,'E8:E11');
formula(worked,'F8','=VLOOKUP(E8,$A$8:$C$10,3,FALSE)');worked.getRange('F8:F11').fillDown();calculated(worked,'F8:F11');
value(worked,'A13','VLOOKUP searches the first column. FALSE requests an exact match.');
value(worked,'A14',"'=VLOOKUP(E8,$A$8:$C$10,3,FALSE)");
value(worked,'A15','Change C8 to 15. Both lookup layouts should update. Restore 12 after testing.');
value(worked,'A17','HLOOKUP across a row');worked.getRange('A17').format.font={name:'Arial',size:14,bold:true,color:ink};
worked.getRange('A18:D19').values=[['Code','P01','A02','V03'],['Quantity',null,null,null]];heading(worked,'A18:D18');
worked.getRange('B19:D19').formulas=[['=C8','=C9','=C10']];calculated(worked,'B19:D19');
worked.getRange('F17:H21').values=[['Test code','Quantity','What to notice'],['P01',null,'Same source'],['A02',null,'Row 2 of range'],['V03',null,'Last column'],['X99',null,'Missing code']];heading(worked,'F17:H17');input(worked,'F18:F21');
formula(worked,'G18','=HLOOKUP(F18,$B$18:$D$19,2,FALSE)');worked.getRange('G18:G21').fillDown();calculated(worked,'G18:G21');
value(worked,'A23','The two #N/A results are deliberate missing-code examples. Missing is not zero.');
value(worked,'A25','Data source: invented campaign quantities; no real people or purchases.');
value(worked,'A27','VLOOKUP reference');value(worked,'B27','https://support.microsoft.com/en-us/excel/functions/vlookup-function');
value(worked,'A28','HLOOKUP reference');value(worked,'B28','https://support.microsoft.com/en-us/excel/functions/hlookup-function');
const investigate=sheets.Investigate;
base(investigate,'Investigate missing and duplicate codes','This table deliberately contains a duplicate. A returned number does not prove a unique match.');
investigate.getRange('A7:C13').values=[['Code','Asset','Quantity'],['P01','Poster',12],['A02','Audio',8],['V03','Video',30],['A02','Audio revision',80],['Z00','Spare cards',0],['P01 ','Trailing space',99]];heading(investigate,'A7:C7');
investigate.getRange('E7:H13').values=[['Test code','Raw lookup','Matches','Interpretation'],['A02',null,null,null],['X99',null,null,null],['Z00',null,null,null],['P01 ',null,null,null],['P01',null,null,null],['',null,null,null]];heading(investigate,'E7:H7');input(investigate,'E8:E13');
formula(investigate,'F8','=VLOOKUP(E8,$A$8:$C$13,3,FALSE)');investigate.getRange('F8:F13').fillDown();
formula(investigate,'G8','=COUNTIFS($A$8:$A$13,E8)');investigate.getRange('G8:G13').fillDown();
formula(investigate,'H8','=IF(E8="","Enter a code",IF(G8=0,"Missing code",IF(G8>1,"Duplicate code","One match")))');investigate.getRange('H8:H13').fillDown();calculated(investigate,'F8:G13');
investigate.getRange('H8:H13').conditionalFormats.add('containsText',{text:'Duplicate',format:{fill:'#FBE5E1',font:{bold:true,color:'#8A241B'}}});
value(investigate,'A16','A02 occurs twice. Exact-match VLOOKUP returns the first matching row, not the sum.');
value(investigate,'A17','P01 and P01 plus a trailing space are different keys. Inspect the formula bar.');
value(investigate,'A18','Z00 has a real quantity of zero. X99 is absent. A blank test needs a code.');
value(investigate,'A20','In your copy: swap both A02 records as whole rows. Predict the returned quantity.');
value(investigate,'A21','Do not delete a duplicate until you have checked which record is authoritative.');
const practice=sheets.Practice;
base(practice,'Independent task: a library campaign','Use the worked sheet for a model. Predictions and results are left blank for your attempt.');
practice.getRange('D1:D30').format.columnWidth=14;
practice.getRange('A7:C11').values=[['Code','Asset','Quantity'],['L01','Library poster',18],['L02','Audio notice',6],['L03','Video teaser',24],['L04','Screen slide',0]];heading(practice,'A7:C7');
practice.getRange('E7:G13').values=[['Test code','Your result','Your prediction'],['L01',null,null],['L02',null,null],['L03',null,null],['L04',null,null],['L99',null,null],['L02 ',null,null]];heading(practice,'E7:G7');input(practice,'E8:G13');
value(practice,'A15','Write an exact VLOOKUP in F8 using A8:C11. Anchor the source, then fill down.');
value(practice,'A16','Explain the real zero, the missing code and the trailing-space test.');
value(practice,'A18','Build the horizontal version');practice.getRange('A18').format.font={name:'Arial',size:14,bold:true,color:ink};
practice.getRange('A19:E20').values=[['Code','L01','L02','L03','L04'],['Quantity',18,6,24,0]];heading(practice,'A19:E19');
practice.getRange('F19:H20').values=[['Test code','Your result','Your prediction'],['L03',null,null]];heading(practice,'F19:H19');input(practice,'F20:H20');
practice.getRange('F20').format.horizontalAlignment='center';
value(practice,'A23','Write HLOOKUP in G20. Use B19:E20 and row index 2. Change F20 to test L04 and L99.');
value(practice,'A25','Explain how the row/column index counts within the selected source range.');
value(practice,'A26','Save your own .xlsx copy. Compare with the guide only after you have tried.');
const sorting=sheets['Sort and filter'];
base(sorting,'Sort complete records and filter a view','Select the table or a cell inside it. Keep Code, Asset, Medium and Quantity together.');
// Distinct sort/filter workflow. The original order is recoverable from the supplied CSV.
sorting.getRange('A7:D13').values=[['Code','Asset','Medium','Quantity'],['P01','Poster','Print',12],['A02','Audio','Online',8],['V03','Video','Online',30],['S04','Social tiles','Online',16],['F05','Flyer','Print',40],['Z00','Spare cards','Print',0]];
sorting.getRange('D1:D30').format.columnWidth=15;
const table=sorting.tables.add('A7:D13',true,'CampaignResources');table.showFilterButton=true;heading(sorting,'A7:D7');
sorting.getRange('F7:G10').values=[['Measure','Value'],['All quantities',null],['Visible quantities',null],['Visible records',null]];heading(sorting,'F7:G7');
formula(sorting,'G8','=SUM(D8:D13)');formula(sorting,'G9','=SUBTOTAL(109,D8:D13)');formula(sorting,'G10','=SUBTOTAL(103,A8:A13)');calculated(sorting,'G8:G10');
value(sorting,'A16','1. Sort Quantity smallest to largest. Check each code still has its original asset and quantity.');
value(sorting,'A17','2. Filter Quantity greater than 10. Compare all quantities with visible quantities and records.');
value(sorting,'A18','3. Clear the filter. Confirm all six records return. Filtering does not delete rows.');
value(sorting,'A20','SUM includes filtered-out values. SUBTOTAL 109/103 exclude filtered-out and manually hidden rows.');
value(sorting,'A21','Use campaign-resources.csv to restore the original data if you break record relationships.');
for(const s of [worked,investigate])s.getRange('F8:F13').conditionalFormats.add('containsErrors',{format:{fill:'#FFF1C2',font:{color:'#7A3F00'}}});
worked.getRange('G18:G21').conditionalFormats.add('containsErrors',{format:{fill:'#FFF1C2',font:{color:'#7A3F00'}}});
wb.recalculate();
const cell=(s,a)=>s.getRange(a).values[0][0];
assert.deepEqual(worked.getRange('F8:F10').values.flat(),[12,8,30]);assert.deepEqual(worked.getRange('G18:G20').values.flat(),[12,8,30]);
assert.equal(cell(investigate,'F8'),8);assert.equal(cell(investigate,'G8'),2);assert.equal(cell(investigate,'H8'),'Duplicate code');
assert.equal(cell(investigate,'F10'),0);assert.equal(cell(investigate,'F11'),99);assert.equal(cell(investigate,'F12'),12);assert.equal(cell(investigate,'H13'),'Enter a code');
assert.deepEqual(sorting.getRange('G8:G10').values.flat(),[106,106,6]);
// Change-input/recalculate/restore tests, rather than checking formula text alone.
value(worked,'C8',15);wb.recalculate();assert.equal(cell(worked,'F8'),15);assert.equal(cell(worked,'G18'),15);value(worked,'C8',12);
value(investigate,'C9',9);wb.recalculate();assert.equal(cell(investigate,'F8'),9);value(investigate,'C9',8);
const duplicateFirst=[...investigate.getRange('A9:C9').values[0]],duplicateSecond=[...investigate.getRange('A11:C11').values[0]];
investigate.getRange('A9:C9').values=[duplicateSecond];investigate.getRange('A11:C11').values=[duplicateFirst];wb.recalculate();assert.equal(cell(investigate,'F8'),80);assert.equal(cell(investigate,'G8'),2);investigate.getRange('A9:C9').values=[duplicateFirst];investigate.getRange('A11:C11').values=[duplicateSecond];
const original=sorting.getRange('A8:D13').values.map(row=>[...row]);
sorting.getRange('A8:D13').values=[...original].sort((a,b)=>a[3]-b[3]);wb.recalculate();assert.equal(cell(sorting,'A8'),'Z00');assert.equal(cell(sorting,'G8'),106);assert.equal(cell(sorting,'G9'),106);sorting.getRange('A8:D13').values=original;
// Check the independent solution in memory, then clear it before delivering the practice sheet.
formula(practice,'F8','=VLOOKUP(E8,$A$8:$C$11,3,FALSE)');practice.getRange('F8:F13').fillDown();formula(practice,'G20','=HLOOKUP(F20,$B$19:$E$20,2,FALSE)');wb.recalculate();
assert.deepEqual(practice.getRange('F8:F11').values.flat(),[18,6,24,0]);assert.equal(cell(practice,'G20'),24);
practice.getRange('F8:F13').clear({applyTo:'contents'});practice.getRange('G20').clear({applyTo:'contents'});
wb.recalculate();
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!',options:{useRegex:true,maxResults:30},summary:'Only deliberate missing-code #N/A results should remain',maxChars:3000});
const actualErrors=errors.ndjson.split('\n').filter(Boolean).map(line=>JSON.parse(line)).filter(row=>row.kind==='match'&&row.formula);
assert.deepEqual(actualErrors.map(row=>`${row.sheet}!${row.address}:${row.value}`).sort(),['Worked lookups!F11:#N/A','Worked lookups!G21:#N/A','Investigate!F9:#N/A','Investigate!F13:#N/A'].sort());
for(const name of names){const image=await wb.render({sheetName:name,range:'A1:H29',scale:1,format:'png'});await fs.writeFile(resolve(output,name.replaceAll(' ','-')+'.png'),new Uint8Array(await image.arrayBuffer()));}
const file=await SpreadsheetFile.exportXlsx(wb);await file.save(resolve(output,'campaign-lookups.xlsx'));await fs.copyFile(resolve(output,'campaign-lookups.xlsx'),resolve(pack,'campaign-lookups.xlsx'));
await fs.writeFile(resolve(pack,'campaign-resources.csv'),'Code,Asset,Medium,Quantity\n'+original.map(row=>row.join(',')).join('\n')+'\n');
await fs.writeFile(resolve(output,'verification.json'),JSON.stringify({workedVertical:[12,8,30],workedHorizontal:[12,8,30],duplicateFirstMatch:8,duplicateMatches:2,realZero:0,trailingSpaceQuantity:99,sourceChangeTestsPassed:true,wholeRecordReorderPassed:true,allQuantity:106,filteredExpectedQuantity:98,filteredExpectedCount:4,independentExpected:[18,6,24,0],practiceOutputsCleared:true,nativeExcelFilterExecution:'Not performed; exported table supplies filter controls for classroom use.'},null,2));
console.log('Exported workbook; formula recalculation, changed inputs and whole-record reorder checks passed. Practice outputs are blank.');
// An error-cell exercise is successful only after the exact deliberate-error allow-list passes.
process.exitCode=0;
