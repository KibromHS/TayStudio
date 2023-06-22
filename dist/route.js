const index = document.getElementById('pindex')
const services = document.getElementById('pservices')
const about = document.getElementById('pabout')
const contact = document.getElementById('pcontact')
const siteMenu = document.getElementById('site-menu')
const preset = document.getElementById('ppreset')
const drone = document.getElementById('pdrone')
const live = document.getElementById('plive')
const photo = document.getElementById('pphoto')
const video = document.getElementById('pvideo')
const gallery = document.getElementById('pgallery')

const scroll = document.getElementById('scroll');
const about2 = document.getElementById('about');

const myelements = [index, services, about, contact, preset, drone, live, photo, video, gallery]

scroll.addEventListener('click', () => {
    about.scrollIntoView();
});

for (let i = 1; i < myelements.length; i++) {
    // myelements[i].classList.add('hidden')
    closepage(myelements[i])
}

function ismenuopen() {
    if (siteMenu.classList.contains('-left-full')) return false
    else return true
}

function ispageopen(el) {
    if (el.classList.contains('-left-full')) return false
    else return true
}


function myroute(elid) {
    for (const element of myelements) {
        if (ispageopen(element))
            closepage(element)
    }
    if (ismenuopen()) closesitemenu()

    // document.getElementById(elid).classList.remove('hidden')
    openpage(elid)
}

function openpage(elid) {
    const el = document.getElementById(elid)
    el.classList.remove('h-0')
    el.classList.remove('-left-full')
    el.classList.add('left-0')
    // el.classList.remove('hidden')
    el.style.transition = '1s all ease'

    setTimeout(() => {
        for (let i = 0; i < myelements.length; i++) {
            if (el != myelements[i]) {
                closepage(myelements[i])
            }
        }
    }, 500)
}

function closepage(el) {
    // const el = document.getElementById(elid)
    el.classList.add('h-0')
    el.style.transition = '0.5s all ease'
    if (el.classList.contains('left-0')) el.classList.remove('left-0')
    el.classList.add('-left-full')
    // el.classList.add('hidden')
}

function openmenu(from) {

    // siteMenu.classList.remove('h-0')
    // siteMenu.classList.add('h-full')
    siteMenu.classList.remove('-left-full')
    siteMenu.classList.add('left-0')
    siteMenu.style.transition = '0.5s all ease'
    localStorage.setItem('previous', from)

    setTimeout(() => {
        for (const element of myelements) {
            // element.classList.add('hidden')
            if (ispageopen(element)) closepage(element)
        }
    }, 500);

}

function closemenu() {
    closesitemenu()
    myroute(localStorage.getItem('previous'))
}

function closesitemenu() {
    // siteMenu.classList.remove('h-full')
    // siteMenu.classList.add('h-0')
    siteMenu.style.transition = '0.5s all ease'
    siteMenu.classList.remove('left-0')
    siteMenu.classList.add('-left-full')
}
