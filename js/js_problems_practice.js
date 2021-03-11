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