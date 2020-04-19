
const names = ['Dev Ed', 'Barbie', 'Logic', 'Mf Doom', 'Tool'];

for (let name of names){
    console.log(name);  //print each element of array
}

for (let name of names){
    console.log(names.indexOf(name)); //to print index of each
}

names.forEach(function(name, index){ //for each can take 3 parameters
    console.log(name, index)    //printing name and index of each element in array
});

//to break out of loop:

for (let name of names) {
    if (name === 'Tool'){
        console.log('breakin');
        break;
    }
    console.log(name);
}

// names.forEach(function (name, index){
//     if(name === 'Tool'){
//         console.log('breakin');
//         break;          //get error here because break (or can be continue) is in a function, and can only be in a loop
//     }
// });

//Generally, forEach loop is about 25% slower than for of, particularly if it's lengthy array
//However, forEach is more specific to arrays