const show = document.querySelector(".show")
const hide = document.querySelector(".hide")
const hamburger = document.querySelector(".hamburger")
const solid = document.querySelector(".fa-solid")
let isActive = false
function collapseMenu() {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("hide", "show")
        solid.classList.replace("fa-bars", "fa-xmark")
    } else {
        isActive = false
        hide.classList.replace("show", "hide")
        solid.classList.replace("fa-xmark", "fa-bars")
    }

}
hamburger.addEventListener("click", collapseMenu)

// 
let slider = document.querySelector(".slider1")
let images = new Array(
    "assets/images/cttaste.png",
    "assets/images/samsung.png",
    "assets/images/huntr.png",
    "assets/images/sendna.png",
    "assets/images/validator.png",
)
let length = images.length
let i = 0
function moves() {
    if (i > images.length - 1) {
        i = 0
    }
    slider.src = images[i]
    i++
    setTimeout("moves()" , 3000)
}