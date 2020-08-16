
//Global selections and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll('.color h2');
const popup = document.querySelector('.copy-container');
let initialColors;

//Event listeners

sliders.forEach(slider => {
    slider.addEventListener('input', hslControls);
});

colorDivs.forEach((div, index) => {
    div.addEventListener('change', () => {
        updateTextUI(index);
    });
});

currentHexes.forEach(hex => {
    hex.addEventListener('click', () => {
        copyToClipboard(hex);
    });
});

popup.addEventListener('transitionend', () => {
    const popupBox = popup.children[0];
    popup.classList.remove('active');
    popupBox.classList.remove('active');
});

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
    initialColors = [];
    colorDivs.forEach((div, index) => {
        // console.log(div);
        const hexText = div.children[0]; //grabbing the h2 in color divs
        // console.log(hexText);
        const randomColor = generateHex();
        //after generating hex, add it to the array:
        initialColors.push(chroma(randomColor).hex()); //pushing in hex value of random color that's generated

        //Add color to the background
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
        //check for contrast of hex word:
        checkTextContrast(randomColor, hexText);
        //Initial colorize sliders
        const color = chroma(randomColor);
        const sliders = div.querySelectorAll(".sliders input");
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        colorizeSliders(color, hue, brightness, saturation);
    });
    //reset inputs:
    resetInputs();
}

function checkTextContrast(color, text){
    const luminance = chroma(color).luminance();
    luminance > 0.5 ? text.style.color = "black" : text.style.color = "white";
}

function colorizeSliders(color, hue, brightness, saturation){
    //Scale saturation
    const noSat = color.set('hsl.s', 0); //gets color and de-saturation it as much as possible
    const fullSat = color.set('hsl.s', 1); //saturate as much as possible
    const scaleSat = chroma.scale([noSat, color, fullSat]);
    //Scale brightness
    const midBright = color.set('hsl.l', 0.5);
    const scaleBright = chroma.scale(['black', midBright, 'white']);


    //Updating input colors
    brightness.style.backgroundImage = `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`
    saturation.style.backgroundImage = `linear-gradient(to right,${scaleBright(0)}, ${scaleBright(0.5)}, ${scaleBright(1)})`
    hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75), rgb(204,204,75), rgb(75, 204, 75), rgb(75, 204, 204), rgb(75, 75, 204), rgb(204, 75, 204), rgb(204, 75, 75))`;

}

function hslControls(e){
    // console.log(e);
    const index =
        e.target.getAttribute('data-bright') ||
        e.target.getAttribute('data-sat') ||
        e.target.getAttribute('data-hue');
    // console.log(index);

    let sliders = e.target.parentElement.querySelectorAll('input[type="range"]');
    // console.log(sliders);
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    const bgColor = initialColors[index];
    // console.log(bgColor);
    // console.log(`initialArr: ${bgColor}`); //shows original hex still as reference when changing brightness/hue/sat as to get new hex
    let color = chroma(bgColor)
        .set('hsl.s', saturation.value)
        .set('hsl.l', brightness.value)
        .set('hsl.h', hue.value);

        colorDivs[index].style.backgroundColor = color;

        //colorize inputs:
    colorizeSliders(color, hue, brightness, saturation);
}

function updateTextUI(index){
    const activeDiv = colorDivs[index]; //selecting color off of the background
    const color = chroma(activeDiv.style.backgroundColor); //adding it to chroma to be able to convert to hex
    // console.log(color);
    const textHex = activeDiv.querySelector('h2');
    const icons = activeDiv.querySelectorAll('.controls button');
    textHex.innerText = color.hex(); //after releasing slider on a new hex code, it will update inner text to reflect new hex
    checkTextContrast(color, textHex); //ensures text color is update based on contrast of new color selected from sliders
    for(icon of icons){
        checkTextContrast(color, icon); //ensuring contrast of hex color on icons
    }
}

function resetInputs(){
    const sliders = document.querySelectorAll('.sliders input'); //all the inputs
    sliders.forEach(slider => {
        if(slider.name === 'hue'){
            const hueColor = initialColors[slider.getAttribute('data-hue')];
            const hueValue = chroma(hueColor).hsl()[0]
            // console.log(hueValue);
            slider.value = Math.floor(hueValue); //ensure hue value is correct when new color populated
        }
        if(slider.name === 'brightness'){
            const brightColor = initialColors[slider.getAttribute('data-bright')];
            const brightValue = chroma(brightColor).hsl()[2]
            // console.log(brightValue);
            slider.value = Math.floor(brightValue * 100)/100; //ensure bright value is correct when new color populated; multiply and divide by 100 will give first 3 decimal points
        }
        if(slider.name === 'saturation'){
            const satColor = initialColors[slider.getAttribute('data-sat')];
            const satValue = chroma(satColor).hsl()[1]
            // console.log(satValue);
            slider.value = Math.floor(satValue * 100)/100; //ensure sat value is correct when new color populated
        }
    });
}

function copyToClipboard(hex){
    //cannot literally copy so have to create work around; create empty textarea to use then get rid of it:
    const el = document.createElement('textarea');
    el.value = hex.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    //pop up animation:
    const popupBox = popup.children[0]; //popupBox is just the notification popup itself
    popup.classList.add('active'); //popup is ENTIRE container
    popupBox.classList.add('active');
}

randomColors();