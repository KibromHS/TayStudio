const scroll = document.getElementById('scroll');
const about = document.getElementById('about');
const menu = document.getElementById('menu');
const close = document.getElementById('close_menu');
const siteMenu = document.getElementById('site-menu');

const fab = document.getElementById('fab');
const hiddenContact = document.getElementById('hidden-contact');

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