
class Enemy {
    constructor(life, name, level) {
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getInfo(){
        console.log(this.life, this.name, this.level);
    }
}

const turtle = new Enemy(25, 'Squidlebuggle', 10);
const bug = new Enemy(1, 'bugymugy', 1);
console.log(turtle);

turtle.getInfo();
bug.getInfo();

class Bug extends Enemy{
    constructor(life, name, level, legs, dmg){
        super(life,name,level);
        //
        this.legs = legs;
        this.dmg = dmg;
    }
}

const john = new Bug(10, 'Buggy', 1, 6, 10);

console.log(john);
john.getInfo();