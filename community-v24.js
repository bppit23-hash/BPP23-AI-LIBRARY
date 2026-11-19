/* BPP23 v2.4 community panel. No personal data is collected. */
(()=>{'use strict';
const GOOGLE_FORM_URL='https://docs.google.com/forms/d/e/1FAIpQLSdivqlx6rpPAsOmy9wN002UpRsdC0m3xBa31lkZcKN_e5esPA/viewform'; // Supplied public responder link; account settings must permit external responses.
const init=()=>{
 const main=document.querySelector('main'), cards=document.getElementById('cards');
 if(!main||!cards||document.getElementById('bpp24-panel'))return;
 const storageKey='bpp23-library-v24-device', sessionKey='bpp23-library-v24-session';
 let data={visits:0,copies:{}};
 try{const v=JSON.parse(localStorage.getItem(storageKey)||'{}'); if(v&&typeof v==='object')data={visits:Number(v.visits)||0,copies:v.copies&&typeof v.copies==='object'?v.copies:{}}}catch(e){}
 try{if(!sessionStorage.getItem(sessionKey)){data.visits++;sessionStorage.setItem(sessionKey,'1');save()}}catch(e){}
 function save(){try{localStorage.setItem(storageKey,JSON.stringify(data))}catch(e){}}
 const panel=document.createElement('section');panel.id='bpp24-panel';panel.className='bpp24-panel';
 panel.innerHTML='<div class="bpp24-head"><div><span class="bpp24-eyebrow">💜 เรียนรู้ไปด้วยกัน • v2.4</span><h2>ชุมชนผู้ใช้คลัง Prompt</h2><p>ทดลองใช้ แบ่งปันประสบการณ์ และเสนอหัวข้อที่อยากให้พัฒนาเพิ่มเติม</p></div></div><div class="bpp24-metrics" aria-label="สถิติบนอุปกรณ์นี้"><div><span>เปิดใช้จากเบราว์เซอร์นี้</span><strong id="bpp24-visits">—</strong><small>ครั้ง (นับตามรอบการเปิดใช้งาน)</small></div><div><span>คัดลอก Prompt บนอุปกรณ์นี้</span><strong id="bpp24-copies">—</strong><small>ครั้งที่คัดลอกสำเร็จ</small></div></div><div class="bpp24-device"><strong>⭐ Prompt ที่ใช้บ่อยบนอุปกรณ์นี้</strong><ol id="bpp24-top"></ol><small>ข้อมูลนี้เก็บเฉพาะในเบราว์เซอร์ ไม่ใช่ยอดรวมผู้เข้าชมทั้งหน่วย และจะหายเมื่อเคลียร์ข้อมูลเว็บไซต์</small></div><section id="bpp24-feedback"><h3>💬 เสนอ Prompt ใหม่ / ข้อเสนอแนะ</h3><p>ร่วมเสนอหัวข้อ Prompt ใหม่ ปรับปรุงคำสั่งเดิม หรือแบ่งปันประสบการณ์ใช้งาน ผ่าน Google Forms โดยไม่ต้องสมัคร GitHub</p><a class="bpp24-form-link" id="bpp24-send" href="https://docs.google.com/forms/d/e/1FAIpQLSdivqlx6rpPAsOmy9wN002UpRsdC0m3xBa31lkZcKN_e5esPA/viewform" target="_blank" rel="noopener noreferrer">📨 เปิด Google Forms เพื่อส่งข้อเสนอแนะ</a><p class="bpp24-hint">กรอกข้อมูลและกดส่งในหน้า Google Forms • ไม่ควรใส่ข้อมูลลับหรือข้อมูลส่วนบุคคล • การเข้าสู่ระบบ Google ขึ้นกับการตั้งค่าของเจ้าของแบบฟอร์ม</p></section><p class="bpp24-pending">📊 สถิติรวมของทุกคนและอันดับ Prompt ยอดนิยมทั่วหน่วย: ยังไม่เปิดใช้งาน ต้องเชื่อมบริการจัดเก็บสถิติกลางก่อน</p>';
 const anchor=document.querySelector('.bpp-community')||document.querySelector('main .notice');if(anchor)anchor.before(panel);else main.append(panel);
 const visitEl=document.getElementById('bpp24-visits'),copiesEl=document.getElementById('bpp24-copies'),topEl=document.getElementById('bpp24-top');

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

};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();