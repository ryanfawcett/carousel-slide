let prev = document.getElementById('prev')
let next = document.getElementById('next')
let carousel = document.querySelector('.carousel')
let carouselList = document.querySelector('.slide-list')
let thumbnail = document.querySelector('.thumbnail')

prev.onclick = function() {
    showSlider('prev')
}

next.onclick = function() {
    showSlider('next')
}

let defaultTime = 3000
let autoNextTime = 7000

let defaultTimmer

let autoNextTimmer = setInterval(() => {
    next.click()
}, autoNextTime)

function showSlider(type) {
    let sliders = document.querySelectorAll('.slide-item')
    let thumbnails = document.querySelectorAll('.thumbnail .item')

    if (type === 'next') {
        carouselList.appendChild(sliders[0])
        thumbnail.appendChild(thumbnails[0])
        carousel.classList.add('next')
    } else {
        let lastSliderPos = sliders.length - 1
        carouselList.prepend(sliders[lastSliderPos])
        thumbnail.prepend(thumbnails[lastSliderPos])
        carousel.classList.add('prev')
    }

    clearTimeout(defaultTimmer)
    defaultTimmer = setTimeout(() => {
        carousel.classList.remove('prev')
        carousel.classList.remove('next')
    }, defaultTime)
}