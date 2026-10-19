(()=>{
 const $=id=>document.getElementById(id);
 const reference=Array.from({length:24},(_,i)=>Math.round((40+i*500/23)*100)/100);
 let positions=[...reference],elapsed=0,running=false,start=0,animationId=null;
 $('positions').value=positions.join(', ');
 function status(text){$('result').textContent=text;}
 function controls(){$('play').disabled=running;$('pause').disabled=!running;}
 function draw(){
  const frame=Math.min(23,Math.floor(elapsed*12));
  const x=$('mode').value==='frames'?positions[frame]:positions[0]+(positions[23]-positions[0])*Math.min(1,elapsed/2);
  $('wheel').setAttribute('transform','translate('+x+' 115)');
  $('stage').setAttribute('aria-label','Wheel at x '+x.toFixed(2)+' at '+elapsed.toFixed(2)+' seconds');
  $('readout').textContent='Time '+elapsed.toFixed(2)+' s · frame '+(frame+1)+' of 24 · x '+x.toFixed(2);
  $('seek').value=String(elapsed);controls();
 }
 function stop(){running=false;if(animationId!==null)cancelAnimationFrame(animationId);animationId=null;controls();}
 function parsePositions(){
  const values=$('positions').value.split(',').map(v=>v.trim());
  if(values.length!==24||values.some(v=>v===''||!Number.isFinite(Number(v))||Number(v)<0||Number(v)>600)){status('Enter exactly 24 numeric positions from 0 to 600. Playback has not started.');return null;}
  return values.map(Number);
 }
 function stationary(){return $('mode').value==='tween'?positions[0]===positions[23]:positions.every(x=>x===positions[0]);}
 function tick(now){
  animationId=null;if(!running)return;elapsed=Math.min(2,(now-start)/1000);draw();
  if(elapsed>=2){running=false;controls();status(stationary()?'Finished the stationary example: time advanced, but every displayed position was the same. Change positions or load the moving reference.':'Finished two-second preview. Play starts again; Return to start or use the slider to inspect frames.');}
  else animationId=requestAnimationFrame(tick);
 }
 $('apply').onclick=()=>{stop();const values=parsePositions();if(!values)return;positions=values;elapsed=0;draw();status(stationary()?'Positions applied: this example is stationary. Load the reference or change positions to see movement.':'Positions applied. Press Play to preview the movement.');};
 $('positions').oninput=()=>{stop();status('Positions edited. Apply positions to inspect the first frame, or press Play to apply them and run.');};
 $('reference').onclick=()=>{stop();positions=[...reference];$('positions').value=positions.join(', ');elapsed=0;draw();status('Moving reference loaded: x 40 to 540. Press Play.');};
 $('static').onclick=()=>{stop();positions=Array(24).fill(40);$('positions').value=positions.join(', ');elapsed=0;draw();status('Stationary exercise loaded: all 24 positions are 40. Play advances time without moving the wheel.');};
 $('play').onclick=()=>{
  if(running)return;const values=parsePositions();if(!values)return;
  if(values.some((x,i)=>x!==positions[i])){positions=values;elapsed=0;}
  if(elapsed>=2)elapsed=0;
  running=true;start=performance.now()-elapsed*1000;controls();
  status(stationary()?'Playing the stationary example: the clock advances but the wheel stays at one position.':'Playing '+($('mode').value==='frames'?'frame-by-frame motion':'the linear tween')+'. Pause or drag the time slider to inspect.');
  animationId=requestAnimationFrame(tick);
 };
 $('pause').onclick=()=>{stop();status('Paused at '+elapsed.toFixed(2)+' seconds. Play resumes; the slider lets you inspect another time.');};
 $('reset').onclick=()=>{stop();elapsed=0;draw();status('Returned to the first frame. Your edited positions are retained. Press Play to start again.');};
 $('mode').onchange=()=>{stop();elapsed=0;draw();status('Motion method changed. Press Play to compare it, or use the time slider.');};
 $('seek').oninput=()=>{stop();elapsed=Math.max(0,Math.min(2,Number($('seek').value)||0));draw();status('Previewing '+elapsed.toFixed(2)+' seconds. Play resumes from this point.');};
 $('export').onclick=()=>{
  const svg=new XMLSerializer().serializeToString($('stage'));
  const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));const link=document.createElement('a');link.href=url;link.download='animation-current-frame.svg';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  status('Current SVG frame download requested. This exports one still frame, not a video or the whole animation.');
 };
 draw();status('Ready: moving reference loaded. Press Play to animate, or load the stationary exercise to compare.');
})();
