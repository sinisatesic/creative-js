const name = 'BADABING';
/*
5 == 5 (true)
5 == 4 (false)
5 != 5 (false)

Generally:
// == Equal to
// != Not equal to
// < less than
// > greater than
// <= less than or equal
// >= greater than or equal
// && and
// || or

OFTEN YOU WANT TO USE TRIPLE EQUALS, NOT DOUBLE
Double: checks only for value
Triple: checks for value AND type
 */
for (var i = 1; i <= 100; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

const access = false;

if (access) {
    console.log("BLARG");
} else {
    console.log("WUT??");
}

//else will run


const age = 15;
const bank = 31;

if (age >= 18 && bank > 30){
    console.log("da access yarp");
} else if ( bank > 30) {
    console.log("NARP");
} else {
    console.log("too young or too broke");
}

//for && = both conditions have to be true
//for ||, only one condition has to be true
// for else if else - as soon as one statement is correct, the rest is skipped