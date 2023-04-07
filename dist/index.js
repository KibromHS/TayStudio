let scroll = document.getElementById('scroll');
let about = document.getElementById('about');
let menu = document.getElementById('menu');

scroll.addEventListener('click', () => {
    about.scrollIntoView();
});