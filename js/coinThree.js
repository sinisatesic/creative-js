const container = document.getElementById('containerYes');
const navBarItems = document.getElementById('navBarItems');

const audio = new Audio("sounds/chalo.mp3");
document.addEventListener('click', () => {
    audio.play();
});

//for burger for mobile:
document.addEventListener('click', () => {
    let burger = document.getElementById('navBarItems');
    burger && burger.classList.toggle('is-active');
});

const getTrends = async () => {
    const trendingAPI = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await fetch(trendingAPI);
    const jsonTrends = await response.json();
    const trendingCoins = [...jsonTrends.coins]

    container.innerHTML = ''; // clear out container before appending
    trendingCoins.map(({item}) => buildCoinContainer(item, container));
};

const getPrices = async () => {
    const pricesAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;
    const responsePrice = await fetch(pricesAPI);
    const jsonPrices = await responsePrice.json();
    container.innerHTML = ''; // clear out container before appending
    jsonPrices.map(price  => buildPriceContainer(price, container));
};

const getStatusInfo = async () => {
    const statusAPI = `https://api.coingecko.com/api/v3/status_updates`;
    const statusResponse = await fetch(statusAPI);
    const statusJSON = await statusResponse.json();
    
    container.innerHTML = '';// clear out container before appending
    statusJSON.status_updates.map(status => buildStatusContainer(status, container));
};

const getPlatformsInfo = async () => {
    const fiPlatformsAPI = `https://api.coingecko.com/api/v3/finance_platforms`; 
    const fiPlatformsResponse = await fetch(fiPlatformsAPI);
    const jsonFiPlatforms = await fiPlatformsResponse.json();
    
    container.innerHTML = '';// clear out container before appending
    jsonFiPlatforms.map(Fi => buildPlatformContainer(Fi, container));
};

const getProductsInfo = async () => {
    const productsAPI = `https://api.coingecko.com/api/v3/finance_products`;
    const productsResponse = await fetch(productsAPI);
    const productsJSON = await productsResponse.json();
        
    container.innerHTML = '';// clear out container before appending
    productsJSON.map(product => buildProductContainer(product, container));
};

// getDerivativeInfo();
const getGlobalInfo = async () => {
    const globalAPI = `https://api.coingecko.com/api/v3/global`;
    const globalResponse = await fetch(globalAPI);
    const globalJSON = await globalResponse.json();

    console.log(globalJSON);
}
getGlobalInfo();

function buildCoinContainer(obj, resultsContainer){
const html = `
<div class='column'>
    <div class='card'>
        <div class='card-content'>
            <div class='content'>
                <img src="${obj.large}" id="icon"></img>
                <p> 
                    <span id="name">${obj.name}</span>
                    <span id="symbol">SYMBOL: ${obj.symbol} </span>
                    <span id="rank">RANK: ${obj.market_cap_rank}
                </p>
                <div class='pointer'></div>
            </div>
        </div>
    </div>
</div>
`
resultsContainer.insertAdjacentHTML('beforeend', html);
}

function buildPriceContainer(obj, resultsContainer){
let html = `
<div class='column'>
    <div class='card'>
        <div class='card-content'>
            <div class='content'>
                <img src="${obj.image}" id="pricesIcon">
                <div style="text-align: center">
                    <span class="pricesInfo"><span style="color: green">${obj.name}</span></span>
                    <span id="pricesSymbol">Symbol: ${obj.symbol}</span>
                    <span class="pricesInfo"">Price: <span style="color: olive">${obj.current_price}</span></span>
                    <span class="pricesInfo"">All Time Low: Price: <span style="color: olive">${obj.atl}</span></span>
                    <span class="pricesInfo"">All Time High: Price: <span style="color: olive">${obj.ath}</span></span>
                    <span class="pricesInfo"">24HR Price Change: <span style="color: olive">${obj.price_change_24h}</span></span>
                    <span class="pricesInfo"">24HR Price Change %: <span style="color: olive">${obj.price_change_percentage_24h}</span></span>
                </div>
                <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanBody" : "pacmanBodyBlue"}'>
                    <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanEye" : "pacmanEyeBlue"}'></div>
                    <div class='${resultsContainer.children.length % 2 == 0 ? "pacmanMouth" : "pacmanMouthBlue"}'></div>
                </div>
            </div>
        </div>
    </div>
</div>
`
resultsContainer.insertAdjacentHTML('beforeend', html);
}

function buildStatusContainer(obj, resultsContainer){
let html = `
<div class='columns'>
    <div class='card'>
        <div class='card-content'>
            <div class='content'>
                <span style="color: black; font-family: Courier New">${obj.description}</span>
                <div>Coin: <span style="color: purple;">${obj.project.name}</span></div>
                <div>Symbol: <span style="color: purple;">${obj.project.symbol}</span></div>
                <div>User: <span style="color: purple;">${obj.user}</span></div>
                <div>User title: <span style="color: purple;">${obj.user_title}</span></div>
                <div><img src="${obj.project.image.thumb}"></div>
            </div>
        </div>
    </div>
</div>
`
resultsContainer.insertAdjacentHTML('beforeend', html);
}

function buildPlatformContainer(obj, resultsContainer){
let html = `
<div class='columns is-multiline'>
    <div class='column is-one-quarter'>
        <div class='card'>
            <div class='card-content'>
                <div class='content'>
                    <span style="color: black; font-family: Courier New; font-size: 1.5rem;">${obj.name}</span>
                    <div>Type: <span style="color: purple;">${obj.category}</span></div>
                    <div>URL: <a href="${obj.website_url}">${obj.website_url}</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
`
resultsContainer.insertAdjacentHTML('beforeend', html);
}

function buildProductContainer(obj, resultsContainer){
let html = `
<div class='columns is-multiline'>
    <div class='column is-one-quarter'>
        <div class='card'>
            <div class='card-content'>
                <div class='content'>
                    <div>Platform: <span style="color: purple;">${obj.platform}</span></div>
                    <div>Identifier: <span style="color: purple; word-wrap: break-word;">${obj.identifier}</span></div>
                    <div>Borrow-rate %: <span style="color: purple;">${obj.borrow_rate_percentage}</span></div>
                    <div>Supply-rate %: <span style="color: purple;">${obj.supply_rate_percentage}</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
`
resultsContainer.insertAdjacentHTML('beforeend', html);
}


document.addEventListener("DOMContentLoaded", () => {
    const trendingButton = document.getElementById('trendingButton');
    trendingButton && trendingButton.addEventListener('click', getTrends);
    
    const popularButton = document.getElementById('popularButton');
    popularButton && popularButton.addEventListener('click', getPrices);
    
    const newsButton = document.getElementById('newsButton');
    newsButton && newsButton.addEventListener('click', getStatusInfo);
    
    const platformsButton = document.getElementById('platformsButton');
    platformsButton && platformsButton.addEventListener('click', getPlatformsInfo); 
    
    const productsButton = document.getElementById('productsButton');
    productsButton && productsButton.addEventListener('click', getProductsInfo)
    
})