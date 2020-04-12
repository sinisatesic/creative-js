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

