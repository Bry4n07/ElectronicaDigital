'use strict';
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const topics=[...document.querySelectorAll('.topic')],search=document.querySelector('#search'),expand=document.querySelector('#expand');
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
search.addEventListener('input',()=>{const q=normalize(search.value.trim());topics.forEach(t=>{t.hidden=!normalize(t.textContent).includes(q)});document.querySelector('#count').textContent=topics.filter(t=>!t.hidden).length+' temas';});
expand.addEventListener('click',()=>{const visible=topics.filter(t=>!t.hidden),open=visible.some(t=>!t.open);visible.forEach(t=>t.open=open);expand.textContent=open?'Contraer todos':'Expandir todos';});
const patterns=['abcdef','bc','abdeg','abcdg','bcfg','acdfg','acdefg','abc','abcdefg','abcdfg'],slider=document.querySelector('#digit');
function digit(){const value=Number(slider.value),pattern=patterns[value];document.querySelectorAll('.segment').forEach(s=>s.classList.toggle('on',pattern.includes(s.classList[1])));document.querySelector('#number').value=value;document.querySelector('#segments').textContent='Segmentos: '+pattern.split('').join(', ');document.querySelector('.segment-display').setAttribute('aria-label','Display de siete segmentos mostrando '+value);}
slider.addEventListener('input',digit);digit();
const viewer=document.querySelector('#viewer');
document.querySelectorAll('a.zoom').forEach(a=>a.addEventListener('click',e=>{if(typeof viewer.showModal!=='function')return;e.preventDefault();const source=a.querySelector('img')||document.querySelector('.schematic img');viewer.querySelector('img').src=a.href;viewer.querySelector('img').alt=source.alt;document.querySelector('#image-caption').textContent=source.alt;viewer.showModal();}));
document.querySelector('#close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px'});nav.querySelectorAll('a').forEach(a=>observer.observe(document.querySelector(a.hash)));}
let printOpen=[];window.addEventListener('beforeprint',()=>{printOpen=topics.map(t=>t.open);topics.forEach(t=>t.open=true)});window.addEventListener('afterprint',()=>topics.forEach((t,i)=>t.open=printOpen[i]));
