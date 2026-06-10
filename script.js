const slides=document.querySelectorAll('.slide');
let current=0;
function show(i){slides.forEach(s=>s.classList.remove('active'));slides[i].classList.add('active');}
document.querySelector('.next').onclick=()=>{current=(current+1)%slides.length;show(current)}
document.querySelector('.prev').onclick=()=>{current=(current-1+slides.length)%slides.length;show(current)}
setInterval(()=>{current=(current+1)%slides.length;show(current)},3000);
window.onload=()=>document.getElementById('loader').style.display='none';
