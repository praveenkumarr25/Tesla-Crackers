// Navigation transitions
const navMap = {
  'nav-home' : 'page-home',
};
Object.keys(navMap).forEach(id => {
  document.getElementById(id).onclick = function(e){
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.page').forEach(div => div.classList.remove('active'));
    document.getElementById(navMap[id]).classList.add('active');
    window.scrollTo({top:0,behavior:"smooth"});
  }
});
// Automated redirect in 5 sec
setTimeout(function() {
  window.location.href = "https://teslacrackers.com/products.php?device=desktop";
}, 2000);


// Redirect button for Order Now
document.getElementById('redirectBtn').onclick = function() {
  window.location.href='https://teslacrackers.com/products.php?device=desktop';
};
// Redirect button for image
document.getElementById("image").onclick= function() {
  window.location.href='https://teslacrackers.com/products.php?device=desktop';
}
// Redirect button for entire website
document.getElementById("flower").onclick= function() {
  window.location.href='https://teslacrackers.com/products.php?device=desktop';
}

// Fireworks animation (canvas)
const canvas = document.getElementById('fwc'), ctx = canvas.getContext('2d');
let W = window.innerWidth, H = 400;
canvas.width = W; canvas.height = H;
window.addEventListener('resize', ()=>{canvas.width=window.innerWidth; W=window.innerWidth;});

let fireworks = [];
function randomColor(){ return `hsl(${Math.floor(Math.random()*360)},90%,60%)`; }
function createFirework() {
  let fw = {x: Math.random()*W, y: H-20, r:2+Math.random()*2, color:randomColor(), t:0, sparks:[]};
  let n = 20+Math.random()*20;
  for(let i=0;i<n;i++){
    let angle = (2*Math.PI*i)/n, speed = 2+Math.random()*2;
    fw.sparks.push({
      dx: Math.cos(angle)*speed, dy: Math.sin(angle)*speed,
      r: 2+Math.random()*2, color: randomColor(), t:0
    });
  }
  fireworks.push(fw);
}
function drawFireworks() {
  ctx.clearRect(0,0,canvas.width,H);
  if(Math.random() > 0.96) createFirework();
  fireworks.forEach((fw, idx) => {
    fw.sparks.forEach((s, i) => {
      let x = fw.x + s.dx*s.t, y = fw.y + s.dy*s.t + s.t*0.35;
      ctx.beginPath();
      ctx.arc(x,y,s.r,0,2*Math.PI);
      ctx.fillStyle=s.color; ctx.globalAlpha = Math.max(0,1-s.t/30);
      ctx.fill();
      ctx.globalAlpha = 1;
      s.t++;
    });
    fw.t++;
    if(fw.t>25) fireworks.splice(idx,1);
  });
  requestAnimationFrame(drawFireworks);
}
drawFireworks();







