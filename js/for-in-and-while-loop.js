

const user = {
    name: 'Dev Ed',
    age: 25,
    subscribers: 200,
    money:' lolno'
}

//FOR-IN IS FOR OBJECTS

for (let x in user){
    console.log(x);
}

for (let x in user){
    console.log(user[x]);
}
//x above can be named anything; just represents properites in objeft

console.log(user.subscribers);
console.log(user['subscribers']); //same as above

//////////

//WHILE AND DO-WHILE

let i = 20;
while(i < 30){
    console.log(i);
    i++;        //if there's no increment/decrement, it will be infinite loop
}

let j = 20;
while(j < 30){
    console.log(j);
    j += 2; //increments by 2
}

//do - while -- remember, runs once regardless of conditional
let z = 0;

do {
    console.log(z);
    z++
}
while(z > 10);