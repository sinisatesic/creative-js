
const countriesList = `https://date.nager.at/api/v3/AvailableCountries`

const getCountriesList = async () => {

    const response = await fetch(countriesList);
    const jsonFormatCountriesList = await response.json();

    // console.log(jsonFormatCountriesList);

    jsonFormatCountriesList.forEach((country) => {
        console.log(country);
    })
}
getCountriesList();