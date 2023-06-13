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

services.classList.add('hidden')
about.classList.add('hidden')
contact.classList.add('hidden')
preset.classList.add('hidden')
drone.classList.add('hidden')
live.classList.add('hidden')
photo.classList.add('hidden')
video.classList.add('hidden')
gallery.classList.add('hidden')

function ismenuopen() {
    if (siteMenu.classList.contains('-left-full')) return false
    else return true
}


function myroute(el) {
    index.classList.add('hidden')
    services.classList.add('hidden')
    about.classList.add('hidden')
    contact.classList.add('hidden')
    preset.classList.add('hidden')
    live.classList.add('hidden')
    drone.classList.add('hidden')
    photo.classList.add('hidden')
    video.classList.add('hidden')
    gallery.classList.add('hidden')
    if (ismenuopen) closesitemenu()

    document.getElementById(el).classList.remove('hidden')
}

function openmenu(from) {

    siteMenu.classList.remove('h-0')
    siteMenu.classList.add('h-full')
    siteMenu.classList.remove('-left-full')
    siteMenu.classList.add('left-0')
    siteMenu.style.transition = '0.5s all ease'
    localStorage.setItem('previous', from)

    setTimeout(() => {
        index.classList.add('hidden')
        services.classList.add('hidden')
        about.classList.add('hidden')
        contact.classList.add('hidden')
        preset.classList.add('hidden')
        live.classList.add('hidden')
        drone.classList.add('hidden')
        photo.classList.add('hidden')
        video.classList.add('hidden')
        gallery.classList.add('hidden')
    }, 500);

}

function closemenu() {
    closesitemenu()
    myroute(localStorage.getItem('previous'))
}

function closesitemenu() {
    siteMenu.classList.remove('h-full')
    siteMenu.classList.add('h-0')
    siteMenu.style.transition = '0.5s all ease'
    siteMenu.classList.remove('left-0')
    siteMenu.classList.add('-left-full')
}
