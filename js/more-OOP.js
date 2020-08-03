
class Animator {
    constructor(selector){
        this.selector = document.querySelector(selector);
    }
    fadeOut(time, toggle){
        if(toggle && this.selector.classList.contains('fadeOut-active')){
            this.selector.style.opacity = 1;
            this.selector.classList.remove("fadeOut-active");
        }else{
            this.selector.style.transition = `all ${time}s ease`;
            this.selector.style.opacity = 0;
            this.selector.classList.add("fadeOut-active");
        }
    }
    move(time, toggle = false, { x = 0, y = 0}){
        if(toggle && this.selector.classList.contains('move-active')){
            this.selector.style.transform = "translate(0px,0px)";
            this.selector.classList.remove("move-active");
        }else{
            this.selector.style.transition = `all ${time}s ease`;
            this.selector.style.transform = `translate(${x}px, ${y}px)`;
            this.selector.classList.add("move-active");
        }
    }
}
//with above, an example using it could be:
// new Animator('.class') will automatically select element chosen

const intro = new Animator('h1'); //query selects and grabs class of intro, or tag of h1, or whatever is input as param here
const btnAnim = new Animator('button')

const button = document.querySelector('button');

button.addEventListener('click', () => {
    intro.fadeOut(1);
    intro.move(1, true, {x: 100});
    button.move(2, true, { x: 500});
});
