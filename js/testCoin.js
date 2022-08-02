// vanilla (es6):


const derivativesAPI = `https://api.coingecko.com/api/v3/derivatives/exchanges`;


// let searchAPI = `https://api.coingecko.com/api/v3/search`


const coinsAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
const categoriesAPI = `https://api.coingecko.com/api/v3/coins/categories`;
const globalAPI = `https://api.coingecko.com/api/v3/global`;
const searchAPI = `https://api.coingecko.com/api/v3/search?query=`
const assetPlatforms = `https://api.coingecko.com/api/v3/asset_platforms`


const container = document.getElementById('containerYes');
const trendingButton = document.getElementById('trendingButton');
const popularButton = document.getElementById('popularButton');
const categoriesButton = document.getElementById('categoriesButton');
const platformsButton = document.getElementById('platformsButton');
const navBarItems = document.getElementById('navBarItems');
const derivativesButton = document.getElementById('derivativesButton');
const globalButton = document.getElementById('globalButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const burger = document.getElementById('burger');
// const assetPlatforms = document.getElementById('a')
// let valueOfSearchInput = searchInput.value;
// let stringValueInput = valueOfSearchInput.toString();











let searchValue;
let modifiedSearch;
searchInput.addEventListener('input', (text) => {
    searchValue = text.target.value.toString()
    
    modifiedSearch = searchAPI+searchValue
    console.log(modifiedSearch);
})

const getSearchResults = async () => {

    container.innerHTML = '';

    const getSearch = await fetch(modifiedSearch);
    const getSearchJSON = await getSearch.json();
    // let testy = JSON.stringify(getSearchJSON);

    console.log(getSearchJSON);
    console.log(getSearchJSON.coins);
    console.log(getSearchJSON.exchanges);

    let searchCoins = getSearchJSON.coins;
    let searchExchanges = getSearchJSON.exchanges;

    searchExchanges.forEach(exchange => {
        let exchangeColumns = document.createElement('div');
        exchangeColumns.classList.add('columns');

        let exchangeCard = document.createElement('div');
        exchangeCard.classList.add('card');
        exchangeCard.style.width = "100%"

        let exchangeCardContent = document.createElement('div');
        exchangeCardContent.classList.add('card-content');
        exchangeCardContent.style.textAlign = "center";

        let exchangeContent = document.createElement('div');
        exchangeContent.classList.add('content');

        exchangeContent.innerHTML = `
        <span style="color: black; font-family: Courier New; font-weight: bold">${exchange.id}</span>
        <div>Name: <span style="color: purple;">${exchange.name}</span></div>
        <div>Market Type: <span style="color: purple;">${exchange.market_type}</span></div>
        <div><img src="${exchange.large}" style="padding-top: 10px;"></div>
        `

        exchangeCardContent.appendChild(exchangeContent);
        exchangeCard.appendChild(exchangeCardContent);

        exchangeColumns.appendChild(exchangeCard);
    

        container.appendChild(exchangeColumns);

    })


    searchCoins.forEach(coin => {
        let columns = document.createElement('div');
        columns.classList.add('columns');
        
       
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = "100%";
       
        let cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        cardContent.style.textAlign = "center";
       
        let content = document.createElement('div');
        content.classList.add('content');

        content.innerHTML = `
        <span style="color: black; font-family: Courier New; font-weight: bold">${coin.id}</span>
        <div>Name: <span style="color: purple;">${coin.name}</span></div>
        <div>Symbol: <span style="color: purple;">${coin.symbol}</span></div>
        <div>Market Cap Rank: <span style="color: purple;">${coin.market_cap_rank}</span></div>
        <div><img src="${coin.large}" style="padding-top: 10px;"></div>
        `;

        cardContent.appendChild(content);
        card.appendChild(cardContent);

        columns.appendChild(card);
    

        container.appendChild(columns);
       
        
    })



   ////
    // getSearchJSON.exchanges.forEach(e => {
    // let columns = document.createElement('div');
    // columns.classList.add('columns');
   
    // let card = document.createElement('div');
    // card.classList.add('card');
   
    // let cardContent = document.createElement('div');
    // cardContent.classList.add('card-content');
   
    // let content = document.createElement('div');
    // content.classList.add('content');
//    })

//    content.innerHTML = `
//    <span style="color: black; font-family: Courier New; font-weight: bold">${e.id}</span>
//    <div>Name: <span style="color: purple;">${e.id}</span></div>
//    <div>Market Type: <span style="color: purple;">${e.market_type}</span></div>
//    `;
  
//    cardContent.appendChild(content);
//    card.appendChild(cardContent);
//    columns.appendChild(card);
//    container.appendChild(columns);
}
searchButton.addEventListener('click', (e) => {
   
    getSearchResults();
})


// const audio = new Audio("sounds/chalo.mp3");
// document.addEventListener('click', () => {
//     audio.play();
// });

// console.log(searchBar);
// searchBar.addEventListener('keyup', (e) => {
// const searchString = e.target.value;
// const filteredCoins = jsonPrices.filter( coin => {
// return coin.name.includes(searchString) || coin.symbol.includes(searchString);
// });
// console.log(filteredCoins);
// getPrices(filteredCoins);
// });

// console.log(searchBar);
// searchBar.addEventListener('keyup', (e) => {
// const searchString = e.target.value;
// // container.innerHTML = '';
// // container.append(jsonTrends.name.includes(searchString))
// if(firstText.innerHTML.includes(searchString)){
// container.append(getTrends.innerHTML);
// }
// // const filteredCoins = jsonTrends.coins.filter( coin => {
// // return coin.name.includes(searchString) || coin.symbol.includes(searchString);
// // });
// // console.log(filteredCoins);
// // getPrices(filteredCoins);
// });

// const search = () => {
// searchBar.addEventListener('keyup', (e) => {
// let searchString = e.target.value;
// let body = document.getElementsByTagName('body');
// for(i = 0; i < firstText.length; i++){
// if(firstText[i].innerHTML == searchString){
// let filtered = body.filter( e => {
// return firstText[i];
// })
// // return filtered;
// console.log(filtered);
// }
// }
// })
// }

//for burger for mobile:
burger.addEventListener('click', () => {
 let burgerIcon = document.getElementById('navBarItems');
 burgerIcon.classList.toggle('is-active');
});
//////

// for number conversion to currency format:
const currency = new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 minimumFractionDigits: 0,
});
//////

let jsonTrends;
// let firstText;
const getTrends = async () => {

 container.innerHTML = '';

 const response = await fetch(trendingAPI);
 jsonTrends = await response.json();

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
};

const getCoins = async () => {
 container.innerHTML = '';

 // if(document.readyState !== 'complete'){
 // let loadDiv = document.createElement('div');
 // loadDiv.classList.add('load');
 // container.append(loadDiv);
 // }
 // console.log(container);

 // do {
 // container.innerHTML = '';
 // let loadDiv = document.createElement('div');
 // loadDiv.classList.add('load');
 // container.append(loadDiv);
 // } while (document.readyState !== "complete");

 const responseCoins = await fetch(coinsAPI);
 const jsonCoins = await responseCoins.json();

 jsonCoins.forEach(e => {
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
 let pacmanMouth = document.createElement('div');
 let pacmanEye = document.createElement('div');

 if (container.children.length % 2 == 0){
 pacmanBody.classList.add('pacmanBody');
 pacmanMouth.classList.add('pacmanMouth');
 pacmanEye.classList.add('pacmanEye');
 } else {
 pacmanBody.classList.add('pacmanBodyBlue');
 pacmanMouth.classList.add('pacmanMouthBlue');
 pacmanEye.classList.add('pacmanEyeBlue');
 }

 pacmanBody.appendChild(pacmanEye);
 pacmanBody.appendChild(pacmanMouth);

 secondContent.appendChild(secondText);
 secondContent.appendChild(pacmanBody);
 secondCardContent.appendChild(secondContent);
 secondCard.appendChild(secondCardContent);
 secondColumn.appendChild(secondCard);
 container.appendChild(secondColumn);
 });
};








const getCategoriesInfo = async () => {
 container.innerHTML = '';

 const categoriesResponse = await fetch(categoriesAPI);
 const categoriesJSON = await categoriesResponse.json();

 console.log(categoriesJSON);


 categoriesJSON.forEach(e => {
 let columns = document.createElement('div');
 columns.classList.add('columns');

 let card = document.createElement('div');
 card.classList.add('card');

 let cardContent = document.createElement('div');
 cardContent.classList.add('card-content');

 let content = document.createElement('div');
 content.classList.add('content');

let textContent = e.content == "" || e.content == null ? "No description" : e.content;

 content.innerHTML = `
 <span style="color: black; font-family: Courier New; font-weight: bold">${e.id}</span>
 <div>${e.name}: <span style="color: purple;">${textContent}</span></div>
 <div>Market Cap: <span style="color: purple;">${e.market_cap}</span></div>
 <div>24 HR Market Cap Change: <span style="color: purple;">${e.market_cap_change_24h}</span></div>
 <div>24 HR Volume: <span style="color: purple;">${e.volume_24h}</span></div>
 <div>Top 3 Coins:<img src="${e.top_3_coins[0]}"><img src="${e.top_3_coins[1]}"><img src="${e.top_3_coins[2]}"></div>
 `;

 cardContent.appendChild(content);
 card.appendChild(cardContent);
 columns.appendChild(card);
 container.appendChild(columns);
 });
};









const getPlatformsInfo = async () => {
 container.innerHTML = '';

 const platformsResponse = await fetch(assetPlatforms);
 const platformValue = await platformsResponse.json();

 console.log(platformValue)

//  const fiPlatformsResponse = await fetch(fiPlatformsAPI);
//  const jsonFiPlatforms = await fiPlatformsResponse.json();

//  let columns = document.createElement('div');
//  columns.classList.add('columns');
//  columns.classList.add('is-multiline');

// jsonFiPlatforms.forEach(e => {

//  let column = document.createElement('div');
//  column.classList.add('column');
//  column.classList.add('is-one-quarter');

//  let card = document.createElement('div');
//  card.classList.add('card');

//  let cardContent = document.createElement('div');
//  cardContent.classList.add('card-content');

//  let content = document.createElement('div');
//  content.classList.add('content');

//  content.innerHTML = `
//  <span style="color: black; font-family: Courier New; font-size: 1.5rem;">${e.name}</span>
//  <div>Type: <span style="color: purple;">${e.category}</span></div>
//  <div>URL: <a href="${e.website_url}">${e.website_url}</a></div>
//  `

//  cardContent.appendChild(content);
//  card.appendChild(cardContent);
//  column.appendChild(card);
//  columns.appendChild(column);
 
// });
// container.appendChild(columns);
};









const getDerivatives = async () => {
 container.innerHTML = '';

 const derivativesResponse = await fetch(derivativesAPI);
 const derivativesJSON = await derivativesResponse.json();

 console.log(derivativesJSON);

//  let columns = document.createElement('div');
//  columns.classList.add('columns');
//  columns.classList.add('is-multiline');

//  let column = document.createElement('div');
//  column.classList.add('column');
//  column.classList.add('is-one-quarter');

//  let card = document.createElement('div');
//  card.classList.add('card');

//  let cardContent = document.createElement('div');
//  cardContent.classList.add('card-content');

//  let content = document.createElement('div');
//  content.classList.add('content');

 derivativesJSON.forEach(e => {

let columns = document.createElement('div');
columns.classList.add('columns');
columns.style.textAlign = "center";

let card = document.createElement('div');
card.classList.add('card');
card.style.width = "100%";

let cardContent = document.createElement('div');
cardContent.classList.add('card-content');

let content = document.createElement('div');
content.classList.add('content');

let derivativeCountry = e.country === null || e.country === "" ? "Country not provided" : e.country;
let derivativeDescription = e.description === null || e.description === "" ? "Description not provided" : e.description;
let derivativeEstablished = e.year_established === null || e.year_established === "" ? "Year established not provided" : e.year_established;

 content.innerHTML = `
 <div style="font-weight: bold;">${e.id}</span></div>
 <div>Name: <span style="color: purple; word-wrap: break-word;">${e.name}</span></div>
 <div>Country: <span style="color: purple;">${derivativeCountry}</span></div>
 <div>Description: <span style="color: purple;">${derivativeDescription}</span></div>
 <a href="${e.url}" target="_blank" style="text-decoration: none";><div>URL: ${e.url}</div></a>
 <div>Established: <span style="color: purple;">${derivativeEstablished}</span></div>
 <div>Trade Volume to BTC (24 hrs): <span style="color: purple;">${e.trade_volume_24h_btc}</span></div>
 <div>Open Interest - BTC: <span style="color: purple;">${e.open_interest_btc}</span></div>
 <div>Number of Perpentual Pairs: <span style="color: purple;">${e.number_of_perpetual_pairs}</span></div>
 <div>Number of Future Pairs: <span style="color: purple;">${e.number_of_futures_pairs}</span></div>
 <div><img src="${e.image}" style="padding-top: 10px;"></div>
 `;


 cardContent.appendChild(content);
 card.appendChild(cardContent);
 columns.appendChild(card);
 container.appendChild(columns);

//  cardContent.appendChild(content);
//  card.appendChild(cardContent);
//  column.appendChild(card);
//  columns.appendChild(column);
 });
//  container.appendChild(columns);
};








const getGlobalInfo = async () => {
 container.innerHTML = '';

 const globalResponse = await fetch(globalAPI);
 const globalJSON = await globalResponse.json();
 console.log(globalJSON);
 // console.log(globalJSON.data.market_cap_percentage);

 
 // capPercents.push(globalJSON.data.market_cap_percentage);
 // console.log(capPercents);
 console.log(globalJSON.data.market_cap_percentage);

 let capPercents = [];
 capPercents.push(globalJSON.data.market_cap_percentage);

 let columns = document.createElement('div');
 columns.classList.add('columns');
 columns.classList.add('is-multiline');

 let column = document.createElement('div');
 column.classList.add('column');
 column.classList.add('is-one-quarter');

 let card = document.createElement('div');
 card.classList.add('card');

 let cardContent = document.createElement('div');
 cardContent.classList.add('card-content');

 let content = document.createElement('div');
 content.classList.add('content');

 capPercents.forEach(e => {
 content.innerHTML = `
 <div><span style="color: purple;">Market Cap Percentages on Popular Coins:</span></div>
 <div>Bitcoin: <span style="color: purple;">${e.btc}%</span></div>
 <div>Ethereum: <span style="color: purple;">${e.eth}%</span></div>
 <div>Binance: <span style="color: purple;">${e.bnb}%</span></div>
 <div>XRP: <span style="color: purple;">${e.xrp}%</span></div>
 <div>Tether: <span style="color: purple;">${e.usdt}%</span></div>
 <div>Cardano: <span style="color: purple;">${e.ada}%</span></div>
 <div>Polkadot: <span style="color: purple;">${e.dot}%</span></div>
 <div>Solana: <span style="color: purple;">${e.sol}%</span></div>
 <div>Binance USD: <span style="color: purple;">${e.busd}%</span></div>
 `
 });

 let marketCap = [];
 marketCap.push(globalJSON.data.total_market_cap);

 console.log(marketCap);

 let columnTwo = document.createElement('div');
 columnTwo.classList.add('column');
 columnTwo.classList.add('is-one-quarter');

 let cardTwo = document.createElement('div');
 cardTwo.classList.add('card');

 let cardContentTwo = document.createElement('div');
 cardContentTwo.classList.add('card-content');

 let contentTwo = document.createElement('div');
 contentTwo.classList.add('content');

 marketCap.forEach(e => {
 contentTwo.innerHTML = `
 <div><span style="color: purple;">Total Market Caps:</span></div>
 <div>United Arab Emirates dirham: <span style="color: purple;">${currency.format(e.aed)}</span></div>
 <div>Argentine peso: <span style="color: purple;">${currency.format(e.ars)}</span></div>
 <div>Australian dollar: <span style="color: purple;">${currency.format(e.aud)}</span></div>
 <div>Bitcoin cash: <span style="color: purple;">${currency.format(e.bch)}</span></div>
 <div>Bangladesh taka: <span style="color: purple;">${currency.format(e.bdt)}</span></div>
 <div>Bahraini dinar: <span style="color: purple;">${currency.format(e.bhd)}</span></div>
 <div>Bits: <span style="color: purple;">${currency.format(e.bits)}</span></div>
 <div>Bermudian dollar: <span style="color: purple;">${currency.format(e.bmd)}</span></div>
 <div>Binance coin: <span style="color: purple;">${currency.format(e.bnb)}</span></div>
 <div>Brazilian real: <span style="color: purple;">${currency.format(e.brl)}</span></div>
 <div>Bitcoin: <span style="color: purple;">${currency.format(e.btc)}</span></div>
 <div>Canadian dollar: <span style="color: purple;">${currency.format(e.cad)}</span></div>
 <div>Swiss franc: <span style="color: purple;">${currency.format(e.chf)}</span></div>
 <div>Chilean peso: <span style="color: purple;">${currency.format(e.clp)}</span></div>
 <div>Chinese renminbi: <span style="color: purple;">${currency.format(e.cny)}</span></div>
 <div>Czech koruna: <span style="color: purple;">${currency.format(e.czk)}</span></div>
 <div>Danish krone: <span style="color: purple;">${currency.format(e.dkk)}</span></div>
 <div>Polkadot: <span style="color: purple;">${currency.format(e.dot)}</span></div>
 <div>EOS.IO: <span style="color: purple;">${currency.format(e.eos)}</span></div>
 <div>Ethereum: <span style="color: purple;">${currency.format(e.eth)}</span></div>
 <div>Euro: <span style="color: purple;">${currency.format(e.eur)}</span></div>
 <div>British pound sterling: <span style="color: purple;">${currency.format(e.gbp)}</span></div>
 <div>Hong Kong dollar: <span style="color: purple;">${currency.format(e.hkd)}</span></div>
 <div>Hungarian forint: <span style="color: purple;">${currency.format(e.huf)}</span></div>
 <div>Indonesian rupiah: <span style="color: purple;">${currency.format(e.idr)}</span></div>
 <div>Israeli new shekel: <span style="color: purple;">${currency.format(e.ils)}</span></div>
 <div>Indian rupee: <span style="color: purple;">${currency.format(e.inr)}</span></div>
 <div>Japanese yen: <span style="color: purple;">${currency.format(e.jpy)}</span></div>
 <div>South Korean won: <span style="color: purple;">${currency.format(e.krw)}</span></div>
 <div>Kuwaiti dinar: <span style="color: purple;">${currency.format(e.kwd)}</span></div>
 <div>Chainlink: <span style="color: purple;">${currency.format(e.link)}</span></div>
 <div>Sri Lankan rupee: <span style="color: purple;">${currency.format(e.lkr)}</span></div>
 <div>Litecoin: <span style="color: purple;">${currency.format(e.ltc)}</span></div>
 <div>Myanmar kyat: <span style="color: purple;">${currency.format(e.mmk)}</span></div>
 <div>Mexican peso: <span style="color: purple;">${currency.format(e.mxn)}</span></div>
 <div>Malaysian ringgit: <span style="color: purple;">${currency.format(e.myr)}</span></div>
 <div>Nigerian naira: <span style="color: purple;">${currency.format(e.ngn)}</span></div>
 <div>Norwegian krone: <span style="color: purple;">${currency.format(e.nok)}</span></div>
 <div>New Zealand dollar: <span style="color: purple;">${currency.format(e.nzd)}</span></div>
 <div>Philippine peso: <span style="color: purple;">${currency.format(e.php)}</span></div>
 <div>Pakistani rupee: <span style="color: purple;">${currency.format(e.pkr)}</span></div>
 <div>Polish złoty: <span style="color: purple;">${currency.format(e.pln)}</span></div>
 <div>Russian ruble: <span style="color: purple;">${currency.format(e.rub)}</span></div>
 <div>Saudi riyal: <span style="color: purple;">${currency.format(e.sar)}</span></div>
 <div>Satoshi: <span style="color: purple;">${currency.format(e.sats)}</span></div>
 <div>Swedish krona: <span style="color: purple;">${currency.format(e.sek)}</span></div>
 <div>Singapore dollar: <span style="color: purple;">${currency.format(e.sgd)}</span></div>
 <div>Thai baht: <span style="color: purple;">${currency.format(e.thb)}</span></div>
 <div>Turkish lira: <span style="color: purple;">${currency.format(e.try)}</span></div>
 <div>New Taiwan dollar: <span style="color: purple;">${currency.format(e.twd)}</span></div>
 <div>Ukrainian hryvnia: <span style="color: purple;">${currency.format(e.uah)}</span></div>
 <div>United States dollar: <span style="color: purple;">${currency.format(e.usd)}</span></div>
 <div>Venezuelan bolívar: <span style="color: purple;">${currency.format(e.vef)}</span></div>
 <div>Vietnamese dong: <span style="color: purple;">${currency.format(e.vnd)}</span></div>
 <div>Silver: <span style="color: purple;">${currency.format(e.xag)}</span></div>
 <div>Gold: <span style="color: purple;">${currency.format(e.xau)}</span></div>
 <div>Special drawing rights: <span style="color: purple;">${currency.format(e.xdr)}</span></div>
 <div>Stellar lumens: <span style="color: purple;">${currency.format(e.xlm)}</span></div>
 <div>XRP ripple: <span style="color: purple;">${currency.format(e.xrp)}</span></div>
 <div>yearn.finance: <span style="color: purple;">${currency.format(e.yfi)}</span></div>
 <div>South African rand: <span style="color: purple;">${currency.format(e.zar)}</span></div>
 `
 })

 let volume = [];
 volume.push(globalJSON.data.total_volume);

 let columnThree = document.createElement('div');
 columnThree.classList.add('column');
 columnThree.classList.add('is-one-quarter');

 let cardThree = document.createElement('div');
 cardThree.classList.add('card');

 let cardContentThree = document.createElement('div');
 cardContentThree.classList.add('card-content');

 let contentThree = document.createElement('div');
 contentThree.classList.add('content');

 volume.forEach(e => {
 contentThree.innerHTML = `
 <div><span style="color: purple;">Total Volumes:</span></div>
 <div>United Arab Emirates dirham: <span style="color: purple;">${currency.format(e.aed)}</span></div>
 <div>Argentine peso: <span style="color: purple;">${currency.format(e.ars)}</span></div>
 <div>Australian dollar: <span style="color: purple;">${currency.format(e.aud)}</span></div>
 <div>Bitcoin cash: <span style="color: purple;">${currency.format(e.bch)}</span></div>
 <div>Bangladesh taka: <span style="color: purple;">${currency.format(e.bdt)}</span></div>
 <div>Bahraini dinar: <span style="color: purple;">${currency.format(e.bhd)}</span></div>
 <div>Bits: <span style="color: purple;">${currency.format(e.bits)}</span></div>
 <div>Bermudian dollar: <span style="color: purple;">${currency.format(e.bmd)}</span></div>
 <div>Binance coin: <span style="color: purple;">${currency.format(e.bnb)}</span></div>
 <div>Brazilian real: <span style="color: purple;">${currency.format(e.brl)}</span></div>
 <div>Bitcoin: <span style="color: purple;">${currency.format(e.btc)}</span></div>
 <div>Canadian dollar: <span style="color: purple;">${currency.format(e.cad)}</span></div>
 <div>Swiss franc: <span style="color: purple;">${currency.format(e.chf)}</span></div>
 <div>Chilean peso: <span style="color: purple;">${currency.format(e.clp)}</span></div>
 <div>Chinese renminbi: <span style="color: purple;">${currency.format(e.cny)}</span></div>
 <div>Czech koruna: <span style="color: purple;">${currency.format(e.czk)}</span></div>
 <div>Danish krone: <span style="color: purple;">${currency.format(e.dkk)}</span></div>
 <div>Polkadot: <span style="color: purple;">${currency.format(e.dot)}</span></div>
 <div>EOS.IO: <span style="color: purple;">${currency.format(e.eos)}</span></div>
 <div>Ethereum: <span style="color: purple;">${currency.format(e.eth)}</span></div>
 <div>Euro: <span style="color: purple;">${currency.format(e.eur)}</span></div>
 <div>British pound sterling: <span style="color: purple;">${currency.format(e.gbp)}</span></div>
 <div>Hong Kong dollar: <span style="color: purple;">${currency.format(e.hkd)}</span></div>
 <div>Hungarian forint: <span style="color: purple;">${currency.format(e.huf)}</span></div>
 <div>Indonesian rupiah: <span style="color: purple;">${currency.format(e.idr)}</span></div>
 <div>Israeli new shekel: <span style="color: purple;">${currency.format(e.ils)}</span></div>
 <div>Indian rupee: <span style="color: purple;">${currency.format(e.inr)}</span></div>
 <div>Japanese yen: <span style="color: purple;">${currency.format(e.jpy)}</span></div>
 <div>South Korean won: <span style="color: purple;">${currency.format(e.krw)}</span></div>
 <div>Kuwaiti dinar: <span style="color: purple;">${currency.format(e.kwd)}</span></div>
 <div>Chainlink: <span style="color: purple;">${currency.format(e.link)}</span></div>
 <div>Sri Lankan rupee: <span style="color: purple;">${currency.format(e.lkr)}</span></div>
 <div>Litecoin: <span style="color: purple;">${currency.format(e.ltc)}</span></div>
 <div>Myanmar kyat: <span style="color: purple;">${currency.format(e.mmk)}</span></div>
 <div>Mexican peso: <span style="color: purple;">${currency.format(e.mxn)}</span></div>
 <div>Malaysian ringgit: <span style="color: purple;">${currency.format(e.myr)}</span></div>
 <div>Nigerian naira: <span style="color: purple;">${currency.format(e.ngn)}</span></div>
 <div>Norwegian krone: <span style="color: purple;">${currency.format(e.nok)}</span></div>
 <div>New Zealand dollar: <span style="color: purple;">${currency.format(e.nzd)}</span></div>
 <div>Philippine peso: <span style="color: purple;">${currency.format(e.php)}</span></div>
 <div>Pakistani rupee: <span style="color: purple;">${currency.format(e.pkr)}</span></div>
 <div>Polish złoty: <span style="color: purple;">${currency.format(e.pln)}</span></div>
 <div>Russian ruble: <span style="color: purple;">${currency.format(e.rub)}</span></div>
 <div>Saudi riyal: <span style="color: purple;">${currency.format(e.sar)}</span></div>
 <div>Satoshi: <span style="color: purple;">${currency.format(e.sats)}</span></div>
 <div>Swedish krona: <span style="color: purple;">${currency.format(e.sek)}</span></div>
 <div>Singapore dollar: <span style="color: purple;">${currency.format(e.sgd)}</span></div>
 <div>Thai baht: <span style="color: purple;">${currency.format(e.thb)}</span></div>
 <div>Turkish lira: <span style="color: purple;">${currency.format(e.try)}</span></div>
 <div>New Taiwan dollar: <span style="color: purple;">${currency.format(e.twd)}</span></div>
 <div>Ukrainian hryvnia: <span style="color: purple;">${currency.format(e.uah)}</span></div>
 <div>United States dollar: <span style="color: purple;">${currency.format(e.usd)}</span></div>
 <div>Venezuelan bolívar: <span style="color: purple;">${currency.format(e.vef)}</span></div>
 <div>Vietnamese dong: <span style="color: purple;">${currency.format(e.vnd)}</span></div>
 <div>Silver: <span style="color: purple;">${currency.format(e.xag)}</span></div>
 <div>Gold: <span style="color: purple;">${currency.format(e.xau)}</span></div>
 <div>Special drawing rights: <span style="color: purple;">${currency.format(e.xdr)}</span></div>
 <div>Stellar lumens: <span style="color: purple;">${currency.format(e.xlm)}</span></div>
 <div>XRP ripple: <span style="color: purple;">${currency.format(e.xrp)}</span></div>
 <div>yearn.finance: <span style="color: purple;">${currency.format(e.yfi)}</span></div>
 <div>South African rand: <span style="color: purple;">${currency.format(e.zar)}</span></div>
 `
 })

 cardContent.appendChild(content);
 card.appendChild(cardContent);
 column.appendChild(card);
 columns.appendChild(column);

 cardContentTwo.appendChild(contentTwo);
 cardTwo.appendChild(cardContentTwo);
 columnTwo.appendChild(cardTwo);
 columns.appendChild(columnTwo);

 cardContentThree.appendChild(contentThree);
 cardThree.appendChild(cardContentThree);
 columnThree.appendChild(cardThree);
 columns.appendChild(columnThree);

 container.appendChild(columns);
 
}


// console.log(searchBar);
// searchBar.addEventListener('keyup', (e) => {
// const searchString = e.target.value;
// const filteredCoins = jsonPrices.filter( coin => {
// // return coin.name.includes(searchString) || coin.symbol.includes(searchString);
// });
// // console.log(filteredCoins);
// // getPrices(filteredCoins);
// });
////// getGlobalInfo();








// event listeners:
// trendingButton.addEventListener('click', getTrends);
// popularButton.addEventListener('click', getPrices);
// newsButton.addEventListener('click', getCategoriesInfo);
// platformsButton.addEventListener('click', getPlatformsInfo);
// productsButton.addEventListener('click', getProductsInfo)
// globalButton.addEventListener('click', getGlobalInfo);
/////

document.addEventListener("DOMContentLoaded", () => {
 trendingButton && trendingButton.addEventListener('click', getTrends);
 popularButton && popularButton.addEventListener('click', getCoins);
 categoriesButton && categoriesButton.addEventListener('click', getCategoriesInfo);
 platformsButton && platformsButton.addEventListener('click', getPlatformsInfo);
 derivativesButton && derivativesButton.addEventListener('click', getDerivatives);
 globalButton && globalButton.addEventListener('click', getGlobalInfo);
});












//greensock:
const t1 = new TimelineMax();
const t2 = new TimelineMax();
const t3 = new TimelineMax();
const t4 = new TimelineMax();
const t5 = new TimelineMax();
const t6 = new TimelineMax();

t1.from("#eth", 3, {
 delay: 0.2,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#eth", 3, {
 delay: 0.2,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");

t2.from("#ada", 3, {
 delay: 0.3,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#ada", 3, {
 delay: 0.3,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");

t3.from("#link", 3, {
 delay: 0.4,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#link", 3, {
 delay: 0.4,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");

t4.from("#binance", 3, {
 delay: 0.5,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#binance", 3, {
 delay: 0.5,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");

t5.from("#litecoin", 3, {
 delay: 0.6,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#litecoin", 3, {
 delay: 0.6,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");

t6.from("#xrp", 3, {
 delay: 0.7,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}).from("#xrp", 3, {
 delay: 0.7,
 opacity: 0,
 y: -40,
 ease: Expo.ease
}, "-=4");
////////