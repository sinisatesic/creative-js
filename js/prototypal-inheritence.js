
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