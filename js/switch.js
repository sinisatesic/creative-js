// const text = 'banana';
// let fruitNr = 0;
//
// switch(text){
//     case 'banana':
//         console.log('burnurnaz');
//         fruitNr = 1; //will change value of fruit to 1 if text = 'banana'
//         break;
//     case 'apple':
//         console.log('apploosarooh');
//         fruitNr = 2;
//         break;
//     case 'orange':
//         console.log('orange you glad you\'re an orange');
//         fruitNr = 3;
//         break;
//     default:
//         console.log('i love avacados');
//         break;
// }

let userInput = prompt('Tell me a fruit') //answer gets saved into userInput
let convertedValue = userInput.toLowerCase();
// console.log(convertedValue);

switch(convertedValue){
    case 'kiwi':
        alert('Kiwi is first food invented by the ocean boys');
        break;
    case 'banana':
        alert('My girlfriend bought 12 bananas for no reason');
        break;
    case 'apple':
        alert('Depending on which apple you buy, you may have a good or bad time');
        break;
    default:
        alert('what is fruit?');
        break;
}