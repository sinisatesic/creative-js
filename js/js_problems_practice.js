// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

//moj odgovor:

function countTrue(arr) {
    let counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            counter++;
        } else if (arr === []){
            counter = 0;
        }
    }
    return counter;
}

//druge odgovere:

function countTrue(arr) {
    return arr.filter(x=>x==true).length
}

//

const countTrue = r => r.filter(Boolean).length



// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

//moj odgovor:

function redundant(str) {
    return function(){
        return str;
    }
}

//drugi odgovor:

const redundant = str => () => str;


// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

//mor odgovor:

function toArray(obj) {
    bucket = [];
    for (var key in obj){
        bucket.push([key, obj[key]]);
    }
    return bucket;
}

//druge odgovore:

function toArray(obj) {
    return Object.entries(obj);
}

//

function toArray(obj) {
    return Object.keys(obj).map(x => [x, obj[x]]);
}


//////////////////

// 3.3.21 - practice problems:

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

// moj odgovor:

function changeEnough(change, amountDue) {
    let q, d, n, p;
    //quarters, dimes, nickels, pennies.
    for(let i = 0; i < change.length; i++){
        q = change[0] * .25;
        d = change[1] * .10;
        n = change[2] * .05;
        p = change[3] * .01;
        if((q+d+n+p) >= amountDue){
            return true;
        }
        return false;
    }
}

// druge odgovore:

function changeEnough(change, amountDue) {
    let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
    return sum >= amountDue;
}

//

function changeEnough([q, d, n, p], amountDue) {
    return (q * 0.25 + d * 0.1 + n * 0.05 + p * 0.01) >= amountDue
}

//

const changeEnough = (change, amountDue) => {
    change[0] *= 0.25;
    change[1] *= 0.1;
    change[2] *= 0.05;
    change[3] *= 0.01;

    return change.reduce((acc, val) => acc + val, 0) >= amountDue;
}

//********************* */
/// ------ //
//********************* */


// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that gives the number of dots with its corresponding triangle number of the sequence.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220


// moj odgovor:

function triangle(n) {
    return n*(n+1)/2;
}


// druge odgovore:

function triangle(n) {
    var count = 0;
    for(var num =0; num <= n; num++){
        count = count + num;
    }
    return count
}


//

triangle=n=>n*++n/2


///////////////

// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

function arrayOfMultiples (num, length) {
    let arr = [];
    for(let i = 1; i <= length; i++){
        arr.push(i * num);
    }
    return arr;
}

///////

// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.

/*class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}*/


class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){return Math.PI*((this.radius)*(this.radius))}
    getPerimeter(){return 2*Math.PI*(this.radius)};
}

//unquote and use run to test these cases
let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());


///////////

// Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23
// Notes
// There will be at least two numbers in the array.

const secondLargest = a => a.sort((a,b)=> b - a)[1];

// drugi odgovor:

function secondLargest(arr) {
    max = Math.max(...arr);
    let newArr = arr.filter(item => item != max)
    console.log(newArr)
    return Math.max(...newArr)

}


//

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples
// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
// Notes
// Numbers will always be below 1024 (not including 1024).
// The && operator could be useful.
// The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
// If a binary conversion for 0 is attempted, return "0".

function binary(decimal) {
    return decimal.toString(2);
}

// jeli:

function binary(decimal) {
    let result = "";
    if (decimal == 0) {
        result = "0";
    }
    while (decimal > 0) {
        result += decimal % 2;
        decimal = Math.floor(decimal/2);
    };
    return result.split("").reverse().join("");
}


////////////

// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

//

const potatoes = s => s.match(/potato/g).length;

// jeli:

function potatoes(str) {
    var arr = str.split("potato")
    return arr.length-1
}

// jeli:

potatoes = s => s.split("potato").length-1

// quick filter practice:

// Filter is similar to find, but returns multiple values/elements

const videos = ['Matrix', 'Matrix 2', 'Matrix 3'];

const filtering = videos.filter(function(video){
    return video.length < 7;//will return filtered elements within a new array
});

//can also work on array of objects
const games = [
    {title: 'Halo', rating: 10},
    {title: 'Starcraft II', rating: 10},
    {title: 'Fortnite', rating: 1}
];

const goodGames = games.filter(function(game){
    // console.log(game);
    return game.rating > 1
});


// some practice with guard clause:

// quick reference to functional programming without else/else-if

// original syntax with nested else/if-else

function canDrink(person) {
    if (person?.age != null) {
        if (person.age < 18) {
            console.log("Nope")
        } else if (person.age < 21) {
            console.log("Not in the US")
        } else {
            console.log("Yes")
        }
    } else {
        console.log("You are not a person")
    }
}

const p = {
    age: 22,
}

canDrink(p);

// reminder: guard clauses can help with removal of nesting

// refactored, without hested conditionals, and guard clause:

// "Exit early whenever possible"

function canDrinkBetter(person) {
    if (person?.age == null) {
        return console.log("You are not a person");
    }

    const result = canDrinkResponse(person.age)
    console.log(result)
}

function canDrinkResponse(age) {
    if (age < 18) return "Nope";
    if (age < 21) return "Not in the US";
    return "Yarp";
}

const p = {
    age: 9,
}

canDrinkBetter(p);


//
// keyword that gets created in global execution context, or when another function is invoked

console.log(this) //by default, refers to the Window object in console

// the keyword this is basically a point referring to an object
// this keyword can change which object it points to

function sayThis(){
    console.log(this);
}
sayThis(); // still refers to Window object

// this becomes a bit different/more useful with objects:

const user = {
    name: 'sini',
    sayHi(){ // reminder: methods are functions in objects
        console.log(this); // keyword "this" gets set when function invoked
    }
};

user.sayHi(); // keyword this will refer to "user" object itself
// so, when "this" is used in method within object, it will point to that object
// "this" becomes particularly useful for creating objects dynamically, or values dynamically

const admin = {
    name: 'admin'
};

function wazzup(){
    console.log(this);
};

user.wazuhh = wazzup;
admin.wazuhh = wazzup;

user.wazuhh(); //refers to user object
admin.wazuhh(); //refers to admin object

// THIS USED WITH DOM

const lists = document.querySelectorAll('li');

lists.forEach(li => {
    li.addEventListener('click', function(){
        console.log(this); // will refer specific element it is attached to; whichever is clicked per the event
    });
});

// it is important to remember global execution context with this keyword
// because if multiple functions are called within an object, after initial, "this" will no longer refer to original object properties
// UNLESS you use es6 - arrow function

const anotherOne = {
    name: "DJ K",
    songs: ['bad', 'more bad', 'super bad'],
    greet(){
        console.log(`hi ${this.name}`);
        //add function in greet() method
        const getSongs = () => { //use arrow function inside of methods to avoid this pointing to Window object
            // arrow functions DO NOT get a new keyword of "this" in this context
            console.log(`you currently have ${this.songs.length} bad songs`);

            this.songs.forEach(song => { //another example to reiterate arrow function use for these situations
                console.log(this.name);
            })
        };
        getSongs();
    }
};

anotherOne.greet();


// prototypal inheritance


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