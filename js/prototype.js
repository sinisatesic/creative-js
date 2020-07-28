
//prototypes: every object has an internal property named prototype
// it's a simple reference to another object; contains common properties
//and attributes across all the instances
// One can add all of one's methods onto a prototype to avoid duplication on instances

//with previous constructor example:

function Todo(name, completed) {
    this.name = name;
    this.completed = completed;
}

Todo.prototype.getTodoName = function(){
    console.log(this.name);
};

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("Do my homework", false);
todo.getTodoName();
console.log(todo, todo2);

// When a constructor function is built, the newly created object
//inherits the the prototype properties of constructor function
//every new object that's created inherits prototype properties

//this also happens on array:

const arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);
console.log(arr); //has prototype as well; prototype of Array - inheriting methods


const arr2 = [1,2,3,4]; //all newly created objects inherit prototype of constructor function

// how are primitives subject to methods, then?
//in short, they have access to that typeof constructor function; inherit prototype

const name = 'sini';

const objName = new String('hellothere');

console.log(name.toUpperCase());
console.log(objName);

//constructor functions are pretty common; new String, new Number, new Object, new Array, etc.


