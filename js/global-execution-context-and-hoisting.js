
//look more into global object window and its contents

//whenever any JS file is run, even if empty, JS engine create global execution context
// few important things get created automatically

//from Global Execution Context, during creation phase, global object is created and this keyword

// global object varies; for example, if working in browser, then global object is window

//js engine allocates on global object for functions before code runs (via function declarations)

// Then there's an execution phase:
//when code starts running


// HOISTING (es5 only; doesn't work with let/const)
//definition tho - function declarations get saved in memory before code starts executing, and they are accessible anywhere in global execution context

alo(); //this function works properly even though it's called before code of function itself; hoisting

function alo() {
    console.log('alo');
}

//hoisting is possible because during creation phase, memory is allocated
// to the functions (JS knows about functions before it executes them)

//again, saves declarations in memory

//for var scoping, var DECLARATION can get hoisted, but value can't; so out of order will give value of undefined
//let/const won't allow for hoisting



