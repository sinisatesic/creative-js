// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }
//
//
//
// const cards = document.querySelectorAll('.card');
//
// cards.addEventListener('hover', () => {
//     enlargeCards();
// });
//
// function enlargeCards(){
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         card.classList.add('cardy');
//     });
// }


//GSAP:

var logo = new TimelineMax();
var navbar = new TimelineMax();
var screen = new TimelineMax();

logo.from(".logo", 3, {
    delay: 0.2,
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut
}).from(".logo", 3, {
    delay: 0.2,
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut
}, "-=5");

navbar.from(".navbar", 3, {
    delay: 0.2,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
}).from(".navbar", 3, {
    delay: 0.2,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
}, "-=5");

screen.from(".native-full-screen", 3, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".native-full-screen", 3, {
    delay: 0.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");