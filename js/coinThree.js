const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
const statusAPI = `https://api.coingecko.com/api/v3/status_updates`;
const fiPlatformsAPI = `https://api.coingecko.com/api/v3/finance_platforms`;
const productsAPI = `https://api.coingecko.com/api/v3/finance_products`;
const globalAPI = `https://api.coingecko.com/api/v3/global`;

const container = document.getElementById('containerYes');
const trendingButton = document.getElementById('trendingButton');
const popularButton = document.getElementById('popularButton');
const newsButton = document.getElementById('newsButton');
const platformsButton = document.getElementById('platformsButton');
const navBarItems = document.getElementById('navBarItems');
const productsButton = document.getElementById('productsButton');

const audio = new Audio("sounds/chalo.mp3");
document.addEventListener('click', () => {
    audio.play();
});

//for burger for mobile:
document.addEventListener('click', () => {
    let burger = document.getElementById('navBarItems');
    burger.classList.toggle('is-active');
});
//////



// const audio = new Audio("sounds/chalo.mp3");
// audio.play();
//
// if (document.readyState === "complete"){
//     audio.play();
// }
//
// window.addEventListener('scroll', function(e){
//     audio.play().then(e => audio.play());
// });

const getTrends = async () => {
    container.innerHTML = '';

    const response = await fetch(trendingAPI);
    const jsonTrends = await response.json();

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

const getPrices = async () => {
    container.innerHTML = '';

    const responsePrice = await fetch(pricesAPI);
    const jsonPrices = await responsePrice.json();

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

        // let pacmanBody = document.createElement('div');
        // pacmanBody.classList.add('pacmanBody');
        // let pacmanMouth = document.createElement('div');
        // pacmanMouth.classList.add('pacmanMouth');
        // let pacmanEye = document.createElement('div');
        // pacmanEye.classList.add('pacmanEye');

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


const getStatusInfo = async () => {
    container.innerHTML = '';

    const statusResponse = await fetch(statusAPI);
    const statusJSON = await statusResponse.json();


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
    });
};

const getPlatformsInfo = async () => {
    container.innerHTML = '';

    const fiPlatformsResponse = await fetch(fiPlatformsAPI);
    const jsonFiPlatforms = await fiPlatformsResponse.json();

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

    });
    container.appendChild(columns);
};

const getProductsInfo = async () => {
    container.innerHTML = '';

    const productsResponse = await fetch(productsAPI);
    const productsJSON = await productsResponse.json();

    console.log(productsJSON);

    let columns = document.createElement('div');
    columns.classList.add('columns');
    columns.classList.add('is-multiline');

    productsJSON.forEach(e => {
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
    <div>Platform: <span style="color: purple;">${e.platform}</span></div>
    <div>Identifier: <span style="color: purple; word-wrap: break-word;">${e.identifier}</span></div>
    <div>Borrow-rate %: <span style="color: purple;">${e.borrow_rate_percentage}</span></div>
    <div>Supply-rate %: <span style="color: purple;">${e.supply_rate_percentage}</span></div>
    `;

        cardContent.appendChild(content);
        card.appendChild(cardContent);
        column.appendChild(card);
        columns.appendChild(column);
    });
    container.appendChild(columns);
};

// getDerivativeInfo();
const getGlobalInfo = async () => {
    const globalResponse = await fetch(globalAPI);
    const globalJSON = await globalResponse.json();

    console.log(globalJSON);
}
getGlobalInfo();

//dom shortcut for rendering even listeners:
// document.addEventListener("DOMContentLoaded", () => {
// ​
//     trendingButton && trendingButton.addEventListener('click', getTrends);
//     popularButton && popularButton.addEventListener('click', getPrices);
//     newsButton && newsButton.addEventListener('click', getStatusInfo);
//     platformsButton && platformsButton.addEventListener('click', getPlatformsInfo);
//     productsButton && productsButton.addEventListener('click', getProductsInfo)
// })


trendingButton.addEventListener('click', getTrends);
popularButton.addEventListener('click', getPrices);
newsButton.addEventListener('click', getStatusInfo);
platformsButton.addEventListener('click', getPlatformsInfo);
productsButton.addEventListener('click', getProductsInfo)
// document.addEventListener('scroll', playAudio);



//const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
// const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
// const statusAPI = `https://api.coingecko.com/api/v3/status_updates`;
// const fiPlatformsAPI = `https://api.coingecko.com/api/v3/finance_platforms`;
// const productsAPI = `https://api.coingecko.com/api/v3/finance_products`;
// const globalAPI = `https://api.coingecko.com/api/v3/global`;
//
// const container = document.getElementById('containerYes');
// const trendingButton = document.getElementById('trendingButton');
// const popularButton = document.getElementById('popularButton');
// const newsButton = document.getElementById('newsButton');
// const platformsButton = document.getElementById('platformsButton');
// const navBarItems = document.getElementById('navBarItems');
// const productsButton = document.getElementById('productsButton');
//
//
// document.addEventListener('click', () => {
//     let burger = document.getElementById('navBarItems');
//     burger && burger.classList.toggle('is-active');
// });
//
//
// const getTrends = async () => {
//     const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
//     const response = await fetch(trendingAPI);
//     const jsonTrends = await response.json();
//     const trendingCoins = [...jsonTrends.coins]
//     container.innerHTML = ''; // clear out container before appending
//     trendingCoins.map(({item}) => buildCoinContainer(item, container));
// };
//
//
// const getPrices = async () => {
//     const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
//     const responsePrice = await fetch(pricesAPI);
//     const jsonPrices = await responsePrice.json();
//     container.innerHTML = ''; // clear out container before appending
//     jsonPrices.map(price  => buildPriceContainer(price, container));
// };
//
//
// const getStatusInfo = async () => {
//     const statusAPI = `https://api.coingecko.com/api/v3/status_updates`;
//     const statusResponse = await fetch(statusAPI);
//     const statusJSON = await statusResponse.json();
//     container.innerHTML = '';// clear out container before appending
//     statusJSON.status_updates.map(status => buildStatusContainer(status, container));
// };
//
//
// const getPlatformsInfo = async () => {
//     const fiPlatformsAPI = `https://api.coingecko.com/api/v3/finance_platforms`;
//     const fiPlatformsResponse = await fetch(fiPlatformsAPI);
//     const jsonFiPlatforms = await fiPlatformsResponse.json();
//     container.innerHTML = '';// clear out container before appending
//     jsonFiPlatforms.map(Fi => buildPlatformContainer(Fi, container));
// };
//
//
// const getProductsInfo = async () => {
//     const productsResponse = await fetch(productsAPI);
//     const productsJSON = await productsResponse.json();
//     container.innerHTML = '';// clear out container before appending
//     productsJSON.map(product => buildProductContainer(product, container));
// };
//
// const getGlobalInfo = async () => {
//     const globalAPI = `https://api.coingecko.com/api/v3/global`;
//     const globalResponse = await fetch(globalAPI);
//     const globalJSON = await globalResponse.json();
//
//     console.log(globalJSON);
// }
//
// getGlobalInfo();
//
//
//
// function buildCoinContainer(obj, resultsContainer){
//     const html = `
//     <div class='column'>
//         <div class='card'>
//             <div class='card-content'>
//                 <div class='content'>
//                     <img src="${obj.large}" id="icon"></img>
//                     <p>
//                         <span id="name">${obj.name}</span>
//                         <span id="symbol">SYMBOL: ${obj.symbol} </span>
//                         <span id="rank">RANK: ${obj.market_cap_rank}
//                     </p>
//                     <div class='pointer'></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     resultsContainer.insertAdjacentHTML('beforeend', html);
//     }
//
//     function buildPriceContainer(obj, resultsContainer){
//     let html = `
//     <div class='column'>
//         <div class='card'>
//             <div class='card-content'>
//                 <div class='content'>
//                     <img src="${obj.image}" id="pricesIcon">
//                     <div style="text-align: center">
//                         <span class="pricesInfo"><span style="color: green">${obj.name}</span></span>
//                         <span id="pricesSymbol">Symbol: ${obj.symbol}</span>
//                         <span class="pricesInfo"">Price: <span style="color: olive">${obj.current_price}</span></span>
//                         <span class="pricesInfo"">All Time Low: Price: <span style="color: olive">${obj.atl}</span></span>
//                         <span class="pricesInfo"">All Time High: Price: <span style="color: olive">${obj.ath}</span></span>
//                         <span class="pricesInfo"">24HR Price Change: <span style="color: olive">${obj.price_change_24h}</span></span>
//                         <span class="pricesInfo"">24HR Price Change %: <span style="color: olive">${obj.price_change_percentage_24h}</span></span>
//                     </div>
//                     <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanBody" : "pacmanBodyBlue"}'>
//                         <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanEye" : "pacmanEyeBlue"}'></div>
//                         <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanMouth" : "pacmanMouthBlue"}'></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     resultsContainer.insertAdjacentHTML('beforeend', html);
//     }
//
//     function buildStatusContainer(obj, resultsContainer){
//     let html = `
//     <div class='columns'>
//         <div class='card'>
//             <div class='card-content'>
//                 <div class='content'>
//                     <span style="color: black; font-family: Courier New">${obj.description}</span>
//                     <div>Coin: <span style="color: purple;">${obj.project.name}</span></div>
//                     <div>Symbol: <span style="color: purple;">${obj.project.symbol}</span></div>
//                     <div>User: <span style="color: purple;">${obj.user}</span></div>
//                     <div>User title: <span style="color: purple;">${obj.user_title}</span></div>
//                     <div><img src="${obj.project.image.thumb}"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     resultsContainer.insertAdjacentHTML('beforeend', html);
//     }
//
//     function buildPlatformContainer(obj, resultsContainer){
//     let html = `
//     <div class='columns is-multiline'>
//         <div class='column is-one-quarter'>
//             <div class='card'>
//                 <div class='card-content'>
//                     <div class='content'>
//                         <span style="color: black; font-family: Courier New; font-size: 1.5rem;">${obj.name}</span>
//                         <div>Type: <span style="color: purple;">${obj.category}</span></div>
//                         <div>URL: <a href="${obj.website_url}">${obj.website_url}</a></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     resultsContainer.insertAdjacentHTML('beforeend', html);
//     }
//
//     function buildProductContainer(obj, resultsContainer){
//     let html = `
//     <div class='columns is-multiline'>
//         <div class='column is-one-quarter'>
//             <div class='card'>
//                 <div class='card-content'>
//                     <div class='content'>
//                         <div>Platform: <span style="color: purple;">${obj.platform}</span></div>
//                         <div>Identifier: <span style="color: purple; word-wrap: break-word;">${obj.identifier}</span></div>
//                         <div>Borrow-rate %: <span style="color: purple;">${obj.borrow_rate_percentage}</span></div>
//                         <div>Supply-rate %: <span style="color: purple;">${obj.supply_rate_percentage}</span></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     resultsContainer.insertAdjacentHTML('beforeend', html);
//     }
//
//
//     document.addEventListener("DOMContentLoaded", () => {
//         const trendingButton = document.getElementById('trendingButton');
//         trendingButton && trendingButton.addEventListener('click', getTrends);
//
//         const popularButton = document.getElementById('popularButton');
//         popularButton && popularButton.addEventListener('click', getPrices);
//
//         const newsButton = document.getElementById('newsButton');
//         newsButton && newsButton.addEventListener('click', getStatusInfo);
//
//         const platformsButton = document.getElementById('platformsButton');
//         platformsButton && platformsButton.addEventListener('click', getPlatformsInfo);
//
//         const productsButton = document.getElementById('productsButton');
//         productsButton && productsButton.addEventListener('click', getProductsInfo)
//
//     })

//document.addEventListener("DOMContentLoaded", () => {
// //         const trendingButton = document.getElementById('trendingButton');
// //         trendingButton && trendingButton.addEventListener('click', getTrends);
// //
// //         const popularButton = document.getElementById('popularButton');
// //         popularButton && popularButton.addEventListener('click', getPrices);
// //
// //         const newsButton = document.getElementById('newsButton');
// //         newsButton && newsButton.addEventListener('click', getStatusInfo);
// //
// //         const platformsButton = document.getElementById('platformsButton');
// //         platformsButton && platformsButton.addEventListener('click', getPlatformsInfo);
// //
// //         const productsButton = document.getElementById('productsButton');
// //         productsButton && productsButton.addEventListener('click', getProductsInfo)
// //