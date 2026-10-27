import {writeFile,readFile} from 'node:fs/promises';
import {auditAreas} from '../audit-data.js';
import {sources,chapters} from '../curriculum.js';
const fields=['review_date','unit','area','source_year','source_version','printed_pages','source_url','draft_evidence','finding','next_action'];
const rows=auditAreas.map(a=>['2026-10-27',a.unit,a.area,a.sourceYear,sources[a.sourceYear].version,a.pages,sources[a.sourceYear].url,a.topics.map(id=>'https://edugenio.github.io/ait-atar-textbook/#read/'+id).join(' | '),a.status,a.next]);
await writeFile('audits/2026-10-27-area-review.csv','\uFEFF'+[fields,...rows].map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n')+'\r\n');
console.log('Exported 20-area editorial review; this is not a complete nested-item compliance map.');
// Preserve historical checkpoint IDs and their grouped scope; never manufacture
// one-to-one SCSA item coverage from a keyword match or a chapter count.
const csv=await readFile('audits/2026-10-17-requirements.csv','utf8');
const records=[];let row=[],cell='',quoted=false;
for(let i=0;i<csv.length;i++){
 const ch=csv[i];if(ch==='"'){if(quoted&&csv[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}
 else if(ch===','&&!quoted){row.push(cell);cell='';}
 else if(ch==='\n'&&!quoted){row.push(cell.replace(/\r$/,''));records.push(row);row=[];cell='';}else cell+=ch;
}
if(cell||row.length){row.push(cell.replace(/\r$/,''));records.push(row);}
const [header,...oldRows]=records;
const output=oldRows.filter(r=>r.length===header.length).map(r=>{
 const entry=Object.fromEntries(header.map((k,i)=>[k.replace(/^\uFEFF/,''),r[i]]));
 const a=auditAreas.find(a=>a.unit===Number(entry.unit)&&chapters.find(c=>c.id===`u${a.unit}-${a.area}`).area===entry.area);
 if(!a)throw Error('No current area for '+entry.checkpoint);
 return [...r,'2026-10-27','Current chapter/pack inventory reconciliation; grouped checkpoint, not an independent item-level sign-off',a.status,a.next];
});
if(output.length!==185)throw Error('Historical checkpoint inventory changed unexpectedly');
await writeFile('audits/2026-10-27-checkpoint-reconciliation.csv','\uFEFF'+[[...header,'reconciled_on','review_scope','current_area_finding','current_next_action'],...output].map(row=>row.map(v=>'"'+String(v).replace(/^\uFEFF/,'').replaceAll('"','""')+'"').join(',')).join('\r\n')+'\r\n');
console.log('Reconciled 185 historical grouped checkpoints with current area findings; previous review fields retained as dated history.');
