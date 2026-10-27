"""Create real teaching exports. Requires Pillow and an explicit FFmpeg path.
Run from the repository: python scripts/build-production-references.py --ffmpeg PATH
No desktop-editor or printer approval is inferred from these command-line checks.
"""
from pathlib import Path
import argparse, json, shutil, subprocess, wave, array, hashlib, tempfile, zipfile
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parent.parent
PACK=ROOT/'practical-packs/production-workflows'
parser=argparse.ArgumentParser();parser.add_argument('--ffmpeg',required=True);args=parser.parse_args()
ffmpeg=str(Path(args.ffmpeg).resolve())
def run(*items):
    result=subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-y',*map(str,items)],capture_output=True,text=True)
    if result.returncode:raise RuntimeError(result.stderr)
    return result
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def dump(path,data):path.write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8')
for folder in ['source','exports','recovery']:(PACK/folder).mkdir(parents=True,exist_ok=True)
source=ROOT/'practical-packs/media-starter/source'
for name in ['repair-cafe-master.png','scene-01.png','scene-02.png','scene-03.png','narration-reference.wav','ambience-tone.wav','narration-script.txt','reuse-mark.svg']:
    shutil.copy2(source/name,PACK/'source'/name)

image=Image.open(source/'repair-cafe-master.png').convert('RGB').resize((800,500),Image.Resampling.LANCZOS)
metadata={}
for ext,fmt,options in [('png','PNG',{}),('jpg','JPEG',{'quality':75}),('bmp','BMP',{}),('tif','TIFF',{'compression':'tiff_lzw'}),('gif','GIF',{})]:
    file=PACK/'exports'/('campaign-800.'+ext);image.save(file,format=fmt,**options)
    with Image.open(file) as check:
        assert check.size==(800,500)
        metadata[file.name]={'width':800,'height':500,'bytes':file.stat().st_size,'format':check.format,'sha256':digest(file)}

durations=[80,80,90]*8;frames=[]
for n in range(24):
    im=Image.new('RGB',(640,180),'#f7f3e9');d=ImageDraw.Draw(im);x=round(20+580*n/23)
    d.line((20,120,620,120),fill='#285747',width=3);d.ellipse((x-10,85,x+10,105),fill='#285747');d.text((20,20),f'Frame {n+1:02d} / 24',fill='#18322d');frames.append(im)
file=PACK/'exports/motion-24.gif';frames[0].save(file,save_all=True,append_images=frames[1:],duration=durations,loop=0,optimize=False)
with Image.open(file) as check:
    assert check.n_frames==24
    elapsed=0
    for n in range(check.n_frames):check.seek(n);elapsed+=check.info['duration']
    assert elapsed==2000
dump(PACK/'animation-plan.json',{'frames':24,'nominal_fps':12,'duration_ms':durations,'total_ms':2000,'note':'GIF stores centiseconds: 80/80/90 ms per three frames preserves a 2 s loop, not identical frame holds.'})

run('-i',PACK/'source/narration-reference.wav','-i',PACK/'source/ambience-tone.wav','-filter_complex','[0:a]volume=0.85,apad,atrim=duration=12[v];[1:a]volume=0.12,afade=t=out:st=10:d=2,atrim=duration=12[t];[v][t]amix=inputs=2:duration=longest:normalize=0,aresample=44100[a]','-map','[a]','-t','12','-c:a','pcm_s16le',PACK/'exports/mix-reference.wav')
for name,codec,extra in [('mix-reference.mp3','libmp3lame',['-b:a','128k']),('mix-reference.wma','wmav2',['-b:a','128k'])]:
    run('-i',PACK/'exports/mix-reference.wav','-c:a',codec,*extra,PACK/'exports'/name)
with wave.open(str(PACK/'exports/mix-reference.wav'),'rb') as audio:
    assert audio.getnframes()==529200 and audio.getframerate()==44100
    samples=array.array('h',audio.readframes(audio.getnframes()));peak=max(abs(v) for v in samples)
    assert peak<32767

titles=['Repair cafe','Bring a small item','Hall 2 | Saturday 10 am']
with tempfile.TemporaryDirectory(prefix='ait-render-') as temporary:
    temp=Path(temporary)
    font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',32) if Path('C:/Windows/Fonts/arial.ttf').exists() else ImageFont.load_default()
    for i,title in enumerate(titles,1):
        im=Image.open(PACK/'source'/f'scene-0{i}.png').convert('RGB');d=ImageDraw.Draw(im);d.rectangle((0,640,1280,720),fill='#18322d');d.text((36,660),title,font=font,fill='white');im.save(temp/f'card-{i}.png')
    command=[]
    for i in range(1,4):command+=['-loop','1','-framerate','30','-t','4','-i',temp/f'card-{i}.png']
    command+=['-i',PACK/'exports/mix-reference.wav']
    filters=';'.join(f'[{i}:v]scale=1280:720,setsar=1,format=yuv420p,fade=t=in:st=0:d=0.2,fade=t=out:st=3.8:d=0.2[v{i}]' for i in range(3))+';[v0][v1][v2]concat=n=3:v=1:a=0[v]'
    run(*command,'-filter_complex',filters,'-map','[v]','-map','3:a','-t','12','-c:v','libx264','-preset','fast','-crf','24','-c:a','aac','-b:a','128k','-movflags','+faststart',PACK/'exports/campaign-reference.mp4')
    # Decode every frame to establish a real, readable 360-frame output.
    decoded=subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-i',str(PACK/'exports/campaign-reference.mp4'),'-map','0:v:0','-progress','pipe:1','-f','null','-'],capture_output=True,text=True)
    assert decoded.returncode==0
    assert 'frame=360' in decoded.stdout
    for frame,name in [(30,'video-first.png'),(150,'video-middle.png'),(270,'video-last.png')]:
        run('-i',PACK/'exports/campaign-reference.mp4','-vf',f'select=eq(n\\,{frame}),scale=640:360','-frames:v','1',PACK/'exports'/name)

dump(PACK/'timeline-plan.json',{'size':[1280,720],'fps':30,'frames':360,'duration_seconds':12,'scenes':[{'start':i*4,'end':(i+1)*4,'source':f'source/scene-0{i+1}.png','title':title} for i,title in enumerate(titles)],'audio':[{'source':'source/narration-reference.wav','gain':0.85},{'source':'source/ambience-tone.wav','gain':0.12,'fade_out_seconds':[10,12]}],'transition':'0.2-second fades to/from black inside each four-second card; no overlap added','status':'Editable production specification, not a Shotcut-native project file'})

# Exercise actual disposable file backup, replacement and restore in a fresh temp directory.
v1='version,venue,capacity\n1,Hall 2,12\n';v2='version,venue,capacity\n2,Hall 3,16\n'
(PACK/'recovery/approved-v1.csv').write_text(v1,encoding='utf-8');(PACK/'recovery/working-v2.csv').write_text(v2,encoding='utf-8')
with tempfile.TemporaryDirectory(prefix='ait-recovery-') as temporary:
    t=Path(temporary);work=t/'working.csv';shutil.copy2(PACK/'recovery/working-v2.csv',work)
    before=digest(work)
    with zipfile.ZipFile(t/'backup.zip','w') as z:z.write(PACK/'recovery/approved-v1.csv','approved-v1.csv')
    work.write_text('damaged practice copy\n',encoding='utf-8')
    with zipfile.ZipFile(t/'backup.zip') as z:restored=z.read('approved-v1.csv')
    work.write_bytes(restored);assert work.read_text()==v1
    recovery={'working_v2_sha256':before,'restored_sha256':digest(work),'approved_v1_sha256':digest(PACK/'recovery/approved-v1.csv'),'restored_matches_v1':True,'restored_matches_v2':False,'scope':'Actual disposable-file ZIP backup and restore; not File History, OS cleanup, drive optimisation or malware scanning.'}
    shutil.copy2(t/'backup.zip',PACK/'recovery/approved-backup.zip')
dump(PACK/'recovery/observed-restore.json',recovery)
dump(PACK/'verification.json',{'generated_on':'2026-10-27','image_exports':metadata,'animation':{'frames':24,'total_ms':2000},'audio':{'frames':529200,'sample_rate':44100,'seconds':12,'peak_pcm16':peak,'clipped_samples':sum(abs(v)>=32767 for v in samples)},'video':{'decoded_frames':360,'width':1280,'height':720,'fps':30,'seconds':12,'bytes':(PACK/'exports/campaign-reference.mp4').stat().st_size},'recovery':recovery,'producer':'Pillow, Python standard library and FFmpeg command-line exports','native_editor_open_save':'Not performed','print_profile_and_physical_proof':'Not performed'})
print('Generated and decoded image, 24-frame animation, mixed audio and 360-frame video references; disposable restore checked.')
