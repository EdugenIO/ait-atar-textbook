from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageCms
import json
root=Path(__file__).resolve().parent.parent/'practical-packs/publication-workflow'
root.mkdir(exist_ok=True)
profile=ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB')).tobytes()
fontfile='C:/Windows/Fonts/arial.ttf'
boldfile='C:/Windows/Fonts/arialbd.ttf'
def font(size,bold=False):return ImageFont.truetype(boldfile if bold else fontfile,size)
canvas=Image.new('RGB',(2592,1848),'#173f35');d=ImageDraw.Draw(canvas)
texts=[(180,180,'MAKE + REPAIR',150,True,'#ffffff'),(180,390,'Community workshop',90,False,'#ffffff'),(180,680,'4 May 2027 · 10 am',95,True,'#173f35'),(180,830,'Hall 2 · Bring one small item',75,False,'#173f35'),(180,1150,'Ask at the library to join',78,True,'#ffffff')]
d.rectangle((110,580,2480,1050),fill='#e9ecd4')
for x,y,text,size,bold,colour in texts:d.text((x,y),text,font=font(size,bold),fill=colour)
for i,c in enumerate(['#e9ecd4','#df8c4f','#79b6bb','#b2a2cd']):d.rectangle((180+i*380,1460,460+i*380,1650),fill=c)
canvas.save(root/'master-srgb.png',icc_profile=profile,dpi=(304.8,304.8))
trim=canvas.crop((36,36,2556,1812))
screen=trim.resize((1260,888),Image.Resampling.LANCZOS)
screen.save(root/'screen-reference.jpg',quality=85,icc_profile=profile)
screen.save(root/'untagged-comparison.png')
trim.resize((420,296),Image.Resampling.LANCZOS).save(root/'low-resolution.png',icc_profile=profile)
svgtexts=''.join(f'<text x="{x}" y="{y+size}" font-size="{size}" font-weight="{700 if bold else 400}" fill="{colour}">{text.replace("&","&amp;")}</text>' for x,y,text,size,bold,colour in texts)
swatches=''.join(f'<rect x="{180+i*380}" y="1460" width="280" height="190" fill="{c}"/>' for i,c in enumerate(['#e9ecd4','#df8c4f','#79b6bb','#b2a2cd']))
(root/'editable-master.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" width="216mm" height="154mm" viewBox="0 0 2592 1848"><title>Editable workshop artwork with 3 mm bleed</title><desc>Workshop title, session information, joining instruction and four colour swatches. The canvas includes bleed beyond an A5 landscape trim.</desc><rect width="2592" height="1848" fill="#173f35"/><rect x="110" y="580" width="2370" height="470" fill="#e9ecd4"/><g font-family="Arial,sans-serif">{svgtexts}{swatches}</g></svg>',encoding='utf-8')
evidence={}
for name in ['master-srgb.png','screen-reference.jpg','untagged-comparison.png','low-resolution.png']:
 with Image.open(root/name) as im:
  icc=im.info.get('icc_profile'); evidence[name]={'pixels':list(im.size),'mode':im.mode,'bytes':(root/name).stat().st_size,'embedded_profile':ImageCms.getProfileDescription(ImageCms.ImageCmsProfile(__import__('io').BytesIO(icc))).strip() if icc else 'none','profile_bytes':len(icc) if icc else 0}
assert evidence['screen-reference.jpg']['bytes']<=500000
(root/'asset-evidence.json').write_text(json.dumps(evidence,indent=2),encoding='utf-8')
print('Created editable SVG, tagged raster master, screen reference, untagged comparison and low-resolution sample; inspected ICC metadata.')
