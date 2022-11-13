let solid = document.querySelector(".fa-solid")
let hamburger = document.querySelector("hamburger")
let hide = document.querySelector(".hide")
let isActive = false;
function showNav(){
    if(isActive==false){

    }
}

let nav = document.querySelectorAll(".nav-link")
let header = document.querySelector(".header")
let logo = document.querySelector(".logo")
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY >= 50) {
        header.classList.add("active-header")
        logo.style.color="black"
        nav.forEach(navLink => {
            navLink.style.color = "black"
            navLink.style.fontWeight = "500"
        })
        console.log("y")
    }
    else {
        logo.style.color="white"
        header.classList.remove("active-header")
        nav.forEach(navLink => {
            navLink.style.color = "white"
        })
        console.log("x")
    }
})