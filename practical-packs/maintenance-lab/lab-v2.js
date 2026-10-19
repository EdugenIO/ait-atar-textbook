const $=id=>document.getElementById(id);
let state;
let activeResult='export-result';
const hints={
 'cleanup-result':'Choose categories, then preview the cleanup here.',
 'drive-result':'Choose a drive and operation, then apply them to the model.',
 'protection-result':'Run the scan before quarantining a flagged sample.',
 'recovery-result':'Remove the fictional working copy to practise restoring the older backup.',
 'export-result':'Download your log, or use the text copy below.'
};
function draw(){
 $('space').textContent='Virtual free space: '+state.free+' MB.';
 $('record').textContent='Working record: '+(state.record||'missing')+'. Backup: Booking version 1.';
 $('log').replaceChildren(...state.log.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 $('log-copy').value=state.log.map((text,i)=>(i+1)+'. '+text).join('\n');
}
function message(text){$(activeResult).textContent=text;$('result').textContent='Latest activity: '+text;state.log.push(text);draw();}
function reset(){
 state={free:2000,cleaned:[],scanned:false,quarantined:false,record:'Booking version 2',log:[]};
 for(const id of ['temp','cache','downloads','confirm'])$(id).checked=false;
 $('drive').value='ssd';$('action').value='defrag';$('quarantine').disabled=true;
 for(const [id,text] of Object.entries(hints))$(id).textContent=text;
 activeResult='export-result';message('Fictional model reset. All choices and records are back to their starting state. No computer files were changed.');
}
function on(id,result,handler){$(id).onclick=()=>{activeResult=result;handler();};}
function selection(){return ['temp','cache','downloads'].filter(id=>$(id).checked);}
on('inspect','cleanup-result',()=>{
 const items=selection();
 message(items.includes('downloads')?'Blocked in this scenario: Downloads contains a needed source and has no cleanup approval. Deselect it.':'Preview: '+(items.length?items.join(', '):'nothing selected')+'. Predicted reclaim: '+items.filter(i=>!state.cleaned.includes(i)).reduce((n,i)=>n+({temp:300,cache:200}[i]||0),0)+' MB. Review before applying.');
});
on('clean','cleanup-result',()=>{
 const items=selection();
 if(!items.length)return message('Choose a category first.');
 if(items.includes('downloads'))return message('Cleanup blocked: Downloads approval is missing. The model preserves it.');
 if(!$('confirm').checked)return message('Review the consequences and confirm before applying.');
 let reclaimed=0;for(const id of items){if(!state.cleaned.includes(id)){reclaimed+=id==='temp'?300:200;state.cleaned.push(id);}}
 state.free+=reclaimed;$('confirm').checked=false;
 message('Virtual cleanup reclaimed '+reclaimed+' MB. Free space is '+state.free+' MB. Cache removal may require content to reload.');
});
for(const id of ['temp','cache','downloads'])$(id).addEventListener('change',()=>{activeResult='cleanup-result';$('confirm').checked=false;message('Selection changed. Preview these categories and review the consequences before confirming.');});
on('optimise','drive-result',()=>{
 const drive=$('drive').value,operation=$('action').value;
 message(drive==='ssd'&&operation==='defrag'?'Not applied: traditional HDD defragmentation is the wrong choice for this SSD scenario. Use the OS drive-aware operation.':drive==='hdd'&&operation==='defrag'?'Simulated HDD defragmentation completed. This does not add storage capacity or prove every performance problem is fixed.':'Simulated drive-aware optimisation completed. Actual OS action depends on drive type and its reported state.');
});
on('scan','protection-result',()=>{
 state.scanned=true;$('quarantine').disabled=state.quarantined;
 message(state.quarantined?'Virtual scan: flagged sample remains quarantined. This is not a guarantee that a real system is safe.':'Virtual scan found fictional suspicious-attachment.sample. Review then quarantine the sample. No executable malware is supplied.');
});
on('quarantine','protection-result',()=>{if(!state.scanned)return;state.quarantined=true;$('quarantine').disabled=true;message('Flagged sample moved to virtual quarantine. Keep protection current and investigate; a scan is not complete security.');});
on('delete-record','recovery-result',()=>{state.record=null;message('Virtual working record removed. The independent backup still contains version 1.');});
on('restore','recovery-result',()=>{if(state.record)return message('A working record exists. Do not overwrite it without review; first use the remove-working-copy step for this exercise.');state.record='Booking version 1';message('Restored Booking version 1 from the backup. Version 2 changes are not recovered by this older copy.');});
on('export','export-result',()=>{
 message('Your current operation log is ready. A download has been requested; if your browser blocks it, use View or copy your current log below.');
 const blob=new Blob([$('log-copy').value],{type:'text/plain;charset=utf-8'});
 const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='maintenance-practice-log.txt';link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
});
$('reset').onclick=reset;
reset();
