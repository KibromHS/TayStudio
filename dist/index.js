let scroll = document.getElementById('scroll');
let about = document.getElementById('about');
let menu = document.getElementById('menu');
let close = document.getElementById('close_menu');
let siteMenu = document.getElementById('site-menu');

scroll.addEventListener('click', () => {
    about.scrollIntoView();
});

menu.addEventListener('click', () => {
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.top = '0';
});

close.addEventListener('click', () => {
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.top = '-100%';
});