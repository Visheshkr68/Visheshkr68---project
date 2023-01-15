let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnright = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100;

slideBtnLeft.addEventListener("click", () => {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})
slideBtnright.addEventListener("click", () => {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})

// sidebar navigation
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEL = document.getElementById("sidebar-navigation-close")


sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("sidebar-show")
})
sidebarCloseNavigationEL.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("sidebar-show")
})

// todays deal


//to top

// const toTop = document.querySelector(".to-top");

// window.addEventListener("click", () => {
//     if (window.pageYOffset > 100) {
//         toTop.classList.add("active");

//     }
//     else {
//         toTop.classList.remove("active");
//     }
// })