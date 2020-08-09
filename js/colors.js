
//Global selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');

let initialColors;

//Functions


function generateHex(){
    // const letters = '#0123456789ABCDEF';
    // let hash = '#'; //every hex color code starts with hash
    // for(let i = 0; i < 6; i++){
    //     hash += letters[Math.floor(Math.random() * 16)];
    //     //generate 6 random digits in letters variable, which are hex digits
    // }
    // return hash;
    const hexColor = chroma.random();
    return hexColor;
}
// let randomHex = generateHex();
// console.log(randomHex);
// ^generate random hex color code

function randomColors(){
    //for each color div, generate random hex color code, and add it as background and innerText
    colorDivs.forEach((div, index) => {
        // console.log(div);
        const hexText = div.children[0];
        const randomColor = generateHex();

        //Add color to the background
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}
randomColors();