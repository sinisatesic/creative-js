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