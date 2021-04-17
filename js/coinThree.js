/* <div class="column">
<div class="card">
    <div class="card-content" id="two">
      <!-- <div class="content">
        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
      </div> -->
    <!-- </div>
  </div>
</div> */

const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
const globalAPI = `https://api.coingecko.com/api/v3/events/status_updates`;

const container = document.getElementById('containerYes');
const button = document.getElementById('daButton');
const buttonTwo = document.getElementById('daButtonTwo');

let jsonTrends;
let jsonPrices;



const getTrends = async () => {
    container.innerHTML = '';

    const response = await fetch(trendingAPI);
    jsonTrends = await response.json();
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
}

const getPrices = async () => {
    container.innerHTML = '';


    const responsePrice = await fetch(pricesAPI);
    jsonPrices = await responsePrice.json();

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


// const getGlobalInfo = async () => {
//     const globalResponse = await fetch(globalAPI);
//     const globalJSON = await globalResponse.json();
//
//     console.log(globalJSON);
// };
//
// getGlobalInfo().then(r => console.log('lkdjf'));

// getPrices();

// getInfo();

button.addEventListener('click', getTrends);
buttonTwo.addEventListener('click', getPrices);
