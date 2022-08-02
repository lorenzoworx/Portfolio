let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    let menu = document.querySelector(".hamburger-menu");
    let top = document.querySelector(".top");
    let middle = document.querySelector(".middle");
    let bottom = document.querySelector(".bottom");
    menu.classList.toggle("hide");
    top.classList.toggle("active");
    middle.classList.toggle("active");
    bottom.classList.toggle("active");
})

let items =document.querySelector(".hamburger-menu").childNodes;

items.forEach(item => {
    item.addEventListener("click", function() {
        let menu = document.querySelector(".hamburger-menu");
        let top = document.querySelector(".top");
        let middle = document.querySelector(".middle");
        let bottom = document.querySelector(".bottom");
        menu.classList.toggle("hide");
        top.classList.toggle("active");
        middle.classList.toggle("active");
        bottom.classList.toggle("active");
    })
})