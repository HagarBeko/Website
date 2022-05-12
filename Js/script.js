let header = document.querySelector('.navbar')
let meun = document.querySelector('.menu-toggle')
let bar = document.querySelector('.navbar-menu')
let arrow = document.querySelector(".goTop")
    // let menuBar = document.querySelector('.navbar-menu a')
    // console.log(menuBar);
document.addEventListener('scroll', () => {
    var scrollPostion = window.scrollY
    if (scrollPostion > 400) {
        header.style.background = "#fff"
        header.classList.add('sticky')
    } else {
        header.style.background = "transparent"
        header.classList.remove('sticky')
    }
})
arrow.addEventListener('click', () => {
    scroll(0, 0)
})
document.addEventListener('click', () => {
    bar.classList.toggle("active")
    meun.classList.toggle('active')
})