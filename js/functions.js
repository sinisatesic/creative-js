//
// function greet(){
//     let target = "poopboi";
//     let name = prompt(`What ya name, ${target}?`);
//     console.log(`Welcome, ${name}`);
// }
//     console.log(`rest of code`);
//
//
// function signUP(){
//     greet();
// }
//
// signUP();

////

function testingText(text, age){
    console.log(`welcome to da dojo, ${text}. You is ${age}?`);
}
testingText(`Trogdor`,19348);

//

console.log(Math.random());
//
console.log(Math.max(1, 7)); //will return highest number of 2 input arguments

let maxNum = Math.max(1,7);
console.log(maxNum);
//

function max(num1, num2){
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

let value1 = max(1, 5);
console.log(value1);
//

function maxSecondExample(nr1 = 0, nr2 = 0) {
    if (nr1 > nr2) {
        return nr1 * 10;
    } else {
        return nr2 * 10;
    }
}
let value2 = maxSecondExample(5);
console.log(value2); //will output 50; works with one argument when syntax formatted this

// higher order
// less over higher-order functions

// higher-order function are an important components/column in functional programming
// in JavaScript

// benefits of functional programming in JS: less code, fewer bugs, easier-to-reason code

// with functions in JS, they are values; you can assign a variable the value of an anonymous function, for example

// why are higher order functions good?
// composition: we can put one function into another, etc

// FILTER

// below is an example using higher order function 'filter'
// first, let's say there's array of objects:

var animals = [
    { name: 'flyff', species: 'rabbit' },
    { name: 'caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// below is example of doing this without filter and with regular for loop

let dogs = []
for (i = 0; i < animals.length; i++){
    if (animals[i].species === 'dog'){
        dogs.push(animals[i]);
    }
}

// below is with filter:

let dogs = animals.filter(function(animal){
    return animal.species === 'dog';
})
// argument is another function; functions that you use in other functions as such as call-back functions
// the above will return an array of only dog species objects


// some additional cool tricks:

let isDog = function(animal){
    return animal.species === 'dogs'
}

let dogs = animals.filter(isDog); // will filter only for dog animals
let otherAnimals = animals.reject(isDog); // will produce animals that are not dogs

// functional programming in JS allows functional units to be composed separately, which makes for easier debugging