const siteMenu = document.getElementById('site-menu');
const menubtn = document.getElementById('menu');
const closebtn = document.getElementById('close_menu');

menubtn.addEventListener('click', () => {
    siteMenu.style.transition = '0.3s all ease';
    siteMenu.style.top = '0';
});

closebtn.addEventListener('click', () => {
    siteMenu.style.transition = '0.85s all ease';
    siteMenu.style.top = '-1000px';
});