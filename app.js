const S=(p,x='')=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${x}>${p}</svg>`;
const I={
 baby:S('<path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 011.8 3.9 2 2 0 010 3.6 9 9 0 01-17.6 0 2 2 0 010-3.6A9 9 0 0112 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>','style="color:#fff;stroke-width:1.5"'),
 mail:S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
 lock:S('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>'),
 bell:S('<path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 003.4 0"/>'),
 'chev-down':S('<path d="m6 9 6 6 6-6"/>'),
 'chev-left':S('<path d="m15 18-6-6 6-6"/>'),
 'heart-pulse':S('<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0016.500 3c-1.800 0-3 .5-4.500 2-1.500-1.500-2.700-2-4.500-2A5.500 5.500 0 002 8.500c0 2.300 1.500 4 3 5.500l7 7z"/><path d="M3.200 12H9l1.500-2 3 4 1.500-2h5.500"/>'),
 steth:S('<path d="M11 2v2M5 2v2M5 3H4a2 2 0 00-2 2v4a6 6 0 006 6 6 6 0 006-6V5a2 2 0 00-2-2h-1"/><path d="M8 15a6 6 0 006 6 6 6 0 006-6v-3"/><circle cx="20" cy="10" r="2"/>'),
 history:S('<path d="M3 12a9 9 0 109-9 9.800 9.800 0 00-6.700 2.800L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/>'),
 book:S('<path d="M4 19.500v-15A2.500 2.500 0 016.500 2H20v20H6.500a2.500 2.500 0 010-5H20"/><path d="M12 7v6M9 10h6"/>'),
 hospital:S('<path d="M12 6v4M14 8h-4M14 22v-4a2 2 0 00-4 0v4M18 10h2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h2M18 22V4a2 2 0 00-2-2H8a2 2 0 00-2 2v18"/>'),
 alert:S('<path d="m21.700 18-8-14a2 2 0 00-3.500 0l-8 14A2 2 0 004 21h16a2 2 0 001.700-3zM12 9v4M12 17h.01"/>'),
 user:S('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1"/>'),
 check:S('<path d="M20 6 9 17l-5-5"/>','style="color:#fff;stroke-width:3"'),
 'warn-big':S('<path d="m21.700 18-8-14a2 2 0 00-3.500 0l-8 14A2 2 0 004 21h16a2 2 0 001.700-3z" fill="#fff" stroke="#fff"/><path d="M12 9v4" stroke="#f94470" stroke-width="2.600"/><path d="M12 17h.01" stroke="#f94470" stroke-width="2.800"/>'),
 'warn-sm':S('<path d="m21.700 18-8-14a2 2 0 00-3.500 0l-8 14A2 2 0 004 21h16a2 2 0 001.700-3z" fill="#a34b0b" stroke="#a34b0b"/><path d="M12 9v4M12 17h.01" stroke="#fff3c4" stroke-width="2.500"/>'),
 firstaid:S('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 8v4M10 10h4M8 20h8"/>'),
 phone:S('<path d="M22 16.900v3a2 2 0 01-2.200 2 19.800 19.800 0 01-8.600-3.100 19.500 19.500 0 01-6-6A19.800 19.800 0 012.100 4.200 2 2 0 014.100 2h3a2 2 0 012 1.700c.1 1 .4 1.900.7 2.800a2 2 0 01-.5 2.100L8.100 9.900a16 16 0 006 6l1.300-1.300a2 2 0 012.100-.4c.9.300 1.800.6 2.800.7a2 2 0 011.700 2z"/>'),
 map:S('<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/>'),
 care:S('<path d="M11 14h2a2 2 0 100-4h-3c-.6 0-1.100.2-1.400.6L3 16M7 20l1.600-1.400c.3-.4.800-.6 1.400-.6h4c1.100 0 2.100-.4 2.800-1.200l4.600-4.400a2 2 0 00-2.800-2.800l-4.600 3.900M2 15l6 6M16 3v4M14 5h4" />'),
 ok:S('<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m8 12.500 3 3 5-6" stroke="#fff" stroke-width="2.500"/>'),
 info:S('<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 11v5M12 8h.01" stroke="#fff" stroke-width="2.500"/>'),
 search:S('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.300-4.300"/>'),
 home:S('<path d="M3 10.500 12 3l9 7.500V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z"/>')
};
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=I[e.dataset.i]);
document.querySelectorAll('[data-i2]').forEach(e=>e.insertAdjacentHTML('afterbegin',I[e.dataset.i2]));

const NAVSCREENS={home:'home',input:'input',result:'input',history:'history',edu:'edu'};
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  const t=NAVSCREENS[id];
  const nav=document.getElementById('nav');
  nav.classList.toggle('on',!!t);
  document.getElementById('app').classList.toggle('hasnav',!!t);
  nav.querySelectorAll('button').forEach(b=>b.classList.toggle('act',b.dataset.tab===t));
  const sc=document.getElementById(id);sc.scrollTop=0;
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){go(g.dataset.go);return}
  const t=e.target.closest('[data-tab]');if(t){go(t.dataset.tab)}
});

/* input interactions */
const rg=document.getElementById('rg'),tv=document.getElementById('tv');
function paint(){tv.textContent=(+rg.value).toFixed(1)+'°C';rg.style.setProperty('--p',((rg.value-35)/6*100)+'%')}
rg.addEventListener('input',paint);paint();
const chips=[...document.querySelectorAll('#chips button')];
chips.forEach(c=>c.onclick=()=>{chips.forEach(x=>x.classList.toggle('on',x===c))});
document.querySelectorAll('#cg .ck').forEach(c=>c.onclick=()=>c.classList.toggle('on'));
document.getElementById('analyze').onclick=()=>{
  const temp=+rg.value;
  const days=chips.find(c=>c.classList.contains('on')).textContent.replace('Hari','Hari');
  const symp=[...document.querySelectorAll('#cg .ck.on')].map(c=>c.textContent.trim());
  document.getElementById('rsub').textContent=`Berdasarkan klasifikasi model Decision Tree untuk Aisyah Putri (${temp.toFixed(1)}°C, Keluhan ${days})`;
  go(temp>=40||(symp.includes('Muntah')&&temp>=39)?'emg':'result');
};
document.getElementById('call').onclick=()=>{location.href='tel:119'};

/* search articles */
document.getElementById('q').addEventListener('input',e=>{
  const v=e.target.value.toLowerCase().trim();
  document.querySelectorAll('#arts .art').forEach(a=>{a.style.display=!v||(a.dataset.k+a.textContent.toLowerCase()).includes(v)?'':'none'});
});
go('login');
