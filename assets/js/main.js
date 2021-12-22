//toggle navbar
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

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