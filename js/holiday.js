
// const countriesList = `https://date.nager.at/api/v3/AvailableCountries`
// const bosna = `https://date.nager.at/api/v3/CountryInfo/BA`

// const getCountriesList = async () => {

//     const response = await fetch(countriesList);
//     const jsonFormatCountriesList = await response.json();

//     console.log(jsonFormatCountriesList);

//     jsonFormatCountriesList.forEach((country) => {
//         console.log(country);
//     })
// }
// getCountriesList();
// let particapants, particapantsValue;
// particapants = document.getElementById('particapants');
// particapantsValue = particapants.value;

const goButton = document.getElementById('go');
const countriesList = `https://www.boredapi.com/api/activity?participants=`;
const input = document.getElementById('peepsInput')


let searchValue, modifiedSearch;
input.addEventListener('input', (text) => {
    searchValue = text.target.value.toString();
    if (Number(searchValue) === 8){
        searchValue = 8;
    }
    if (Number(searchValue) > 5 && Number(searchValue) !== 8){
        searchValue = 5;
    }
    // Number(searchValue) === 8 ? searchValue = 8 : searchValue;
    // Number(searchValue) > 5 ? searchValue = 5 : searchValue;
    modifiedSearch = countriesList+searchValue;
})
//console.log(typeof value);
const getCountries = async () => {
    

    const response = await fetch(modifiedSearch);
    const responseJSON = await response.json();


    console.log(Object.keys(responseJSON)[0])
    console.log(responseJSON);

    let firstKey = Object.keys(responseJSON)[0]
    let firstValue = Object.values(responseJSON)[0]
    let testText = document.getElementById('testText')

    

    testText.innerHTML = `${firstKey}: ${firstValue}`

    // responseJSON.forEach(result => {
    //     const testText = document.getElementById('testText')
    //     testText.innerHTML = result.activity
    // });
}
//getCountries();



goButton.addEventListener('click', () => {
    getCountries();
});




// typeof string: console.log([...countriesList].splice(-1).toString()+'s');












