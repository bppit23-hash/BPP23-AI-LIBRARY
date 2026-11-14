/* BPP23 AI Prompt Library v2.1: school product promotion add-on */
(() => {
  const rules = 'ข้อกำหนด: ใช้เฉพาะข้อมูลที่ได้รับอนุญาต คงสี รูปทรง ฉลาก และจำนวนสินค้าจริง ไม่แต่งราคา สรรพคุณ มาตรฐานหรือยอดขาย ไม่เผยแพร่ข้อมูลหรือภาพนักเรียนโดยไม่มีสิทธิและความยินยอมที่เหมาะสม ตรวจสอบข้อมูลก่อนเผยแพร่';
  const data = [
    ['แต่งภาพสินค้าจริงให้พร้อมจำหน่าย','ปรับฉาก แสง และเงา โดยรักษารายละเอียดสินค้า','ช่วยเขียน Prompt แต่งภาพผลิตภัณฑ์โรงเรียน ตชด. จากภาพจริง ให้ดูสะอาด แสงนุ่ม ฉากเรียบ โดยคงสี รูปทรง ฉลาก และจำนวนสินค้าเดิม\nสินค้า: [ระบุ] ภาพต้นฉบับ: [แนบ]'],
    ['ออกแบบโปสเตอร์ประชาสัมพันธ์สินค้า','สร้างโปสเตอร์พร้อมข้อความที่ตรวจสอบแล้ว','ช่วยร่างโปสเตอร์ประชาสัมพันธ์ผลิตภัณฑ์โรงเรียน ตชด. ขนาด 4:5 มีชื่อสินค้า จุดเด่นที่ยืนยันแล้ว และช่องทางติดต่อที่อนุญาต\nข้อมูล: [ระบุ]'],
    ['เขียนข้อความแนะนำสินค้าสำหรับ Facebook และ LINE','สร้างข้อความสุภาพ ไม่กล่าวอ้างเกินจริง','ช่วยเขียนข้อความแนะนำผลิตภัณฑ์โรงเรียน ตชด. สำหรับ Facebook และ LINE โดยใช้เฉพาะข้อมูลที่ให้ ไม่แต่งราคาและสรรพคุณ\nข้อมูล: [ระบุ]'],
    ['จัดทำแค็ตตาล็อกผลิตภัณฑ์','จัดหมวดสินค้าและข้อมูลที่ตรวจสอบได้','ช่วยวางแค็ตตาล็อกผลิตภัณฑ์โรงเรียน ตชด. พร้อมชื่อสินค้า ภาพจริง รายละเอียด ราคาเฉพาะที่ยืนยัน และช่องทางติดต่อ\nรายการ: [ระบุ]'],
    ['สร้างสตอรีบอร์ดวิดีโอสินค้า 30 วินาที','นำเสนอสินค้าและกิจกรรมฝึกอาชีพอย่างเหมาะสม','ช่วยวางสตอรีบอร์ดวิดีโอ 30 วินาที แนะนำผลิตภัณฑ์โรงเรียน ตชด. ระบุภาพ เสียง ข้อความบนจอ และวิธีตัดต่อ ไม่สร้างเหตุการณ์หรือคำรับรองที่ไม่จริง\nข้อมูล: [ระบุ]'],
    ['นำเสนอชุดของขวัญและผลงานฝึกอาชีพ','ออกแบบแนวคิดชุดสินค้าและเล่าเรื่องการเรียนรู้','ช่วยเสนอแนวคิดจัดชุดของขวัญจากผลิตภัณฑ์จริงของโรงเรียน ตชด. พร้อมข้อความเล่าเรื่องกิจกรรมฝึกอาชีพ แยกแนวคิดจำลองจากสินค้าที่มีจริง\nสินค้า: [ระบุ]'],
    ["ออกแบบโปสเตอร์แปลงเกษตรจากภาพถ่ายจริง","ใช้ภาพกิจกรรมและสถานที่จริงเป็นหลัก พร้อมชื่อโรงเรียนและตราที่ได้รับอนุญาต","สร้างโปสเตอร์แนวตั้ง 2:3 เรื่อง “แปลงเกษตรเพื่อการเรียนรู้” ของโรงเรียนตำรวจตระเวนชายแดนช่างกลปทุมวันอนุสรณ์8 ใช้ภาพแปลงเกษตรจริงที่แนบเป็นภาพหลัก และภาพกิจกรรมจริงอีก 2 ภาพเป็นกรอบประกอบ โทนม่วง เขียว ครีม ทอง หัวข้อ “เรียนรู้จากการลงมือทำ” เว้นตำแหน่งสำหรับใส่ตราโรงเรียนจากไฟล์ที่ได้รับอนุญาต ห้ามสร้างผักที่เก็บเกี่ยวแล้วขึ้นเอง ห้ามเปลี่ยนสถานที่หรือข้อความป้ายในภาพ ตรวจข้อความไทยก่อนเผยแพร่","บทบาท: นักออกแบบโปสเตอร์ประชาสัมพันธ์การศึกษา\nกรณีศึกษา: โรงเรียนตำรวจตระเวนชายแดนช่างกลปทุมวันอนุสรณ์8\nภารกิจ: สร้างโปสเตอร์แนวตั้ง 2:3 จากภาพแปลงเกษตรและกิจกรรมจริงที่แนบ\nองค์ประกอบ: ส่วนบนชื่อโรงเรียนและพื้นที่วางโลโก้; กลางภาพเป็นภาพแปลงเกษตรจริงขนาดใหญ่; มีกรอบภาพกิจกรรมจริง 2 ภาพ; ส่วนล่างมี 3 หัวข้อ “กิจกรรมแปลงเกษตร” “เรียนรู้จากการลงมือทำ” “สร้างทักษะอาชีพ”\nข้อความหลัก: “แปลงเกษตรเพื่อการเรียนรู้”\nข้อความรอง: “เรียนรู้จากการลงมือทำ”\nโทนสี: ม่วงเข้ม เขียวใบไม้ ครีม และทองอ่อน แสงธรรมชาติ อ่านชัดบนมือถือ\nข้อกำหนด: คงรูปลักษณ์บุคคล อาคาร ป้าย แปลงผัก และบริบทตามภาพจริง; ห้ามเพิ่มผลผลิตที่ยังไม่ปรากฏจริง; ใช้ตราโรงเรียนจากไฟล์ต้นฉบับที่ได้รับอนุญาตเท่านั้น ถ้าไม่มีให้เว้นช่องว่าง; ห้ามแต่งชื่อ ราคา มาตรฐานหรือข้อมูลเก็บเกี่ยว; ตรวจการสะกดภาษาไทยทุกจุด\nหากใช้ภาพจำลองหรือภาพประกอบ AI ให้ระบุ “ภาพตัวอย่างเพื่อการประชาสัมพันธ์” อย่างเหมาะสม\nข้อมูลที่ต้องแนบ: [ภาพสถานที่จริง] [ภาพกิจกรรมจริง] [ไฟล์ตราที่ได้รับอนุญาต หากมี] [ข้อความที่โรงเรียนตรวจสอบแล้ว]\nผลลัพธ์: ภาพโปสเตอร์และรายการตรวจสอบความถูกต้องก่อนเผยแพร่"],
    ["ประชาสัมพันธ์ผักสดและผลผลิตโรงเรียน ตชด.","ทำภาพโปรโมทผลผลิตที่มีจริง โดยไม่แต่งราคา ปริมาณ หรือคำรับรอง","ใช้ภาพผักที่เก็บเกี่ยวจริงจากโรงเรียน ตชด. ออกแบบโปสเตอร์ 4:5 ให้ผักเป็นจุดเด่น ใส่ชื่อโรงเรียนและชื่อผักตามข้อมูลที่ยืนยัน เว้นช่องสำหรับราคา น้ำหนัก และช่องทางติดต่อหากยังไม่ทราบ ห้ามสร้างผลผลิตเพิ่มหรืออ้างว่าปลอดสาร/ออร์แกนิกโดยไม่มีหลักฐาน\nข้อมูล: [ชื่อโรงเรียน] [ภาพผักจริง] [ชื่อผัก] [ราคาและปริมาณที่ยืนยัน] [ช่องทางติดต่อที่อนุญาต]","บทบาท: นักออกแบบสื่อประชาสัมพันธ์ผลผลิตเกษตรของโรงเรียน ตชด.\nเป้าหมาย: ออกแบบโปสเตอร์แนวตั้ง 4:5 หรือ 2:3 ที่สวยงาม น่าเชื่อถือ และตรงกับสินค้าจริง\nข้อมูลนำเข้า: [ชื่อโรงเรียน] [ภาพผลผลิตจริง] [ชื่อสินค้า] [จำนวน/น้ำหนักที่ยืนยัน] [ราคา หากมี] [ช่องทางสั่งซื้อที่ได้รับอนุญาต] [ตราโรงเรียนต้นฉบับ หากมี]\nจัดองค์ประกอบ: ชื่อโรงเรียนด้านบน; ภาพผักจริงเป็นพระเอก; โทนเขียว ครีม และสีธรรมชาติ; ส่วนล่างเป็นข้อมูลสินค้าและช่องทางติดต่อ\nข้อกำหนด: รักษาสี รูปทรง จำนวน และลักษณะผลผลิตจริง ไม่เพิ่มตะกร้าผักชนิดอื่น ไม่สร้างฉลาก ตรารับรอง หรือข้อความบนป้ายที่ไม่มีหลักฐาน ห้ามใช้คำว่า “ปลอดสาร” “ออร์แกนิก” หรือกล่าวอ้างคุณภาพโดยไม่ยืนยัน หากข้อมูลราคา/น้ำหนักไม่ครบให้ใส่ [รอยืนยัน] ไม่สร้างข้อมูลเอง\nแยกภาพ AI จำลองออกจากภาพผลผลิตจริง ให้ครูตรวจภาพและข้อความก่อนเผยแพร่\nผลลัพธ์: ข้อความโปสเตอร์ โครงร่างจัดวาง และรายการข้อมูลที่ต้องยืนยัน"]
  ];
  const host=document.getElementById('cards');
  if(!host) return;
  const section=document.createElement('section');
  section.id='bpp23-school-products';
  section.innerHTML='<h2 style="margin:1.5rem 0">🏫 ผลิตภัณฑ์และแปลงเกษตรโรงเรียน ตชด.</h2><p>8 คำสั่ง เลือก Prompt พื้นฐานหรือ Master Prompt ฉบับละเอียด</p>';
  const cards=[];
  for(const [title,desc,basic,customMaster] of data){
    const article=document.createElement('article'); article.className='card';
    const label=document.createElement('div');label.className='category';label.textContent='ผลิตภัณฑ์โรงเรียน ตชด.';
    const heading=document.createElement('h2');heading.textContent=title;
    const p=document.createElement('p');p.className='desc';p.textContent=desc;
    const levels=document.createElement('div');levels.className='levels';
    const prompt=document.createElement('div');prompt.className='prompt';
    const copy=document.createElement('button');copy.className='copy';
    const master='บทบาท: ผู้เชี่ยวชาญสื่อประชาสัมพันธ์ผลิตภัณฑ์โรงเรียนตำรวจตระเวนชายแดน\nภารกิจ: '+title+'\nข้อมูลนำเข้า: [โรงเรียน] [ชื่อสินค้า] [ภาพที่ได้รับอนุญาต] [รายละเอียดที่ยืนยันแล้ว] [กลุ่มเป้าหมาย] [ช่องทางเผยแพร่]\n'+rules+'\nขั้นตอน: 1. ตรวจข้อมูลและระบุส่วนที่รอยืนยัน 2. เสนอแนวคิดที่เหมาะกับกลุ่มเป้าหมาย 3. จัดทำผลงานพร้อมข้อความและแนวทางภาพ 4. สรุปรายการตรวจสอบก่อนเผยแพร่\nผลลัพธ์: ผลงานพร้อมใช้และรายการตรวจทาน\nข้อมูลต้นฉบับ: [ใส่ข้อมูลที่ได้รับอนุญาต]';
    const fullMaster=customMaster||master;
    let mode='basic';
    function setMode(m){mode=m;prompt.textContent=m==='basic'?basic:fullMaster;levels.querySelectorAll('button').forEach(b=>b.className=b.dataset.mode===m?'active':'');copy.textContent='📋 คัดลอก '+(m==='basic'?'Prompt พื้นฐาน':'Master Prompt')}
    for(const [m,name] of [['basic','Prompt พื้นฐาน'],['master','Master Prompt ฉบับละเอียด']]){const b=document.createElement('button');b.dataset.mode=m;b.textContent=name;b.onclick=()=>setMode(m);levels.append(b)}
    copy.onclick=async()=>{const value=mode==='basic'?basic:fullMaster;try{await navigator.clipboard.writeText(value);copy.textContent='✓ คัดลอกแล้ว'}catch(e){const t=document.createElement('textarea');t.value=value;document.body.append(t);t.select();document.execCommand('copy');t.remove();copy.textContent='✓ คัดลอกแล้ว'}setTimeout(()=>setMode(mode),1500)};
    if(title==='ออกแบบโปสเตอร์แปลงเกษตรจากภาพถ่ายจริง'){
      const example=document.createElement('figure');
      example.style.cssText='margin:18px 0 0;padding:14px;border:1px solid #dbe6eb;border-radius:14px;background:#f6f9fb;text-align:center';
      const image=document.createElement('img');
      image.src='./assets/school-agriculture-poster-example.jpg';
      image.alt='ภาพตัวอย่างโปสเตอร์แปลงเกษตรโรงเรียนตำรวจตระเวนชายแดนช่างกลปทุมวันอนุสรณ์8';
      image.loading='lazy';
      image.style.cssText='display:block;width:100%;max-width:430px;height:auto;margin:0 auto;border-radius:10px';
      const caption=document.createElement('figcaption');
      caption.style.cssText='font-size:14px;line-height:1.7;color:#526778;margin-top:10px';
      caption.textContent='ภาพตัวอย่างการออกแบบด้วย AI • ภาพผลผลิตจำลอง ไม่ใช่หลักฐานการเก็บเกี่ยวจริง • โปรดตรวจสอบตราและข้อความก่อนเผยแพร่';
      const missing=document.createElement('p');
      missing.className='desc';
      missing.textContent='กำลังรอไฟล์ภาพตัวอย่างสำหรับแสดงบนเว็บไซต์';
      missing.hidden=true;
      image.onerror=()=>{image.hidden=true;missing.hidden=false};
      image.onload=()=>{image.hidden=false;missing.hidden=true};
      example.append(image,missing,caption);
      article.append(example);
    }
    article.append(label,heading,p,levels,prompt,copy);section.append(article);cards.push({article,text:[title,desc,basic,fullMaster].join(' ').toLocaleLowerCase('th')});setMode('basic');
  }
  host.after(section);
  const search=document.getElementById('search');
  const count=document.getElementById('count');
  const toolbar=document.querySelector('.toolbar');
  const filter=document.createElement('button');
  filter.textContent='Prompt ส่งเสริมผลิตภัณฑ์โรงเรียน ตชด.';
  filter.style.cssText='border-radius:999px;padding:10px 16px;background:#cfdee5;color:#123c50;border:1px solid #a9c2cd;cursor:pointer;font-weight:650';
  const filterBox=document.getElementById('filters');
  let only=false;
  if(filterBox)filterBox.append(filter);
  function refresh(){
    const q=(search?.value||'').trim().toLocaleLowerCase('th');
    let visible=0;
    for(const x of cards){const yes=x.text.includes(q);x.article.hidden=!yes;if(yes)visible++}
    section.hidden=visible===0;
    host.style.display=only?'none':'';
    filter.style.background=only?'#126782':'#cfdee5';
    filter.style.color=only?'#fff':'#123c50';
    filter.style.borderColor=only?'#126782':'#a9c2cd';
    filter.classList.toggle('active',only);
    if(count&&only)count.textContent='พบ '+visible+' คำสั่ง จากหมวดผลิตภัณฑ์โรงเรียน ตชด. • เลือกได้ 2 ระดับ';
    else if(count)count.textContent='คลังคำสั่ง 14 รายการ (ทั่วไป 6 + ผลิตภัณฑ์โรงเรียน 8) • เลือกได้ 2 ระดับ';
  }
  filter.onclick=()=>{only=!only;refresh()};
  if(filterBox){
    filterBox.addEventListener('click',e=>{
      if(e.target!==filter && e.target.closest('button')){only=false;setTimeout(refresh,0)}
    });
  }
  search?.addEventListener('input',()=>setTimeout(refresh,0));
  document.title='BPP23 AI Prompt Library v2.3';
  const version=document.querySelector('header h1 small');if(version)version.textContent='v2.1';
  refresh();
})();
