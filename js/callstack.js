
function sayHi() {
    console.log(`hello there ${name}`);
    changeName();//even though this is in sayHi() function, there's an execution context created for this function, so it will take priority in execution until complete, then this function resumes
    console.log(`sayHi is finished`);
}

function changeName() {
    name = "Bobby";
    console.log(`we changed it to ${name}`);
    console.log(`changeName is finished`);
}
let name = "dev ed";

sayHi();
//important: as soon as you invoke a function, a new execution context gets created
//think of it as the execution contexts stacking; if first was global execution context, and then a new function is invoked, then execution context of the function stacks on top of the first global and is run/executed until complete, then global would resume

console.log(`We are done with the code`);

//scope chain is affiliated to hoisting
//important to reiterate (just read in Codeup curriculum, again):
//that local scape takes priority over global;
//if a function looks for a variable, it will check scope of function first;
//if not in immediate function, it will check any previous functions and their variables
//if variable is not within functions, but there's a global variable of the same name, it will be called/invoked












for(let i = 1; i <= 100; i++){
    if(i % 15 == 0) console.log('fizzbuzz');
    else if(i % 3 == 0) console.log('fizz');
    else if (i % 5 == 0) console.log('buzz');
    else console.log(i);
}