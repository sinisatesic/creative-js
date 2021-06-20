// const isFib = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++){
//         if (i == 0 || i == 1){
//             arr.push(i);
//         } else {
//             arr.push(arr[i - 1] + arr[i - 2]);
//         }
//     }
//     return arr;
// };
//
// const pal = (string) => {
//     let reg = string;
//     let rev = string.split('').reverse().join('');
//     return reg === rev;
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
// function Fruit(name, color, shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;
//     this.describe = function(){
//         return 'A '+this.name+' and is the color '+this.color+' and is the shape '+this.shape;
//     }
// }
// let melon = new Fruit('melon','green','round');
// console.log(melon.describe());

const guessGame = () => {
    let guess;
    let randomNum = Math.floor(Math.random() * 11);
    do {
        guess = prompt('pick num from 1 to 10');
        if (randomNum > guess){
            console.log('num too low');
        } else if(randomNum < guess) {
            console.log('num too high');
        }
    } while (guess != randomNum);
    console.log('ya win');
};

const fib = () => {
    let arr = [];
    for(let i = 0; i <= 10; i++){
        if (i == 0 || i == 1){
            arr.push(i);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
    }
    return arr;
};

const isPal = (string) => {
    let reg = string;
    let rev = string.split('').reverse().join('');
    return reg === rev;
};

const isHighest = (arr) => {
    let highest = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > highest){
            highest = arr[i];
        }
    }
    return highest;
};

for(let i = 1; i <= 100; i++){
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
}

const poop = (n) => {
    for(let i = 1; i <= n; i++){
        if(i % 15 == 0) console.log('FizzBuzz');
        else if(i % 3 == 0) console.log('Fizz');
        else if(i % 5 == 0) console.log('Buzz');
        else console.log(i);
    }
};

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
        return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}
let melon = new Fruit('melon','green', 'round');
console.log(melon.describe());

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
        return `this ${name} is the color ${color} and is the shape ${shape}`;
    }
}
let melon = new Fruit('melon', 'green','round');
console.log(melon.describe());