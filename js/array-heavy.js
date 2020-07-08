//primitives vs reference types
//(objects and arrays reference types)
const names = ['Io', 'Dio', 'Kio'];

names[1] = 'Lio';
//above WILL change Dio to Lio, even tho originally it's as const
//however, what one CANNOT do is change whole/new array
names.push('Tio');

console.log(names);

//if you copy over a previous array, even if you make mods
//to new array, it will always reference/change original
//OBJECTS and ARRAYS will always keep reference, hence their type

const tweet = {
    name: 'Alo',
    tweets: 20,
    age: 26
};

const newTweet = tweet;
newTweet.tweets = 21; //will modify original object, 'tweet'

console.log(tweet); //will show modify on original object

//

let bank = 250;
let newBank = bank; // 250

newBank = 500;

console.log(bank, newBank); //250, 500
