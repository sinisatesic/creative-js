
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// spread for arrays
// sort creates copy of array and doesn't modify original

const descRating = [...ratings];
descRating.sort((a,b) => b - a);
console.log(descRating); //makes copy of original array; sorts in descending order

const ascRating = [...ratings];
ascRating.sort((a,b) => a - b);
console.log(ascRating);

//
const name = 'sini';

const letters = [...name];
// above same as:
// const letters = name.split('');

console.log(letters);

const names = ['bob', 'schwab'];
const otherNames = ['scooby', 'doo'];

const allNames = names.concat(otherNames); //concat returns new array
console.log(allNames);

//can use spread to achieve same as above

const allNamesSpread = [...names, ...otherNames];
console.log(allNamesSpread);

