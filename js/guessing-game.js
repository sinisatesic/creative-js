//Important to have pseudo code/comments to plan out project/goals

//guessing-game: so, we have to guess:

//Generate a random number (complete)
//Give user ability to guess number (complete)
//If they guess wrong, ask again (complete)
//If they guess correctly, provide message stating so (complete)

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