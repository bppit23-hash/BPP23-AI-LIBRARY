/* BPP23 v2.4 community panel. No personal data is collected. */
(()=>{'use strict';
const GOOGLE_FORM_URL=''; // Paste a verified published Google Forms responder URL here after creation.
const init=()=>{
 const main=document.querySelector('main'), cards=document.getElementById('cards');
 if(!main||!cards||document.getElementById('bpp24-panel'))return;
 const storageKey='bpp23-library-v24-device', sessionKey='bpp23-library-v24-session';
 let data={visits:0,copies:{}};
 try{const v=JSON.parse(localStorage.getItem(storageKey)||'{}'); if(v&&typeof v==='object')data={visits:Number(v.visits)||0,copies:v.copies&&typeof v.copies==='object'?v.copies:{}}}catch(e){}
 try{if(!sessionStorage.getItem(sessionKey)){data.visits++;sessionStorage.setItem(sessionKey,'1');save()}}catch(e){}
 function save(){try{localStorage.setItem(storageKey,JSON.stringify(data))}catch(e){}}
 const panel=document.createElement('section');panel.id='bpp24-panel';panel.className='bpp24-panel';
 panel.innerHTML='<div class="bpp24-head"><div><span class="bpp24-eyebrow">💜 เรียนรู้ไปด้วยกัน • v2.4</span><h2>ชุมชนผู้ใช้คลัง Prompt</h2><p>ทดลองใช้ แบ่งปันประสบการณ์ และเสนอหัวข้อที่อยากให้พัฒนาเพิ่มเติม</p></div></div><div class="bpp24-metrics" aria-label="สถิติบนอุปกรณ์นี้"><div><span>เปิดใช้จากเบราว์เซอร์นี้</span><strong id="bpp24-visits">—</strong><small>ครั้ง (นับตามรอบการเปิดใช้งาน)</small></div><div><span>คัดลอก Prompt บนอุปกรณ์นี้</span><strong id="bpp24-copies">—</strong><small>ครั้งที่คัดลอกสำเร็จ</small></div></div><div class="bpp24-device"><strong>⭐ Prompt ที่ใช้บ่อยบนอุปกรณ์นี้</strong><ol id="bpp24-top"></ol><small>ข้อมูลนี้เก็บเฉพาะในเบราว์เซอร์ ไม่ใช่ยอดรวมผู้เข้าชมทั้งหน่วย และจะหายเมื่อเคลียร์ข้อมูลเว็บไซต์</small></div><form id="bpp24-form"><h3>💬 เสนอ Prompt ใหม่ / ข้อเสนอแนะ</h3><label for="bpp24-type">ประเภทข้อเสนอ</label><select id="bpp24-type"><option>อยากได้ Prompt ใหม่</option><option>เสนอปรับปรุง Prompt เดิม</option><option>เล่าตัวอย่างการนำไปใช้จริง</option><option>แจ้งปัญหาเว็บไซต์</option></select><label for="bpp24-topic">รายละเอียดข้อเสนอ</label><textarea id="bpp24-topic" rows="3" minlength="8" maxlength="1500" required placeholder="เช่น อยากได้ Prompt สำหรับสรุปรายงานประจำวัน..."></textarea><button type="submit" id="bpp24-send">📋 คัดลอกข้อเสนอแนะ</button><p class="bpp24-hint" id="bpp24-status" role="status">กำลังเตรียมเชื่อม Google Forms • ระหว่างนี้คัดลอกข้อความข้อเสนอไว้ได้โดยไม่ต้องเข้าสู่ระบบ GitHub • อย่าใส่ข้อมูลลับหรือข้อมูลส่วนบุคคล</p></form><p class="bpp24-pending">📊 สถิติรวมของทุกคนและอันดับ Prompt ยอดนิยมทั่วหน่วย: ยังไม่เปิดใช้งาน ต้องเชื่อมบริการจัดเก็บสถิติกลางก่อน</p>';
 const anchor=document.querySelector('.bpp-community')||document.querySelector('main .notice');if(anchor)anchor.before(panel);else main.append(panel);
 const visitEl=document.getElementById('bpp24-visits'),copiesEl=document.getElementById('bpp24-copies'),topEl=document.getElementById('bpp24-top');
 if(GOOGLE_FORM_URL && /^https:\/\/docs\.google\.com\/forms\//.test(GOOGLE_FORM_URL)){document.getElementById('bpp24-send').textContent='📨 เปิด Google Forms เพื่อส่งข้อเสนอ';document.getElementById('bpp24-status').textContent='แบบฟอร์มรับข้อเสนอแนะเปิดให้ใช้งานแล้ว • ไม่ต้องเข้าสู่ระบบ GitHub'}
 function refresh(){
  visitEl.textContent=data.visits.toLocaleString('th-TH');
  copiesEl.textContent=Object.values(data.copies).reduce((a,b)=>a+(Number(b)||0),0).toLocaleString('th-TH');
  topEl.replaceChildren();
  const top=Object.entries(data.copies).filter(([,n])=>Number(n)>0).sort((a,b)=>b[1]-a[1]).slice(0,3);
  if(!top.length){const li=document.createElement('li');li.textContent='ยังไม่มีประวัติคัดลอกบนอุปกรณ์นี้';topEl.append(li)}
  for(const [name,n] of top){const li=document.createElement('li');li.textContent=name+' — '+Number(n).toLocaleString('th-TH')+' ครั้ง';topEl.append(li)}
 }
 refresh();
 cards.addEventListener('click',e=>{
  const button=e.target.closest('button.copy');if(!button)return;
  const article=button.closest('article.card'),name=article?.querySelector('h2')?.textContent?.trim();if(!name)return;
  setTimeout(()=>{if(button.textContent.includes('คัดลอกแล้ว')){data.copies[name]=(Number(data.copies[name])||0)+1;save();refresh()}},250);
 });
 document.getElementById('bpp24-form').addEventListener('submit',e=>{
  e.preventDefault();const type=document.getElementById('bpp24-type').value,details=document.getElementById('bpp24-topic').value.trim();
  if(details.length<8){document.getElementById('bpp24-topic').reportValidity();return}
  const status=document.getElementById('bpp24-status');
  if(GOOGLE_FORM_URL && /^https:\/\/docs\.google\.com\/forms\//.test(GOOGLE_FORM_URL)){
   status.textContent='เปิด Google Forms แล้ว กรุณากรอกและกดส่งในแบบฟอร์ม';
   window.open(GOOGLE_FORM_URL,'_blank','noopener,noreferrer');
  }else{
   const content='ประเภทข้อเสนอ: '+type+'\n\nรายละเอียดข้อเสนอ:\n'+details;
   const btn=document.getElementById('bpp24-send');
   const copy=async()=>{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(content);return true}const t=document.createElement('textarea');t.value=content;document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();return ok};
   copy().then(ok=>{status.textContent=ok?'✓ คัดลอกข้อเสนอแล้ว — โปรดเก็บไว้ส่งเมื่อเปิด Google Forms':'คัดลอกอัตโนมัติไม่สำเร็จ กรุณาเลือกข้อความและคัดลอกเอง';btn.textContent=ok?'✓ คัดลอกแล้ว':'📋 คัดลอกข้อเสนอแนะ'}).catch(()=>{status.textContent='ไม่สามารถคัดลอกได้ โปรดลองอีกครั้ง'});
  }
 });
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();