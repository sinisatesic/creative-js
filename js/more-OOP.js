
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



//goal with prototypal inheritance is to basically copy over
//  functionality methods and properties from another constructor function

function Enemy(life, name, level){
    this.life = life;
    this.name = name;
    this.level = level;
}

Enemy.prototype.getInfo = function(){
    console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function(){
    console.log(`${this.name} has attacked!`);
};
Enemy.prototype.block = function(){
    console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell){
    //goal: to inherit everything from first constructor function
    //can use call:
    Enemy.call(this, life, name, level); //call allows inheritance from first constructor function to this one; basically makes it to Dragon.life = life, Dragon.name = life, etc.
    //keyword this is going to reference the Dragon object
    //For rest of params outside of Enemy constructor function, just define as normal:
    this.color = color;
    this.spell = spell;
}

//Inherit Prototype:
Dragon.prototype = Object.create(Enemy.prototype); //creates new Object with its prototype set to whatever is added as param(s)

Dragon.prototype.fireBreath = function(){ //adding new prototype value specific to Dragon constructor function
    console.log('FIRE BREATH');
};

const newDragon = new Dragon(100, 'Drogon', 25, 'green', 'fire');

console.log(newDragon);
newDragon.getInfo();
// console.log(newDragon);

var v = 1;

var f1 = function() {
    console.log(v);
}

var f2 = function() {
    var v = 2;
    f1();
};

f2();



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



//goal with prototypal inheritance is to basically copy over
//  functionality methods and properties from another constructor function

function Enemy(life, name, level){
    this.life = life;
    this.name = name;
    this.level = level;
}

Enemy.prototype.getInfo = function(){
    console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function(){
    console.log(`${this.name} has attacked!`);
};
Enemy.prototype.block = function(){
    console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell){
    //goal: to inherit everything from first constructor function
    //can use call:
    Enemy.call(this, life, name, level); //call allows inheritance from first constructor function to this one; basically makes it to Dragon.life = life, Dragon.name = life, etc.
    //keyword this is going to reference the Dragon object
    //For rest of params outside of Enemy constructor function, just define as normal:
    this.color = color;
    this.spell = spell;
}

//Inherit Prototype:
Dragon.prototype = Object.create(Enemy.prototype); //creates new Object with its prototype set to whatever is added as param(s)

Dragon.prototype.fireBreath = function(){ //adding new prototype value specific to Dragon constructor function
    console.log('FIRE BREATH');
};

const newDragon = new Dragon(100, 'Drogon', 25, 'green', 'fire');

console.log(newDragon);
newDragon.getInfo();
// console.log(newDragon);

var v = 1;

var f1 = function() {
    console.log(v);
}

var f2 = function() {
    var v = 2;
    f1();
};

f2();
