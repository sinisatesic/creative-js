 //global scope

 let food = "apple";
 let fruit = 5;
 var x = 10; //IMPORTANT: var has no block scope! If you put x in below block scope, it can affect global variables (more bugs)

function store(){
    //FUNCTION SCOPE = not accessible outside of function
    let food = "banana";
    let fruit = 50;
    console.log(food, fruit); //will log vars in this function
}

store();

//BLOCK SCOPE
 for (let fruit = 0; fruit < 10; fruit++){
     console.log(fruit);
     //the parameters in for here only stay in their block of this conditional
 }

 console.log(food, fruit);
 console.log(x); //will be 10

 // if(true){
 //     let food = 'kiwi';
 //     var x = 10;
 // }
 // console.log(food, x);

 //global scope vars can work in other scopes
 if(true){
     console.log(food); //will log apple
 }

 //conclusively, function scope and block scope are only accessible within their respective scopes
 //global scopes can be used anywhere
