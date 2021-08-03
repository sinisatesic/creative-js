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

const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector(".todo-nr b");
// console.log(todoNr);

const mainTitle = document.querySelector(".main-title");

const items = todoList.children;
//
// //ATTACH AN EVENT LISTENER - CLICK, SCROLL, RESIZING THE BROWSER; event listener listens to one of these
button.addEventListener('click', function(){
    // console.log('NEW ITEM ADDED -(anonymous function event)- ');
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length + 1}`;
    todoList.appendChild(newItem); //adding li tag item to todoList, which is ul with id todoList
    todoNr.innerText = items.length; //this is here so inner text updates itself with each event
}); //one time use: anonymous function
//
// // function addItem(){
// //     console.log('FUNCTION FOR EVENT');
// // }
//

button.addEventListener('keydown', function(event){
    if(event.keyCode === 81){ //if the event should be on specific key input; here is example with it being 'q'
        mainTitle.classList.toggle('color');
    }
    console.log(event);
    // mainTitle.style.color = "red"; //this way if you wish to manually add style properties, but that could get cumbersome
    // mainTitle.style.fontSize = "50px";
    // mainTitle.classList.add('color'); //add a class to element which can have multiple style properties already affiliated to it
    // mainTitle.classList.toggle('color'); //will check to see if class is attributed; if not, will add - if added, will remove
});
