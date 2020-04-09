const age = 25;

if (age) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// TRUTHY:
if (true) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// FALSEY:
if (false) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// FALSEY:
if (0) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// FALSEY:
const age = 0;
if (age) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// FALSEY:
const Blark = '';
if (Blark) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// FALSEY:
const popcorn = null;
if (popcorn) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

/////////
// TRUTHY:
const name = 'Astilios';
if (name) {
    console.log("This value is truthy");
} else {
    console.log("This value is falsey");
}

//BELOW WILL OUTPUT FALSEY VALUES:

//FALSE, 0, "", null, undefined, NaN

//REST WILL OUTPUT TRUTHY VALUES