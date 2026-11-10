/* BPP23 v2.2 optional product scene composer. Does not modify existing prompts. */
(() => {
  const scenes=[
    ['โต๊ะไม้โอ๊คอบอุ่น','Natural oak wooden tabletop, warm earthy tones, gentle side light, realistic wood grain, handcrafted atmosphere.'],
    ['หินอ่อนสีขาว','White marble tabletop and subtle stone pedestal, clean premium styling, soft diffused studio light.'],
    ['หินชนวนสีเข้ม','Dark slate stone surface, elegant charcoal background, dramatic but balanced side light, detailed texture.'],
    ['ผ้าลินินแสงเช้า','Cream linen fabric with soft folds, warm morning window light, gentle shadows, natural handmade mood.'],
    ['ปูนเปลือยเรียบง่าย','Neutral concrete tabletop, modern minimal studio, soft directional light, understated styling.'],
    ['พื้นหลังสีครีม','Seamless warm cream background, clean commercial product photography, soft shadows and clear product silhouette.']
  ];
  const section=document.getElementById('bpp23-school-products');
  if(!section) return;
  const wrap=document.createElement('article');
  wrap.className='card';
  wrap.id='bpp23-scene-composer';
  wrap.innerHTML='<div class="category">เครื่องมือเสริม • ผลิตภัณฑ์โรงเรียน ตชด.</div><h2>🎨 เลือกฉากและพื้นหลังสินค้า</h2><p class="desc">แนบภาพสินค้าจริงในเครื่องมือ AI แล้วเลือกฉาก สัดส่วน และคัดลอกคำสั่งที่ประกอบให้อัตโนมัติ</p><div class="scene-grid"><label>ชื่อสินค้า<input id="scene-product" type="text" placeholder="เช่น น้ำผึ้ง กาแฟ งานจักสาน"></label><label>ฉากและพื้นหลัง<select id="scene-style"></select></label><label>สัดส่วนภาพ<select id="scene-ratio"><option value="1:1">1:1 — โพสต์สี่เหลี่ยม</option><option value="4:5" selected>4:5 — โปสเตอร์แนวตั้ง</option><option value="9:16">9:16 — สตอรี / วิดีโอแนวตั้ง</option><option value="16:9">16:9 — ภาพแนวนอน</option></select></label></div><div class="prompt" id="scene-preview" aria-live="polite"></div><button class="copy" id="scene-copy">📋 คัดลอก Prompt พร้อมฉาก</button><p class="desc" style="font-size:13px">หมายเหตุ: AI อาจเปลี่ยนรายละเอียดฉลากหรือรูปลักษณ์ได้ ต้องตรวจเทียบกับสินค้าจริงก่อนเผยแพร่ และห้ามใช้ภาพบุคคลโดยไม่ได้รับอนุญาต</p>';
  const style=document.createElement('style');
  style.textContent='#bpp23-scene-composer .scene-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:13px;margin-top:16px}#bpp23-scene-composer label{font-weight:650;color:#164357;font-size:14px}#bpp23-scene-composer input,#bpp23-scene-composer select{display:block;width:100%;margin-top:7px;font:inherit;font-size:16px;color:#183044;background:#fff;border:1px solid #9eb8c3;border-radius:12px;padding:12px;min-height:48px}#bpp23-scene-composer .prompt{background:#e7f0f4;border-color:#b7d1dc;color:#17394b}#bpp23-scene-composer .copy:focus-visible,#bpp23-scene-composer select:focus-visible{outline:3px solid #ffbb4d;outline-offset:2px}';
  document.head.append(style);
  const firstCard=section.querySelector('.card');
  if(firstCard)section.insertBefore(wrap,firstCard);else section.append(wrap);
  const product=wrap.querySelector('#scene-product'),scene=wrap.querySelector('#scene-style'),ratio=wrap.querySelector('#scene-ratio'),preview=wrap.querySelector('#scene-preview'),copy=wrap.querySelector('#scene-copy');
  scenes.forEach(([name],i)=>{const opt=document.createElement('option');opt.value=String(i);opt.textContent=name;scene.append(opt)});
  function makePrompt(){
    const name=product.value.trim()||'[ระบุชื่อสินค้า]';
    return 'ใช้ภาพถ่ายจริงของผลิตภัณฑ์โรงเรียนตำรวจตระเวนชายแดนเป็นต้นฉบับ\\nสินค้า: '+name+'\\n\\nภารกิจ: สร้างภาพถ่ายประชาสัมพันธ์สินค้าอย่างมืออาชีพ โดยปรับเฉพาะฉาก พื้นหลัง แสงและเงา\\nฉากที่เลือก: '+scenes[Number(scene.value)][0]+'\\nSCENE: '+scenes[Number(scene.value)][1]+'\\nสัดส่วนภาพ: '+ratio.value+'\\n\\nข้อกำหนด: รักษารูปทรง สี วัสดุ ขนาดสัดส่วน จำนวนสินค้า บรรจุภัณฑ์ โลโก้ และข้อความฉลากตามภาพต้นฉบับ ห้ามสร้างรายละเอียดสินค้า ราคา สรรพคุณ หรือการรับรองขึ้นเอง เห็นสินค้าครบชิ้น คมชัด สมจริง ไม่มีข้อความโฆษณาเพิ่มเติม ไม่มีลายน้ำ หากข้อความฉลากอ่านไม่ชัด ให้คงตามต้นฉบับโดยไม่เดา ตรวจเทียบกับสินค้าจริงก่อนเผยแพร่ และใช้เฉพาะภาพที่ได้รับอนุญาต';
  }
  function update(){preview.textContent=makePrompt()}
  [product,scene,ratio].forEach(el=>el.addEventListener('input',update));
  copy.addEventListener('click',async()=>{
    const value=makePrompt();let ok=false;
    try{await navigator.clipboard.writeText(value);ok=true}catch(e){
      const t=document.createElement('textarea');t.value=value;t.style.position='fixed';t.style.left='-9999px';document.body.append(t);t.select();ok=document.execCommand('copy');t.remove();
    }
    copy.textContent=ok?'✓ คัดลอกแล้ว':'ไม่สามารถคัดลอกได้ โปรดเลือกข้อความด้านบน';
    setTimeout(()=>copy.textContent='📋 คัดลอก Prompt พร้อมฉาก',2000);
  });
  document.title='BPP23 AI Prompt Library v2.2';
  const version=document.querySelector('header h1 small');if(version)version.textContent='v2.2';
  update();
})();
