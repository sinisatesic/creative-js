

const listUsers = ['Blark', 'Slark', 'Flark'];

//to access elements in array:
listUsers[0];
listUsers[1];
listUsers[2];

console.log(listUsers[0]); //will log Blark

console.log(typeof listUsers); //will log Object

listUsers.pop();

console.log(listUsers); //removes last element

listUsers.push('NEW'); //appends new element into array (at end of it)

console.log(listUsers); //now container NEW element

listUsers.shift(); //removes first element in array

listUsers.unshift('ANOTHA ONE'); //appends new element at beginning of array

listUsers.length; // returns number of elements in array

listUsers.indexOf('Blark'); //returns location/index of where element is in array

