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

// const isPal = (string) =>{
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(isPal('aha'));
//
//
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
//
// for(var i = 1; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }
//
//
// const fib = () => {
//     let arr = [];
//     let i;
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
//
//
// const guessGame = () =>{
//     let randomNum = Math.floor(Math.random() * 10);
//     let guess;
//
//     do{
//         guess = prompt('pick num from 1 to 10');
//         if(guess < randomNum) console.log('num is too low');
//         else if (guess > randomNum) console.log('num is too high');
//     } while (guess != randomNum);
//     console.log('ya win');
// };
// // guessGame();
//
//
// const randPosEvenNum = () => {
//     let randomNum = Math.floor(Math.random() * 100);
//     if (randomNum % 2 !== 0){
//         return randPosEvenNum();
//     }
//         return randomNum;
// };
// console.log(randPosEvenNum());

// const fib = () => {
//     let arr = [];
//     let i;
//     for(i = 0; i <= 11; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());

// //ternary of fib below
// const fib = () => {
//     let arr = [];
//     let i;
//     for(i = 0; i <= 10; i++){
//         i == 0 || i == 1 ? arr.push(i) : arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr;
// };
// console.log(fib());
//
// const rev = (string) =>{
//     let i;
//     let reversed = "";
//     for(i = string.length -1; i >= 0; i--){
//         reversed += string[i];
//     }
//     return reversed;
// };
// console.log(rev('ahh'));
//
// // Write a function to return a double value for the average of all numbers in a passed down int array.
// //
// //
// //
// //
// //
// // 4:27
// // my answer
// // 4:27
// function doubleAvg(arr) {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(doubleAvg([5, 5, 5, 5, 5]));

//above refactored to e6:

// const doubleAvg = (arr) => {
//     let sum = 0;
//
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
//
// console.log(doubleAvg([5, 5, 5, 5, 5]));

// write a function that takes in array of numbers and returns highest number of array
// function arrayHigh(array){
//     var highest = 0;
//
//     for(var i = 0; i < array.length; i++){
//         if (array[i] > highest){
//             highest = array[i];
//         }
//     }
//     return highest;
// }
//
// console.log(arrayHigh([1, 2, 3, 4, 5,9]));

//above refactored for e6:

// const arrayHigh = (array) => {
//     let highest = 0;
//
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > highest){
//             highest = array[i];
//         }
//     }
//     return highest;
// };
// console.log(arrayHigh([1, 2, 3, 4, 5,9]));
//
// let guessGame = () => {
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 1 to 10');
//         if(guess < randomNum) console.log('num too low');
//         else if (guess > randomNum) console.log('num too high');
//     } while (guess != randomNum);
//     console.log('you win');
// };
// guessGame();

// function fib(){
//     let arr = [];
//     for(var i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// }
// console.log(fib());

// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());


// function isPal(string) {
//     var regularOrder = string;
//     var reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// }
//
// console.log(isPal('aha'));

// const isPal = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(isPal('ahah'));

// function titleCase(str) {
//     words = str.toLowerCase().split(' ');
//
//     for(var i = 0; i < words.length; i++) {
//         var letters = words[i].split('');
//         letters[0] = letters[0].toUpperCase();
//         words[i] = letters.join('');
//     }
//     return words.join(' ');
// }
//
// console.log(titleCase("I'm a little tea pot"));

// function guessGame(){
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 1 to 10');
//         if(guess < randomNum) console.log('guess too low');
//         else if(guess > randomNum) console.log('guess too high');
//     } while (guess != randomNum);
//     console.log('you win');
// }
// // guessGame();
//
// function fruit(name,color,shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function() {
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// const isPal = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(isPal('ahah'));
//
// const fib = () =>{
//     let arr = [];
//
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());

// function guessGame(){
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 1 and 10');
//         if(guess < randomNum){
//             console.log('too low');
//         } else if (guess > randomNum){
//             console.log('too high');
//         }
//     } while (guess != randomNum);
//         console.log('ya did it');
// }
// guessGame();
// const fib = () =>{
//     let arr = [];
//
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());
// const palin = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(palin('aha'));
// const highestNum = (arr) =>{
//     let highest = 0;
//
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
// console.log(highestNum([1, 2, 3, 4]));
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());

// for (var i = 0; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// function fib(){
//     let arr = [];
//
//     for(let i = 0; i <= 12; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// }
//
// console.log(fib());

// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());

// for(var i = 1; i <= 100; i++){
//     if (i % 15 == 0) console.log('fizzbuzz');
//     else if (i % 3 == 0) console.log('fizz');
//     else if (i % 5 == 0) console.log('buzz');
//     else console.log(i);
// }

// function isPal(string){
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// }
//
// console.log(isPal('aha'));

// function isHighest(array){
//     let highest = 0;
//
//     for(var i = 0; i <= array.length; i++){
//         if(highest < array[i]){
//             highest = array[i];
//         }
//     }
//     return highest;
// }
//
// console.log(isHighest([1, 2, 3, 4]));

// const guessGame = () =>{
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 0 to 10');
//         if (guess < randomNum){
//             console.log('guess too low');
//         } else if (guess > randomNum){
//             console.log('guess too high');
//         }
//     } while (guess != randomNum);
//     console.log('you did it');
// };
// guessGame();

// const fib = () =>{
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());

// const palindrome = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// };
// console.log(palindrome('ahhsa'));

// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// for(var i = 1; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// const isHighest = (arr) =>{
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
//
// console.log(isHighest([1, 2, 3, 4, 5]));

//
// const guessGame = () => {
//     let randomNum = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('pick num from 0 to 10');
//         if(guess < randomNum){
//             console.log('guess too low');
//         } else if (guess > randomNum){
//             console.log('guess too high');
//         }
//     } while (guess != randomNum);
//     console.log('you win');
// };
// guessGame();

// for(var i = 1; i <= 100; i++){
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
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());

// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 12; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());

// const palin = (string) => {
//     let regularOrder = string;
//     let reverseOrder = string.split('').reverse().join('');
//     return regularOrder === reverseOrder
// };
// console.log(palin('aha'));

// function isHighest(arr){
//     let highest = 0;
//     for(var i = 0; i < arr.length; i++){
//         if (arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// }
//
// console.log(isHighest([1, 2, 3, 4]));

// function countSyllables(str) {
//     let num = 0;
//     for(let i = 0; i < str.length; i++){
//         if((str.charAt[0] === str.charAt[2]) && (str.charAt[1] === str.charAt[3])){
//             num++;
//         }
//     }
//
//     return num/2;
// }
//
// console.log(countSyllables("lalala"));
// function countArr(arr){
// //     for(let i = 0; i <= arr.length; i++){
// //         console.log(arr[i]);
// //     }
// // }
// //
// // console.log(countArr([1, 2, 3, 4]));
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// // function guessingGame(){
// //     let randomNum = Math.floor(Math.random() * 11);
// //     let guess;
// //
// //     do {
// //         guess = prompt("pick num from 1 to 10");
// //         if(guess < randomNum) console.log('guess too low');
// //         else if (guess > randomNum) console.log('guess too high');
// //     } while (guess != randomNum);
// //     console.log('you win');
// // }
// // guessingGame();
//
// function highest(arr){
//     let num = 0;
//     for(var i = 0; i <= arr.length; i++){
//         if (arr[i] > num){
//             num = arr[i];
//         }
//     }
//     return num;
// }
//
// console.log(highest([1, 2, 3]));
//
// function isPal(str){
//     let regularOrder = str;
//     let reverseOrder = str.split('').reverse().join('');
//     return regularOrder === reverseOrder;
// }
//
// console.log(isPal('ahah'));
//
// function fib(){
//     let bucket = [];
//     for(var i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             bucket.push(i);
//         } else {
//             bucket.push(bucket[i - 1] + bucket[i - 2]);
//         }
//     }
//     return bucket;
// }
//
// console.log(fib());
//
//
//
//
//
//
// const isPal = (string) => {
//     let regular = string;
//     let reverse = regular.split('').reverse().join('');
//     return regular === reverse;
// };
// console.log(isPal('ahah'));
//
// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if (i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());
//
// const guessGame = () => {
//     let guess;
//     let randomNum = Math.floor(Math.random() * 11);
//
//     do{
//
//         guess = prompt('Pick num from 1 to 10');
//         if(guess < randomNum){
//             console.log('guess too low');
//         } else if (guess > randomNum){
//             console.log('guess too high');
//         }
//     } while (guess != randomNum);
//     console.log('you win');
// };
// guessGame();

// for(let i = 1; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// const fruit = (name, color, shape) => {
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());

// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// const isHighest = (arr) => {
//     let num = 0;
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > num) {
//             num = arr[i];
//         }
//     }
//     return num;
// };
// console.log(isHighest([1, 2, 3, 4]));
//
//
//
// for(let i = 1; i <= 100; i++){
//     if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else if (i % 15 == 0) console.log('FizzBuzz');
//     else console.log(i);
// }
//
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest) highest = arr[i];
//     }
//     return highest;
// };
// isHighest([1,2,3,4]);
//
// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// fib();

// function fruit(name,color,shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
// console.log(isHighest([1, 2, 3, 4, 5]));
//
// const isPal = (string) => {
//     let regular = string;
//     let reverse = string.split('').reverse().join('');
//     return regular === reverse;
// };
// console.log(isPal('aha'));
//
// const guessGame = () => {
//     let guess;
//     let randomNum = Math.floor(Math.random() * 11);
//
//     do {
//         guess = prompt('Pick num from 1 to 10');
//         if(guess < randomNum) console.log('guess too low');
//         else if(guess > randomNum) console.log('guess too high');
//     } while (guess != randomNum);
//     console.log('you win');
// };
// guessGame();
//
// for(let i = 1; i <= 100; i++){
//     if(i % 15 == 0) console.log('FizzBuzz');
//     else if(i % 3 == 0) console.log('Fizz');
//     else if(i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// const reverse = (string) => {
//     return string.split('').reverse().join('');
// }
// console.log(reverse('hello there'));
//
// const rev = (string) => {
//     for(let i = string.length - 1; i > string.length; i--){
//        return string[i];
//     }
// }
// console.log(rev('hello there'));

// function fruit(name,color,shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
//
// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//         arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
// console.log(fib());
//
// for(let i = 1; i <= 100; i++){
//     if(i % 15 == 0) console.log('FizzBuzz');
//     else if(i % 3 == 0) console.log('Fizz');
//     else if(i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }
//
// const isPal = (string) => {
//     let regular = string;
//     let reverse = string.split('').reverse().join('');
//     return regular === reverse;
// };
// console.log(isPal('ahoy'));

// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// const fib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// const isPal = (string) => {
//     let reg = string;
//     let rev = reg.split('').reverse().join('');
//     return reg === rev;
// }
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
//
// for(let i = 1; i <= 100; i++){
//     if(i % 15 == 0) console.log('FizzBuzz');
//     else if(i % 3 == 0) console.log('FIzz');
//     else if(i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// const fib = () => {
//     let arr = []
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// const isPal = (string) => {
//     let reg = string;
//     let rev = string.split('').reverse().join('');
//     return reg === rev;
// };
//
// const highest = (arr) => {
//     let high = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > high){
//             high = arr[i];
//         }
//     }
//     return high;
// };
//
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// for(let i = 1; i <= 100; i++){
//     if(i % 15 == 0) console.log('FizzBuzz');
//     else if(i % 3 == 0) console.log('Fizz');
//     else if(i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }

// const isPal = (string) => {
//     let reg = string;
//     let rev = string.split('').reverse().join('');
//     return rev === reg;
// };
//
// const isFib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
// //can also be return Math.max(...arr);
//
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon', 'green', 'round');
// console.log(melon.describe());
//
// const isFib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// let isPal = (string) => {
//     let reg = string;
//     let rev = string.split('').reverse().join('');
//     return reg === rev;
// };
//
// let isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
//
// function guessGame(){
//     let guess;
//     let randomNum = Math.floor(Math.random() * 10);
//     do {
//         guess = prompt('pick num from 1 to 10');
//         if(guess > randomNum){
//             console.log('guess too high');
//         }else if(guess < randomNum){
//             console.log('guess too low');
//         }
//     }while(guess !== randomNum);
//    console.log('you did it');
// }
// guessGame();

// const isPal = (string) => {
//     let reg = string;
//     let rev = string.split('').reverse().join('');
//     return reg === rev;
// };
//
// const isFib = () => {
//     let arr = [];
//     for(let i = 0; i <= 10; i++){
//         if(i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// const isHighest = (arr) => {
//     let highest = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest;
// };
//
// function fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//     this.describe = function(){
//         return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new fruit('melon','green','round');
// console.log(melon.describe());
//
// for(let i = 1; i <= 100; i++){
//     if(i % 15 === 0) console.log('FizzBuzz');
//     else if(i % 3 === 0) console.log('Fizz');
//     else if(i % 5 === 0) console.log('Buzz');
//     else console.log(i);
// }

const guessGame = () => {
    let guess;
    let randomNum = Math.floor(Math.random() * 11);

    do {
        guess = prompt('pick num from 1 to 10');
        if (guess < randomNum) {
            console.log('too low');
        } else if (guess > randomNum) {
            console.log('too high');
        }
    } while (guess != randomNum);
    console.log('you did it');
};

function fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function () {
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

let melon = new fruit('melon', 'green', 'round');
console.log(melon.describe());

const isHighest = (arr) => {
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
};

const isPal = (string) => {
    let reg = string;
    let rev = string.split('').reverse().join('');
    return reg === rev;
};

const fib = () => {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
        if (i == 0 || i == 1) {
            arr.push(i);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr;
};

for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
}
;

const poop = '';
switch (poop) {
    case 'a' :
        console.log('lsdkf');
        break;
    case 'b' :
        console.log('oiuoiu');
        break;
    default:
        console.log('pooop');
}

document.addEventListener('DOMContentLoaded', analyzeColor);

let userCol;

function analyzeColor() {
    userCol = prompt('pick a color');

    if (userCol == 'blue') {
        alert('blue abidibadidai');
    } else if (userCol == 'red') {
        alert('ladksfjkasdfj');
    } else if (userCol == 'purp') {
        alert('skurp');
    } else {
        alert('idk man');
    }
}

analyzeColor();


function calculateTotal(luckNum, total) {
    // luckNum = Math.floor(Math.random() * 6);
    // total = prompt('total bill?');

    if (luckNum == 0) {
        return total;
    } else if (luckNum == 1) {
        return total - (total * .10);
    } else if (luckNum == 2) {
        return total - (total * .25);
    } else if (luckNum == 3) {
        return total - (total * .35);
    } else if (luckNum == 4) {
        return total - (total * .5);
    } else if (luckNum == 5) {
        return total - total;
    }
}

let luckyNum = Math.floor(Math.random() * 6);
let total = prompt('what total is');
alert('ya lucky waz ' + luckyNum);
alert('ya price be ' + total + ' befo, and now iz ' + calculateTotal(luckyNum, total));



function one(){
    let ask = confirm('wanna number?');
    let prompty;
    while (ask === true){
        prompty = Number(prompt('enter num then'));
        if (isNaN(prompty)){
            alert('NaN fam');
            break;
        }else if (prompty % 2 == 0){
            alert('dis be even');
        }else if (prompty % 2 != 0){
            alert('dis be odd');
        }
        alert('ya num plus 100 IS ' + parseInt(100 + prompty));
        if (prompty < 0) {
            alert('AND IZ NEGATIVE');
            break;
        } else if (prompty > 0) {
            alert('AND IS POSITIVE');
            break;
        }
    }
    alert('ok bai');
}


function showMultTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + ' x ' + i + ' = ' + (num*i));
    }
}

for(let i = 0; i < 10; i++){
    let rand = Math.floor((Math.random() * 180) + 20);
    rand % 2 === 0 ? console.log(rand + ' is even') : console.log(rand + ' is odd');
}

for(let i = 100; i >= 5; i-=5){
    console.log(i);
}


let userNum = Number(prompt('pick odd njm from 1 to 50'));
for(let i = 1; i <= 50; i+=2){
    if (i === userNum){
        console.log('skippy');
        continue;
    }else {
        console.log(i);
    }
}
do{

    var userNumber = parseFloat(prompt("Please pick odd number from 1 to 50"));

    if(userNumber < 1 && userNumber > 50){
        alert('user number not between 1 and 50; please pick diff number');
    } else if(userNumber % 2 === 0){
        alert('user number not odd; please pick diff number');
    } else if (isNaN(userNumber)){
        alert('this is not a number; please pick number');
    } else {
        alert('Yes, you picked an odd number between 1 and 50');
        break;
    }

} while(true);

for(var i = 1; i < 10; i++){
    console.log(i.toString().repeat(i));
}

let k = 2;
while(k < 65536){
    console.log(k);
    k*=2;
}

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesBought){
        allCones -= conesBought;
        console.log(conesBought + ' cones sold');
    } else if (allCones < conesBought){
        console.log('Cannot sell you ' + conesBought + ', I only have '+allCones+' left')
    }
} while (allCones > 0);
console.log('all cones sold');
