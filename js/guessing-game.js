//Important to have pseudo code/comments to plan out project/goals

// guessing-game: so, we have to guess:
//
// Generate a random number (complete)
// Give user ability to guess number (complete)
// If they guess wrong, ask again (complete)
// If they guess correctly, provide message stating so (complete)

function guessGame(){
    let randomNumber = Math.floor(Math.random() * 10); //if this was added in loop, it would re-generate a new number on each iteration of loop
    // console.log(randomNumber); //logging to ensure above var works
    let guess;

    do {
        guess = prompt('What\'s da secret number? Iz from 0 to 10'); //let guess doesn't work because of scoping; would be only available in body of do-while. Var could work but best practice is to initialize it outside of loop
        console.log(guess);

        if (randomNumber > guess){
            console.log('guess is too low');
        } else if (randomNumber < guess){
            console.log('guess is too high');
        }
    } while (guess != randomNumber);
    console.log('you done did it');
}

guessGame();



// function guessGame(){
//     let randomNumber = Math.floor(Math.random() * 11);
//     let guess;
//
//     do {
//         guess = prompt('Pick num from 1 to 10');
//         if (guess > randomNumber){
//             console.log('too high bruv');
//         } else if (guess < randomNumber){
//             console.log('too low bruv');
//         }
//
//     } while (guess != randomNumber);
//     console.log('noice, ya won');
// }
//
// guessGame();

// function guess(){
//     let randomNumber = Math.floor(Math.random() * 11);
//     let guessNum;
//
//     do {
//         guessNum = prompt('Pick num from 0 to 10');
//         if (guessNum > randomNumber){
//             alert('too high, guess lower');
//         } else if (guessNum < randomNumber){
//             alert('too low, guess higher');
//         }
//
//     } while(randomNumber != guessNum);
//     alert('ya did it');
//
// }
// guess();
//
// function guessGame(){
//     let randomNum = Math.floor(Math.random() * 10);
//     let guess;
//
//     do {
//         guess = prompt('guess num between 0 and 10');
//
//         if (randomNum > guess) {
//             console.log('guessed too low');
//         } else if (randomNum < guess) {
//             console.log('guessed too high');
//         }
//
//     } while (randomNum != guess);
//     console.log('you guessed the correct number');
// }
//
// guessGame();
//
// function guessGame(){
//     let randomNumber = Math.floor(Math.random() * 10);
//     let guess;
//
//     do {
//         guess = prompt('pick number from 1 to 10');
//
//         if (randomNumber < guess) {
//             console.log('guess is too high');
//         } else if (randomNumber > guess) {
//             console.log('guess is too low');
//         }
//     } while (randomNumber != guess)
//     console.log('ya did it');
// }
//
// guessGame();

// function guessGame(){
//     let randomNum = Math.floor(Math.random() * 10);
//     let guess;
//
//     do {
//         guess = prompt('Pick num from 1 and 10');
//
//         if (guess < randomNum){
//             console.log('guessed too low');
//         } else if (guess > randomNum){
//             console.log('guessed too high');
//         }
//     } while (guess != randomNum);
//     console.log('ya did it - ya win');
// }
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
// let banana = new fruit('banana','yellow','banana');
// console.log(banana.describe());
// let apple = new fruit('apple','red or green','round');
// console.log(apple.describe());

// function guessGame(){
//     let randomNumber = Math.floor(Math.random() * 10);
//     let guess;
//
//     do {
//         guess = prompt('Guess number from 1 to 10');
//         if (guess < randomNumber){
//             console.log('guess too low');
//         } else if (guess > randomNumber){
//             console.log('guess too high');
//         }
//
//     } while (randomNumber != guess);
//     console.log('ayy you win');
// }
// guessGame();

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

// for (var i = 1; i <= 100; i++){
//     if (i % 15 == 0) console.log('FizzBuzz');
//     else if (i % 3 == 0) console.log('Fizz');
//     else if (i % 5 == 0) console.log('Buzz');
//     else console.log(i);
// }