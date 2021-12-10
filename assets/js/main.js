//toggle navbar
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

//toggle navbar function
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("slide")
});