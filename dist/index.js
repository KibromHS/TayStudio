const scroll = document.getElementById('scroll');
const about = document.getElementById('about');
const menu = document.getElementById('menu');
const close = document.getElementById('close_menu');
const siteMenu = document.getElementById('site-menu');
const closeFAB = document.getElementById('close_fab');

const fab = document.getElementById('fab');
const hiddenContact = document.getElementById('hidden-contact');

scroll.addEventListener('click', () => {
    about.scrollIntoView();
});

menu.addEventListener('click', () => {
    siteMenu.classList.remove('h-0');
    siteMenu.classList.add('h-full')
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.left = '0';
});

close.addEventListener('click', () => {
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.left = '-100%';
});

fab.addEventListener('click', () => {
    hiddenContact.style.transition = '1s all ease';
    fab.style.transition = '0.5s all ease';
    
    if (hiddenContact.classList.contains('hidden')) {
        hiddenContact.style.opacity = '1';
        hiddenContact.classList.remove('hidden');
        hiddenContact.classList.remove('h-0');
        hiddenContact.classList.add('h-4/5');
        // fab.src = './img/close_fab.png';
        fab.style.scale = '0.7';
    } else {
        hiddenContact.style.opacity = '0';
        hiddenContact.classList.remove('h-4/5');
        hiddenContact.classList.add('h-0');
        hiddenContact.classList.add('hidden');
        // fab.src = './img/floating.png';
        fab.style.scale = '1';
    }
});

closeFAB.addEventListener('click', () => {
    fab.style.transition = '0.5s all ease';
    hiddenContact.classList.opacity = '0';
    hiddenContact.classList.remove('h-4/5');
    hiddenContact.classList.add('h-0');
    hiddenContact.classList.add('hidden');
    fab.style.scale = '1';
});

if (location.href.contains('?')) {
    alert(location.href.replaceAll('%20', ' ').substr(location.href.indexOf('?')+1+3+1))
}






















// var canvas = document.getElementById('canvas'); 
// var ctx = canvas.getContext('2d');
// var lines = []; var gravity = 0.02;
// var _x = window.innerWidth / 1, _y = window.innerWidth / 1;

// resize();

// for (var i = 0; i < 600; i++) {
//     addLine(i * 20);
// }
// function addLine(delay) {
//     setTimeout(function () {
//         var line = { x: _x, y: _y, width: Math.random() * 4, vx: -0.5 + Math.random() * 1, vy: -1 + -Math.random() * 1, rotation: Math.random() * 2, vr: Math.random() * 0.2, opacity: 1 }; lines.push(line);
//     }, delay);
// }
// function loop() {
//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); 
//     for (var i = 0, l = lines.length; i < l; i++) {
//         var line = lines[i]; 
//         ctx.globalAlpha = line.opacity;
//         ctx.beginPath(); ctx.moveTo(line.x, line.y);
//         ctx.lineTo(line.x + line.width * Math.cos(line.rotation), line.y + line.width * Math.sin(line.rotation)); 
//         ctx.closePath();
//         ctx.stroke(); 
//         line.x += line.vx;
//         line.y += line.vy; line.vy += gravity;
//         line.rotation += line.vr; 
//         line.opacity -= 0.005;
//         if (line.opacity < 0) {
//             line.opacity = 1; 
//             line.x = _x;
//             line.y = _y; line.vy = 1 + -Math.random() * 1;
//         }
//     }
//     requestAnimationFrame(loop);
// }
// requestAnimationFrame(loop);
// function resize() {
//     canvas.width = window.innerWidth; 
//     canvas.height = window.innerHeight;
// }
// function mousemove(e) {
//     _x = e.pageX;
//     _y = e.pageY;
// }
// window.addEventListener('mousemove', mousemove);
// window.addEventListener('resize', resize);