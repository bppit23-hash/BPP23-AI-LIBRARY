/* BPP23 AI Prompt Library v2.1: school product promotion add-on */
(() => {
  const rules = 'ข้อกำหนด: ใช้เฉพาะข้อมูลที่ได้รับอนุญาต คงสี รูปทรง ฉลาก และจำนวนสินค้าจริง ไม่แต่งราคา สรรพคุณ มาตรฐานหรือยอดขาย ไม่เผยแพร่ข้อมูลหรือภาพนักเรียนโดยไม่มีสิทธิและความยินยอมที่เหมาะสม ตรวจสอบข้อมูลก่อนเผยแพร่';
  const data = [
    ['แต่งภาพสินค้าจริงให้พร้อมจำหน่าย','ปรับฉาก แสง และเงา โดยรักษารายละเอียดสินค้า','ช่วยเขียน Prompt แต่งภาพผลิตภัณฑ์โรงเรียน ตชด. จากภาพจริง ให้ดูสะอาด แสงนุ่ม ฉากเรียบ โดยคงสี รูปทรง ฉลาก และจำนวนสินค้าเดิม\nสินค้า: [ระบุ] ภาพต้นฉบับ: [แนบ]'],
    ['ออกแบบโปสเตอร์ประชาสัมพันธ์สินค้า','สร้างโปสเตอร์พร้อมข้อความที่ตรวจสอบแล้ว','ช่วยร่างโปสเตอร์ประชาสัมพันธ์ผลิตภัณฑ์โรงเรียน ตชด. ขนาด 4:5 มีชื่อสินค้า จุดเด่นที่ยืนยันแล้ว และช่องทางติดต่อที่อนุญาต\nข้อมูล: [ระบุ]'],
    ['เขียนข้อความแนะนำสินค้าสำหรับ Facebook และ LINE','สร้างข้อความสุภาพ ไม่กล่าวอ้างเกินจริง','ช่วยเขียนข้อความแนะนำผลิตภัณฑ์โรงเรียน ตชด. สำหรับ Facebook และ LINE โดยใช้เฉพาะข้อมูลที่ให้ ไม่แต่งราคาและสรรพคุณ\nข้อมูล: [ระบุ]'],
    ['จัดทำแค็ตตาล็อกผลิตภัณฑ์','จัดหมวดสินค้าและข้อมูลที่ตรวจสอบได้','ช่วยวางแค็ตตาล็อกผลิตภัณฑ์โรงเรียน ตชด. พร้อมชื่อสินค้า ภาพจริง รายละเอียด ราคาเฉพาะที่ยืนยัน และช่องทางติดต่อ\nรายการ: [ระบุ]'],
    ['สร้างสตอรีบอร์ดวิดีโอสินค้า 30 วินาที','นำเสนอสินค้าและกิจกรรมฝึกอาชีพอย่างเหมาะสม','ช่วยวางสตอรีบอร์ดวิดีโอ 30 วินาที แนะนำผลิตภัณฑ์โรงเรียน ตชด. ระบุภาพ เสียง ข้อความบนจอ และวิธีตัดต่อ ไม่สร้างเหตุการณ์หรือคำรับรองที่ไม่จริง\nข้อมูล: [ระบุ]'],
    ['นำเสนอชุดของขวัญและผลงานฝึกอาชีพ','ออกแบบแนวคิดชุดสินค้าและเล่าเรื่องการเรียนรู้','ช่วยเสนอแนวคิดจัดชุดของขวัญจากผลิตภัณฑ์จริงของโรงเรียน ตชด. พร้อมข้อความเล่าเรื่องกิจกรรมฝึกอาชีพ แยกแนวคิดจำลองจากสินค้าที่มีจริง\nสินค้า: [ระบุ]']
  ];
  const host=document.getElementById('cards');
  if(!host) return;
  const section=document.createElement('section');
  section.id='bpp23-school-products';
  section.innerHTML='<h2 style="margin:1.5rem 0">🏫 ผลิตภัณฑ์โรงเรียน ตชด. — เพิ่มใหม่ v2.1</h2><p>6 คำสั่งใหม่ เลือก Prompt พื้นฐานหรือ Master Prompt ฉบับละเอียด</p>';
  const cards=[];
  for(const [title,desc,basic] of data){
    const article=document.createElement('article'); article.className='card';
    const label=document.createElement('div');label.className='category';label.textContent='ผลิตภัณฑ์โรงเรียน ตชด.';
    const heading=document.createElement('h2');heading.textContent=title;
    const p=document.createElement('p');p.className='desc';p.textContent=desc;
    const levels=document.createElement('div');levels.className='levels';
    const prompt=document.createElement('div');prompt.className='prompt';
    const copy=document.createElement('button');copy.className='copy';
    const master='บทบาท: ผู้เชี่ยวชาญสื่อประชาสัมพันธ์ผลิตภัณฑ์โรงเรียนตำรวจตระเวนชายแดน\nภารกิจ: '+title+'\nข้อมูลนำเข้า: [โรงเรียน] [ชื่อสินค้า] [ภาพที่ได้รับอนุญาต] [รายละเอียดที่ยืนยันแล้ว] [กลุ่มเป้าหมาย] [ช่องทางเผยแพร่]\n'+rules+'\nขั้นตอน: 1. ตรวจข้อมูลและระบุส่วนที่รอยืนยัน 2. เสนอแนวคิดที่เหมาะกับกลุ่มเป้าหมาย 3. จัดทำผลงานพร้อมข้อความและแนวทางภาพ 4. สรุปรายการตรวจสอบก่อนเผยแพร่\nผลลัพธ์: ผลงานพร้อมใช้และรายการตรวจทาน\nข้อมูลต้นฉบับ: [ใส่ข้อมูลที่ได้รับอนุญาต]';
    let mode='basic';
    function setMode(m){mode=m;prompt.textContent=m==='basic'?basic:master;levels.querySelectorAll('button').forEach(b=>b.className=b.dataset.mode===m?'active':'');copy.textContent='📋 คัดลอก '+(m==='basic'?'Prompt พื้นฐาน':'Master Prompt')}
    for(const [m,name] of [['basic','Prompt พื้นฐาน'],['master','Master Prompt ฉบับละเอียด']]){const b=document.createElement('button');b.dataset.mode=m;b.textContent=name;b.onclick=()=>setMode(m);levels.append(b)}
    copy.onclick=async()=>{const value=mode==='basic'?basic:master;try{await navigator.clipboard.writeText(value);copy.textContent='✓ คัดลอกแล้ว'}catch(e){const t=document.createElement('textarea');t.value=value;document.body.append(t);t.select();document.execCommand('copy');t.remove();copy.textContent='✓ คัดลอกแล้ว'}setTimeout(()=>setMode(mode),1500)};
    article.append(label,heading,p,levels,prompt,copy);section.append(article);cards.push({article,text:[title,desc,basic,master].join(' ').toLocaleLowerCase('th')});setMode('basic');
  }
  host.after(section);
  const search=document.getElementById('search');
  const count=document.getElementById('count');
  const toolbar=document.querySelector('.toolbar');
  const filter=document.createElement('button');filter.textContent='ผลิตภัณฑ์โรงเรียน ตชด.';filter.style.cssText='border-radius:999px;padding:10px 16px;margin:8px;background:#e8f2f5;color:#16465a;border:0;cursor:pointer';
  let only=false;
  filter.onclick=()=>{only=!only;filter.style.background=only?'#126b86':'#e8f2f5';filter.style.color=only?'white':'#16465a';refresh()};
  if(toolbar)toolbar.after(filter);
  function refresh(){const q=(search?.value||'').trim().toLocaleLowerCase('th');let visible=0;for(const x of cards){const yes=x.text.includes(q);x.article.hidden=!yes;if(yes)visible++}section.hidden=visible===0;host.style.display=only?'none':'';if(count&&only)count.textContent='พบ '+visible+' คำสั่ง จากหมวดผลิตภัณฑ์โรงเรียน ตชด. • เลือกได้ 2 ระดับ';else if(count)count.textContent='คลังคำสั่ง 12 รายการ (เดิม 6 + ใหม่ 6) • เลือกได้ 2 ระดับ'}
  search?.addEventListener('input',()=>setTimeout(refresh,0));
  document.title='BPP23 AI Prompt Library v2.1';
  const version=document.querySelector('header h1 small');if(version)version.textContent='v2.1';
  refresh();
})();
