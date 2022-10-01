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
hamburger.addEventListener("click" , collapseMenu)