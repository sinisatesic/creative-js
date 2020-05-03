// //Important to have pseudo code/comments to plan out project/goals
//
// // guessing-game: so, we have to guess:
// //
// // Generate a random number (complete)
// // Give user ability to guess number (complete)
// // If they guess wrong, ask again (complete)
// // If they guess correctly, provide message stating so (complete)
//
// // function guessGame(){
// //     let randomNumber = Math.floor(Math.random() * 10); //if this was added in loop, it would re-generate a new number on each iteration of loop
// //     // console.log(randomNumber); //logging to ensure above var works
// //     let guess;
// //
// //     do {
// //         guess = prompt('What\'s da secret number? Iz from 0 to 10'); //let guess doesn't work because of scoping; would be only available in body of do-while. Var could work but best practice is to initialize it outside of loop
// //         console.log(guess);
// //
// //         if (randomNumber > guess){
// //             console.log('guess is too low');
// //         } else if (randomNumber < guess){
// //             console.log('guess is too high');
// //         }
// //     } while (guess != randomNumber);
// //     console.log('you done did it');
// // }
// //
// // guessGame();
//
//
//
// // function guessGame(){
// //     let randomNumber = Math.floor(Math.random() * 11);
// //     let guess;
// //
// //     do {
// //         guess = prompt('Pick num from 1 to 10');
// //         if (guess > randomNumber){
// //             console.log('too high bruv');
// //         } else if (guess < randomNumber){
// //             console.log('too low bruv');
// //         }
// //
// //     } while (guess != randomNumber);
// //     console.log('noice, ya won');
// // }
// //
// // guessGame();
//
// // function guess(){
// //     let randomNumber = Math.floor(Math.random() * 11);
// //     let guessNum;
// //
// //     do {
// //         guessNum = prompt('Pick num from 0 to 10');
// //         if (guessNum > randomNumber){
// //             alert('too high, guess lower');
// //         } else if (guessNum < randomNumber){
// //             alert('too low, guess higher');
// //         }
// //
// //     } while(randomNumber != guessNum);
// //     alert('ya did it');
// //
// // }
// // guess();
// //
// // function guessGame(){
// //     let randomNum = Math.floor(Math.random() * 10);
// //     let guess;
// //
// //     do {
// //         guess = prompt('guess num between 0 and 10');
// //
// //         if (randomNum > guess) {
// //             console.log('guessed too low');
// //         } else if (randomNum < guess) {
// //             console.log('guessed too high');
// //         }
// //
// //     } while (randomNum != guess);
// //     console.log('you guessed the correct number');
// // }
// //
// // guessGame();
// //
// // function guessGame(){
// //     let randomNumber = Math.floor(Math.random() * 10);
// //     let guess;
// //
// //     do {
// //         guess = prompt('pick number from 1 to 10');
// //
// //         if (randomNumber < guess) {
// //             console.log('guess is too high');
// //         } else if (randomNumber > guess) {
// //             console.log('guess is too low');
// //         }
// //     } while (randomNumber != guess)
// //     console.log('ya did it');
// // }
// //
// // guessGame();
//
// // function guessGame(){
// //     let randomNum = Math.floor(Math.random() * 10);
// //     let guess;
// //
// //     do {
// //         guess = prompt('Pick num from 1 and 10');
// //
// //         if (guess < randomNum){
// //             console.log('guessed too low');
// //         } else if (guess > randomNum){
// //             console.log('guessed too high');
// //         }
// //     } while (guess != randomNum);
// //     console.log('ya did it - ya win');
// // }
// // guessGame();
//
// // for(var i = 1; i <= 100; i++){
// //     if (i % 15 == 0) console.log('FizzBuzz');
// //     else if (i % 3 == 0) console.log('Fizz');
// //     else if (i % 5 == 0) console.log('Buzz');
// //     else console.log(i);
// // }
//
// // function fruit(name, color, shape){
// //     this.name = name;
// //     this.color = color;
// //     this.shape = shape;
// //
// //     this.describe = function(){
// //         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
// //     }
// // }
// // let melon = new fruit('melon','green','round');
// // console.log(melon.describe());
// // let banana = new fruit('banana','yellow','banana');
// // console.log(banana.describe());
// // let apple = new fruit('apple','red or green','round');
// // console.log(apple.describe());
//
// // function guessGame(){
// //     let randomNumber = Math.floor(Math.random() * 10);
// //     let guess;
// //
// //     do {
// //         guess = prompt('Guess number from 1 to 10');
// //         if (guess < randomNumber){
// //             console.log('guess too low');
// //         } else if (guess > randomNumber){
// //             console.log('guess too high');
// //         }
// //
// //     } while (randomNumber != guess);
// //     console.log('ayy you win');
// // }
// // guessGame();
//
// // function fruit(name, color, shape){
// //     this.name = name;
// //     this.color = color;
// //     this.shape = shape;
// //
// //     this.describe = function(){
// //         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
// //     }
// // }
// // let melon = new fruit('melon','green','round');
// // console.log(melon.describe());
//
// // for (var i = 1; i <= 100; i++){
// //     if (i % 15 == 0) console.log('FizzBuzz');
// //     else if (i % 3 == 0) console.log('Fizz');
// //     else if (i % 5 == 0) console.log('Buzz');
// //     else console.log(i);
// // }
//
// //finding second to highest value of array:
//
// // function nextBiggest(arr) {
// //     let max = -Infinity, result = -Infinity;
// //
// //     for (const value of arr) {
// //         const nr = Number(value)
// //
// //         if (nr > max) {
// //             [result, max] = [max, nr] // save previous max
// //         } else if (nr < max && nr > result) {
// //             result = nr; // new second biggest
// //         }
// //     }
// //
// //     return result;
// // }
// //
// // const arr = ['20','120','111','215','54','78'];
// // console.log(nextBiggest(arr));
// //with sort:
// // var arr = ['20','120','111','215','54','78'];
// //
// // arr.sort(function(a,b){
// //     return b-a;
// // });
// //
// // console.log(arr[1]);
//
//
// //check if string is a palindrome
// // const isPalindrome = (string) => {
// //     const regularOrder = string;
// //     const reverseOrder = regularOrder.split('').reverse().join('');
// //     console.log(regularOrder === reverseOrder);
// // }
// // isPalindrome('holloh');
//
// // function guessGame(){
// //     let randomNum = Math.floor(Math.random() * 11);
// //     let guess;
// //
// //     do {
// //         guess = prompt('guess num from 1 to 10');
// //
// //         if (guess < randomNum){
// //             console.log('guessed too low');
// //         } else if (guess > randomNum){
// //             console.log('guessed too high');
// //         }
// //     } while (guess != randomNum);
// //     console.log('you win');
// // }
// // // guessGame()
// //
// // function fruit(name,color,shape){
// //     this.name = name;
// //     this.color = color;
// //     this.shape = shape;
// //
// //     this.describe = function(){
// //         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
// //     }
// // }
// // let melon = new fruit('melon','green','round');
// // console.log(melon.describe());
// //
// // for(var i = 0; i <= 100; i++){
// //     if (i % 15 == 0) console.log('FizzBuzz');
// //     else if (i % 3 == 0) console.log('Fizz');
// //     else if (i % 5 == 0) console.log('Buzz');
// //     else console.log(i);
// // }
// //
// // const palindrome = (string2) => {
// //     let standard = string2;
// //     let reversed = string2.split('').reverse().join('');
// //     console.log(standard === reversed);
// // };
// // palindrome('aha');
//
// // function guessGame(){
// //     let randomNum = Math.floor(Math.random() * 10)
// //     let guess;
// //
// //     do {
// //         guess = prompt('pick num from 1 to 10');
// //         if (guess < randomNum) console.log('guessed too low');
// //         else if (guess > randomNum) console.log('guessed too high');
// //
// //     } while (guess != randomNum);
// //     console.log('ya win');
// // }
// // guessGame();
//
// // const isPalindrome = (string) => {
// //     const regularOrder = string;
// //     const reverseOrder = string.split('').reverse().join('');
// //     console.log(regularOrder === reverseOrder);
// //     // return regularOrder === reverseOrder;
// // };
// // isPalindrome("ahah");
//
// // const fruit = (name, color, shape) => {
// //     this.name = name;
// //     this.color = color;
// //     this.shape = shape;
// //
// //     this.describe = () => {
// //         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
// //     }
// // };
// // let melon = new fruit('melon','green','round');
// // console.log(melon.describe());
//
// // for (var i = 1; i <= 100; i++){
// //     if (i % 15 == 0) console.log('FizzBuzz');
// //     else if (i % 3 == 0) console.log('Fizz');
// //     else if (i % 5 == 0) console.log('Buzz');
// //     else console.log(i);
// // }
// //
// // const isPalin = (string) => {
// //     regularOrder = string;
// //     reverseOrder = regularOrder.split('').reverse().join('');
// //     console.log(regularOrder === reverseOrder);
// // }
// // isPalin('oww');
//
// // function guessGame(){
// //     let randomNum = Math.floor(Math.random() * 11);
// //     let guess;
// //
// //     do {
// //         guess = prompt('pick num from 1 and 10');
// //         if(guess < randomNum){
// //             console.log('guess is too low');
// //         } else if (guess > randomNum){
// //             console.log('guess is too high');
// //         }
// //     } while (guess != randomNum);
// //     console.log('you win');
// // }
// // guessGame();
//
// // function fruit(name, color, shape){
// //     this.name = name;
// //     this.color = color;
// //     this.shape = shape;
// //
// //     this.describe = function(){
// //         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
// //     }
// // }
// // let melon = new fruit('melon','green','round');
// // console.log(melon.describe());
//
// // const isPalindrome = (string) => {
// //     let regularOrder = string;
// //     let reverseOrder = regularOrder.split('').reverse().join('');
// //     console.log(regularOrder === reverseOrder);
// // };
// // isPalindrome('woop');
//
// // for (var i = 1; i <= 100; i++){
// //     if (i % 15 == 0) console.log('FizzBuzz');
// //     else if (i % 3 == 0) console.log('Fizz');
// //     else if (i % 5 == 0) console.log('Buzz');
// //     else console.log(i);
// // }
//
// //
// // const fib = (n) => {
// //     if (n === 1){
// //         return [0, 1];
// //     } else {
// //         let s = fib(n - 1);
// //         s.push(s[s.length - 1] + s[s.length - 2]);
// //         return s;
// //     }
// // };
// // console.log(fib(10));
//
// // const fi = () => {
// //     let arr = [];
// //     let i;
// //
// //     for(i = 0; i < 10; i++){
// //         if(i == 0 || i == 1){ // this is for first two sequences/places of array
// //             arr.push(i);
// //         } else {
// //             arr.push(arr[i - 1] + arr[i - 2]); //this requires 2 indices to function properly, because of the i - 2 (second to last index of array)
// //         }
// //     }
// //     return arr;
// // };
// // console.log(fi());
//
// //**********************//learn how to find fibonacci sequence up to 10 or so //**********************
//
// const fib = () => {
//     let arr = [];
//     let i;
//
//     for(i = 0; i <= 10; i++){ //conditional parameter will determine how far fib sequence goes
//         if(i == 0 || i == 1){ //if i is first iteration of 0 - 10, so 0 value iteration, or second iteration of 1, so 1 value of iteration
//             arr.push(i); //this will just push 0 and 1 to array to set platform for enough indices so else can proceed
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]); // last iteration and iteration before last iteration being added (main premise of fib sequence)
//         }
//     }
//         return arr;
// };
// console.log(fib());
//
// a[100] = 'fox';
// console.log(a.length);
//
// function logThis() {
//     this.desc = "logger";
//     console.log(this);
// }
// new logThis();
// console.log(logThis());

// function guessGame(){
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 1 and 10');
//         if(guess < randomNum) console.log('num is too low');
//         else if (guess > randomNum) console.log('num is too high');
//     } while (guess != randomNum);
//     console.log('ya win');
// }
// guessGame();

// const fib = () => {
//     let arr = [];
//     let i;
//
//     for(i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());

// const isPal = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(isPal('ahah'));

// for(var i = 0; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape'+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());

// function foo() {
//
//     function bar() {
//         setTimeout(
//             () => console.log('Curly'),
//             1000);
//     }
//
//     console.log('Larry');
//     return bar;
// }
// let x = foo();
// x();
// console.log('Moe');

// const f = n => n <= 1 ? 1 : n * f(n - 1);
// let g = f(4);

// let event = {
//     name: "Hot Dog and Burger Sunday",
//     financials: {
//         baseCost: "$19.99",
//         discountsAvailable: false,
//         maxCost: "$29.99"
//     },
//     subscribers: [
//
//     ]
// }
//
// let eventPrice;
//
// const assignEvent = ({ financials: { baseCost: price}}) => eventPrice = price;
// assignEvent(event);

// let arr1 = ['asdf', 'bdfd', 'kjkj'];
// let arr2 = ['cdfdf', 'eedf', 'zlkdfj'];
// let arr3 = arr1.concat(arr2).sort();
// console.log(arr3);

// function randomPosEvenNum(){
//     var randomNum = Math.ceil(Math.random() * 100);
//     if (randomNum % 2 !== 0){
//         return randomPosEvenNum();//if random num is not even, it re-runs function
//     }
//     return randomNum; //function keeps re-running until rand num, which is positive and even, is generated
// }
//
// console.log(randomPosEvenNum());

const isPal = (string) =>{
    let regularOrder = string;
    let reverseOrder = string.split('').reverse().join('');
    return regularOrder === reverseOrder;
};
console.log(isPal('aha'));


function fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}
let melon = new fruit('melon','green','round');
console.log(melon.describe());


for(var i = 1; i <= 100; i++){
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
}


const fib = () => {
    let arr = [];
    let i;
    for(i = 0; i <= 10; i++){
        if(i == 0 || i == 1){
            arr.push(i);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr;
};
console.log(fib());


const guessGame = () =>{
    let randomNum = Math.floor(Math.random() * 10);
    let guess;

    do{
        guess = prompt('pick num from 1 to 10');
        if(guess < randomNum) console.log('num is too low');
        else if (guess > randomNum) console.log('num is too high');
    } while (guess != randomNum);
    console.log('ya win');
};
// guessGame();


const randPosEvenNum = () => {
    let randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 !== 0){
        return randPosEvenNum();
    }
        return randomNum;
};
console.log(randPosEvenNum());
