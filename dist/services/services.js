const siteMenu = document.getElementById('site-menu');
const menubtn = document.getElementById('menu');
const closebtn = document.getElementById('close_menu');

menubtn.addEventListener('click', () => {
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.left = '0';
});

closebtn.addEventListener('click', () => {
    siteMenu.style.transition = '0.5s all ease';
    siteMenu.style.left = '-100%';
});