//1.  Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// // Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// // Final string: "apargrapepesple"
// Examples
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// fruitSalad(["raspberries", "mango"]) ➞ "erriesmangoraspb"

// fruitSalad(["banana"]) ➞ "anaban"
// Notes
// If a fruit has an odd number of letters, make the right side larger than the left.
// For example: "apple" will be sliced into "ap" and "ple".
// All fruits will be given in lowercase.

//moj odgovor:
function fruitSalad(arr) {
    let foist = arr.map(x => x.substring(0, x.length/2));
    let second = arr.map(x => x.substring(x.length/2, x.length));
    let thoid = foist.concat(second);
    return thoid.sort().join('');
}

//2. Derivative of a Function
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108
// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

//moj odgovor:
function derivative(b, m) {
    return b*(m**(b - 1));
}

//3. A Redundant Function
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

//4. How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// moj odgovor:
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

//5. Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples
// evenOrOdd("22471") ➞ "Even and Odd are the same"

// evenOrOdd("213613") ➞ "Even and Odd are the same"

// evenOrOdd("23456") ➞ "Even is greater than Odd"
// Notes
// The input will be a string of numbers.

// moj odgovor:
function evenOrOdd(string){

    let even = 0;
    let odd = 0;
    let firstPart = string.split('').map(Number);

    for(let i = 0; i < firstPart.length; i++){
        if(firstPart[i]%2===0){
            even += firstPart[i];
        }
        if(firstPart[i]%2===1){
            odd += firstPart[i]
        }
    }
    if (even < odd){
        return "Odd is greater than Even";
    } else if (even > odd){
        return "Even is greater than Odd";
    } else {
        return "Even and Odd are the same";
    }
}


//6. Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

// moj odgovor:
function toArray(obj) {
    bucket = [];
    for (var key in obj){
        bucket.push([key, obj[key]]);
    }
    return bucket;
}

// bolji odgovor:
function toArray(obj) {
    return Object.entries(obj);
}

