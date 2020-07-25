

// FUNCTIONS ARE SPECIAL OBJECTS

// SPECIAL METHODS = BIND, CALL, APPLY

const person = {
    firstName: 'Sini',
    lastName: 'T',
    getName(){
        console.log(this.firstName + this.lastName);
    }
};

person.getName(); //will print "SiniT";

//Reminder: if method is invoked in object, 'this' refers to that object

function registerUser(country, lang){
    //Additional functionality...
    this.getName(); //this refers to Window object (not method in object)
    console.log(`country is ${country} and language is ${lang}`);
}

const register = registerUser.bind(person); //binding person object to registerUser function
//BIND ALLOWS FOR ONE TO CALL A METHOD ON A REGULAR FUNCTION

register("Bosna", "Bosanski");

console.log(register); //function now available in variable register (via reference)

// WHEN YOU USE CALL, YOU"RE NOT SAVING TO VARIABLE BUT INVOKING IT

registerUser.call(person, 'bosna', 'bosanski'); //only difference is immediate invoking

// APPLY IS SIMILAR; but works with param of array; also immediate invoking

registerUser.apply(person, ['bosna', 'bosanski']);

