let gallery = document.querySelector(".life-img-gallery")
let currentImg = document.querySelector(".slider1")
let lifeImg = document.querySelectorAll(".lifeimg")
console.log(currentImg.src)
let len = lifeImg.length
for (let i = 0; i < len; i++) {
    lifeImg[i].addEventListener("click", function () {
        // console.log(currentImg)
        currentImg.src = lifeImg[i].src
    })
}
let chevronLeft = document.querySelector(".fa-chevron-left")
let chevronRight = document.querySelector(".fa-chevron-right")
chevronLeft.addEventListener("click", ()=>{
    gallery.scrollLeft += 150
    console.log("works2")
})
chevronRight.addEventListener("click",()=>{
    gallery.scrollLeft -= 150
    console.log("works")
})

