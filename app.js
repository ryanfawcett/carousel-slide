let prev = document.getElementById('prev')
let next = document.getElementById('next')
let carousel = document.querySelector('.carousel')
let slider = document.querySelector('.slide-list')
let thumbnail = document.querySelector('.thumbnail')

prev.onclick = function() {
    showSlider('prev')
    timerReset()
}

next.onclick = function() {
    showSlider('next')
    timerReset()
}

let defaultTime = 500
let autoNextTime = 5000

let defaultTimmer

let autoNextTimmer = setInterval(() => {
    next.click()
}, autoNextTime)

function showSlider(type) {
    let sliders = document.querySelectorAll('.slide-item')
    let thumbnails = document.querySelectorAll('.thumbnail .item')

    if (type === 'next') {
        slider.appendChild(sliders[0])
        thumbnail.appendChild(thumbnails[0])
        carousel.classList.add('next')
    } else {
        let lastSliderPos = sliders.length - 1
        slider.prepend(sliders[lastSliderPos])
        thumbnail.prepend(thumbnails[lastSliderPos])
        carousel.classList.add('prev')
    }

    clearTimeout(defaultTimmer)
    defaultTimmer = setTimeout(() => {
        carousel.classList.remove('prev')
        carousel.classList.remove('next')
    }, defaultTime)

    clearTimeout(autoNextTimmer)
    autoNextTimmer = setInterval(() => {
        next.click()
    }, autoNextTime)
}

function timerReset() {
    let timer = document.getElementById('timer')
    timer.classList.remove('timer')
    timer.offsetWidth = timer.offsetWidth
    timer.classList.add('timer')
}