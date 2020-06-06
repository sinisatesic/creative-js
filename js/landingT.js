// var tl = new TimelineLite();
//
// TweenLite.set("circle", {stroke:"green", strokeWidth:6});
//
// // tl.from("circle", 5, {drawSVG:0})
// //     .from("ellipse", 1, {drawSVG:0})
// //     .from("rect", 1, {drawSVG:0})
// //     .from("polyline", 1, {drawSVG:0})
//
// tl.timeScale(2);
//
// html {
//     /*padding: 0;*/
// }
// /*.container {*/
// /*    background-image: url("img/greek.svg");*/
// /*    min-width: 100vw;*/
// /*    min-height: 100vh;*/
// /*    background-color: red;*/
// /*    !*background-size: inherit;*!*/
// /*    padding: 0;*/
// /*}*/
// /*button {*/
// /*    border-radius: 100vmax;*/
// /*    border: 3px solid gold;*/
// /*    margin: auto;*/
// /*    position: fixed;*/
// /*    top: 50%;*/
// /*    left: 50%;*/
// /*    !* bring your own prefixes *!*/
// /*    transform: translate(-50%, -50%);*/
// /*}*/
// .circle {
//     border-radius: 50%;
//     border: 15px solid gold;
//     position: fixed;
//     height: 200px;
//     width: 200px;
//     /* bring your own prefixes */
//     margin-left: 25%;
//     background-color: blue;
// }
// circle {
//     stroke:red;
//     stroke-width: 6px;
//     margin-left: 35%;
// }



//   SPLIT

const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener('mouseenter', () => {
    content.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    content.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    content.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    content.classList.remove('hover-right');
});


let leftHomeDiv = new TimelineMax();
leftHomeDiv.from("#left", 2, {
    delay: 0.1,
    opacity: 0,
    x: -50,
    ease: Expo.ease
}).from("#left", 2, {
    delay: 0.1,
    opacity: 0,
    x: -50,
    ease: Expo.ease
}, "-=5");

let rightHomeDiv = new TimelineMax();
rightHomeDiv.from("#right", 2, {
    delay: 0.1,
    opacity: 0,
    x: 50,
    ease: Expo.ease
}).from("#right", 2, {
    delay: 0.1,
    opacity: 0,
    x: 50,
    ease: Expo.ease
}, "-=5");


let t3 = new TimelineMax();
t3.from(".circle", 1, { //will need to be id on home page
    delay: 0.77,
    opacity: 0,
    x: -70,
    ease: Expo.easeOut
}).from(".home-button", 1, {
    delay: 0.77,
    opacity: 0,
    y: -70,
    ease: Expo.easeOut
}).from(".scircle", 1, {
    delay: 0.77,
    opacity: 0,
    x: 70,
    ease: Expo.easeOut
}), "-=5";

let leftPara = new TimelineMax();

leftPara.from(".left-home-para", 2, {
    delay: 2.61,
    opacity: 0,
    y: 20,
    ease: Expo.easeIn
}).from(".left-home-para", 2, {
    delay: 2.61,
    opacity: 0,
    y: 20,
    ease: Expo.easeIn
}, "-=5");

let rightPara = new TimelineMax();

rightPara.from(".right-home-para", 2, {
    delay: 2.61,
    opacity: 0,
    y: 20,
    ease: Expo.easeIn
}).from(".right-home-para", 2, {
    delay: 2.61,
    opacity: 0,
    y: 20,
    ease: Expo.easeIn
}, "-=5");