// keyword that gets created in global execution context, or when another function is invoked

console.log(this) //by default, refers to the Window object in console

// the keyword this is basically a point referring to an object
// this keyword can change which object it points to

function sayThis(){
    console.log(this);
}
sayThis(); // still refers to Window object

// this becomes a bit different/more useful with objects:

const user = {
    name: 'sini',
    sayHi(){ // reminder: methods are functions in objects
        console.log(this); // keyword "this" gets set when function invoked
    }
};

user.sayHi(); // keyword this will refer to "user" object itself
// so, when "this" is used in method within object, it will point to that object
// "this" becomes particularly useful for creating objects dynamically, or values dynamically

const admin = {
    name: 'admin'
};

function wazzup(){
    console.log(this);
};

user.wazuhh = wazzup;
admin.wazuhh = wazzup;

user.wazuhh(); //refers to user object
admin.wazuhh(); //refers to admin object

// THIS USED WITH DOM

const lists = document.querySelectorAll('li');

lists.forEach(li => {
    li.addEventListener('click', function(){
        console.log(this); // will refer specific element it is attached to; whichever is clicked per the event
    });
});

// it is important to remember global execution context with this keyword
// because if multiple functions are called within an object, after initial, "this" will no longer refer to original object properties
// UNLESS you use es6 - arrow function

const anotherOne = {
    name: "DJ K",
    songs: ['bad', 'more bad', 'super bad'],
    greet(){
        console.log(`hi ${this.name}`);
        //add function in greet() method
        const getSongs = () => { //use arrow function inside of methods to avoid this pointing to Window object
            // arrow functions DO NOT get a new keyword of "this" in this context
            console.log(`you currently have ${this.songs.length} bad songs`);

            this.songs.forEach(song => { //another example to reiterate arrow function use for these situations
                console.log(this.name);
            })
        };
        getSongs();
    }
};

anotherOne.greet();