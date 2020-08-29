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
function showLinks(){

}
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
    delay: .1,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
}).from(".logo", 3, {
    delay: .1,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
}, "-=5");

navbar.from(".navbar", 3, {
    delay: .1,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
}).from(".navbar", 3, {
    delay: .1,
    opacity: 0,
    y: -40,
    ease: Expo.easeInOut
}, "-=5");

screen.from(".native-full-screen", 3, {
    delay: .1,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".native-full-screen", 3, {
    delay: .1,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");

