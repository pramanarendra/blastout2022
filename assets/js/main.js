//toggle navbar
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
//toggle navbar
var guide = document.querySelector(".btn-main");
var blurbg = document.getElementById("blurbg");
var popup = document.getElementById("pop-up");
var close = document.querySelector(".close");
//parallax
const parallax = document.getElementById("landing-page");
const parallax2 = document.getElementById("about");
const parallax3 = document.getElementById("timeline");
const parallax4 = document.getElementById("testimonial");


//toggle navbar function
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("slide")
});

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

//toggle pop up
guide.addEventListener("click", function () {
    guide.classList.toggle("active");
    blurbg.classList.toggle("active");
    popup.classList.toggle("active");
});

close.addEventListener("click", function () {
    guide.classList.remove("active");
    blurbg.classList.remove("active");
    popup.classList.remove("active");
})


//parallax background
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    parallax2.style.backgroundPositionY = offset * 0.08 + "px";
    parallax3.style.backgroundPositionY = offset * 0.7 + "px";
    parallax4.style.backgroundPositionY = offset * 0.1 + "px";
})
