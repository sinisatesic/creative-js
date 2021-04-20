const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
const statusAPI = `https://api.coingecko.com/api/v3/status_updates`;
const fiPlatformsAPI = `https://api.coingecko.com/api/v3/finance_platforms`

const container = document.getElementById('containerYes');
const trendingButton = document.getElementById('trendingButton');
const popularButton = document.getElementById('popularButton');
const newsButton = document.getElementById('newsButton');
const platformsButton = document.getElementById('platformsButton');

const loader = document.querySelector('.loader');

document.onreadystatechange = function() {

    if (container.innerHTML.length !== 0) {
        // alert('PPOOOP');
        container.style.visibility = "hidden";
        loader.style.visibility = "visible";
        console.log('happy');
    } else {
        loader.style.display = "none";
        container.style.visibility = "visible";
        console.log('sad');
    }
};

// const loading = () =>{
//   let loader = document.createElement('div');
//  if (container.innerHTML.length < 1){
//    loader.classList.add('loader');
//    container.appendChild(loader);
//    console.log('yes');
//  } else {
//    loader.style.visibility = "hidden";
//    console.log('none');
//  }
// }


const getTrends = async () => {

    // loading();
    container.innerHTML = '';

    const response = await fetch(trendingAPI);
    const jsonTrends = await response.json();
    console.log(jsonTrends);

    // const responsePrice = await fetch(pricesAPI);
    // const jsonPrices = await responsePrice.json();
    // console.log(jsonPrices);

    // let price;

    jsonTrends.coins.forEach(e => {

        let firstColumn = document.createElement('div');
        firstColumn.classList.add('column');

        let firstCard = document.createElement('div');
        firstCard.classList.add('card');

        let firstCardContent = document.createElement('div');
        firstCardContent.classList.add('card-content');

        let firstContent = document.createElement('div');
        firstContent.classList.add('content');

        let firstText = document.createElement('text');
        firstText.innerHTML = `<img src="${e.item.large}" id="icon"></img> 
              <span id="name">${e.item.name}</span>
              <span id="symbol">SYMBOL: ${e.item.symbol} </span>
              <span id="rank">RANK: ${e.item.market_cap_rank}`

        let pointer = document.createElement('div');
        pointer.classList.add('pointer');

        firstContent.appendChild(firstText);
        firstContent.appendChild(pointer);
        firstCardContent.appendChild(firstContent);
        firstCard.appendChild(firstCardContent);
        firstColumn.appendChild(firstCard);
        container.appendChild(firstColumn);
    });
    console.log(container.innerHTML.length);
}

const getPrices = async () => {
    // loading();
    container.innerHTML = '';


    const responsePrice = await fetch(pricesAPI);
    const jsonPrices = await responsePrice.json();

    console.log(jsonPrices);

    jsonPrices.forEach(e => {
        let secondColumn = document.createElement('div');
        secondColumn.classList.add('column');

        let secondCard = document.createElement('div');
        secondCard.classList.add('card');

        let secondCardContent = document.createElement('div');
        secondCardContent.classList.add('card-content');

        let secondContent = document.createElement('div');
        secondContent.classList.add('content');

        let secondText = document.createElement('text');
        secondText.innerHTML = `<img src="${e.image}" id="pricesIcon"></img>
    <div style="text-align: center">
        <span class="pricesInfo"><span style="color: green">${e.name}</span></span>
        <span id="pricesSymbol">Symbol: ${e.symbol}</span>
        <span class="pricesInfo"">Price: <span style="color: olive">${e.current_price}</span></span>
        <span class="pricesInfo"">All Time Low: Price: <span style="color: olive">${e.atl}</span></span>
        <span class="pricesInfo"">All Time High: Price: <span style="color: olive">${e.ath}</span></span>
        <span class="pricesInfo"">24HR Price Change: <span style="color: olive">${e.price_change_24h}</span></span>
        <span class="pricesInfo"">24HR Price Change %: <span style="color: olive">${e.price_change_percentage_24h}</span></span>
    </div>`;

        let pacmanBody = document.createElement('div');
        pacmanBody.classList.add('pacmanBody');
        let pacmanMouth = document.createElement('div');
        pacmanMouth.classList.add('pacmanMouth');
        let pacmanEye = document.createElement('div');
        pacmanEye.classList.add('pacmanEye');

        pacmanBody.appendChild(pacmanEye);
        pacmanBody.appendChild(pacmanMouth);

        secondContent.appendChild(secondText);
        secondContent.appendChild(pacmanBody);
        secondCardContent.appendChild(secondContent);
        secondCard.appendChild(secondCardContent);
        secondColumn.appendChild(secondCard);
        container.appendChild(secondColumn);
    })
}


const getStatusInfo = async () => {
    // loading();
    container.innerHTML = '';

    const statusResponse = await fetch(statusAPI);
    const statusJSON = await statusResponse.json();

    console.log(statusJSON);

    statusJSON.status_updates.forEach(e => {
        let columns = document.createElement('div');
        columns.classList.add('columns');

        let card = document.createElement('div');
        card.classList.add('card');

        let cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        let content = document.createElement('div');
        content.classList.add('content');

        content.innerHTML = `
    <span style="color: black; font-family: Courier New">${e.description}</span>
    <div>Coin: <span style="color: purple;">${e.project.name}</span></div>
    <div>Symbol: <span style="color: purple;">${e.project.symbol}</span></div>
    <div>User: <span style="color: purple;">${e.user}</span></div>
    <div>User title: <span style="color: purple;">${e.user_title}</span></div>
    <div><img src="${e.project.image.thumb}"></div>
    `;

        cardContent.appendChild(content);
        card.appendChild(cardContent);
        columns.appendChild(card);
        container.appendChild(columns);
    })
}

const getPlatformsInfo = async () => {
    // loading();
    container.innerHTML = '';

    const fiPlatformsResponse = await fetch(fiPlatformsAPI);
    const jsonFiPlatforms = await fiPlatformsResponse.json();

    console.log(jsonFiPlatforms);
    let columns = document.createElement('div');
    columns.classList.add('columns');
    columns.classList.add('is-multiline');

    jsonFiPlatforms.forEach(e => {

        let column = document.createElement('div');
        column.classList.add('column');
        column.classList.add('is-one-quarter');

        let card = document.createElement('div');
        card.classList.add('card');

        let cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        let content = document.createElement('div');
        content.classList.add('content');

        content.innerHTML = `
  <span style="color: black; font-family: Courier New; font-size: 1.5rem;">${e.name}</span>
  <div>Type: <span style="color: purple;">${e.category}</span></div>
  <div>URL: <a href="${e.website_url}">${e.website_url}</a></div>
  `

        cardContent.appendChild(content);
        card.appendChild(cardContent);
        column.appendChild(card);
        columns.appendChild(column);
        // container.appendChild(columns);
    })
    container.appendChild(columns);
}




// getPlatformsInfo();

// getGlobalInfo();

// getPrices();

// getInfo();

trendingButton.addEventListener('click', getTrends);
popularButton.addEventListener('click', getPrices);
newsButton.addEventListener('click', getStatusInfo);
platformsButton.addEventListener('click', getPlatformsInfo);



// let $rows = $('#smartTable tbody tr');
//                     // Once a key has been released in the search filter...
//                     $('#search').keyup(function () {
//                         // Convert the entry to lowercase...
//                         let val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
//                         // Search through each row...
//                         $rows.show().filter(function () {
//                             // And for the rows that match the search field value...
//                             let text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
//                             // take all rows that do NOT match this criteria...
//                             return !~text.indexOf(val);
//                             // and hide them.
//                         }).hide();
//                     });

