const show = document.querySelector(".show")
const hide = document.querySelector(".hide")
const hamburger = document.querySelector(".hamburger")
const solid = document.querySelector(".fa-solid")
let slideNav = document.querySelector(".nav")
console.log(slideNav)
let isActive = false
function collapseMenu() {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("hide", "show")
        solid.classList.replace("fa-bars", "fa-xmark")
        // slideNav.style.transform=" translateY(-100%)"
    } else {
        isActive = false
        hide.classList.replace("show", "hide")
        solid.classList.replace("fa-xmark", "fa-bars")
    }
}
hamburger.addEventListener("click", collapseMenu)
// animate on scroll
let content = document.querySelectorAll(".display")
window.addEventListener("scroll", () => {
    content.forEach(windowContent => {
        let screenPosition = window.innerHeight / 5 * 4
        let contentPosition = windowContent.getBoundingClientRect().top
        if (contentPosition < screenPosition) {
            windowContent.classList.add("active")
        } else {
            windowContent.classList.remove("active")
       
        }
    })
})
// change header color on scroll
let nav = document.querySelectorAll(".nav-link")
let header = document.querySelector(".header")
let logo = document.querySelector(".logo")
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY >= 50) {
        header.classList.add("active-header")
        logo.style.color = "black"
        nav.forEach(navLink => {
            // navLink.style.color = "black"
            // navLink.style.fontWeight = "500"
        })
        // console.log("y")
    }
    else {
        // logo.style.color = "white"
        header.classList.remove("active-header")
    }
})

// automatic slider
let slider = document.querySelector(".slider1")
let images = new Array(
    "assets/images/cttaste.png",
    "assets/images/samsung.png",
    "assets/images/huntr.png",
    "assets/images/sendna.png",
    "assets/images/validator.png",
    "assets/images/tsf-bank.png",
)
let length = images.length
let i = 0
function moves() {
    if (i > images.length - 1) {
        i = 0
    }
    slider.src = images[i]
    i++
    setTimeout("moves()", 3000)
}



