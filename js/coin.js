const API_URL = 'https://api.coingecko.com/api/v3/coins/list';
const mainDiv = document.querySelector('.divs');
const secondDiv = document.querySelector('.divsTwo');

const getInfo = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();


    console.log(json);

    json.forEach(obj => {

        //<div class="column">
        //  <div class="card">
        //    <div class="card-image">
        //        <figure class="image is-4by3">
        //          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        //        </figure>
        //    </div>
        //  </div>
        //</div>

        // const newColumn = document.createElement('div');
        // newColumn.classList.add('column');

        // const firstCard = document.createElement('div');
        // firstCard.classList.add('card');
        // newColumn.appendChild(firstCard);

        // const secondCard = document.createElement('div');
        // secondCard.classList.add('card');
        // newColumn.appendChild(secondCard);

        // const firstDiv = document.createElement('div');
        // firstDiv.classList.add('divs');
        // firstDiv.innerHTML = obj.name;
        // firstDiv.appendChild(firstCard);

        // const secondDiv = document.createElement('div');
        // secondDiv.classList.add('divs');
        // secondDiv.innerHTML = obj.symbol;
        // secondDiv.appendChild(secondCard);

        // container.appendChild(firstDiv);
        // container.appendChild(secondDiv);


        const column = document.createElement('div');
        // column.classList.add('column');
        const columnTwo = document.createElement('div');
        // columnTwo.classList.add('column');

        const card = document.createElement('div');
        card.classList.add('card');
        const cardTwo = document.createElement('div');
        cardTwo.classList.add('column');

        const text = document.createElement('text');
        text.innerHTML = obj.name;
        const textTwo = document.createElement('text');
        textTwo.innerHTML = `Symbol = ${obj.symbol}`;

        card.appendChild(text);
        cardTwo.appendChild(textTwo);

        column.appendChild(card);
        columnTwo.appendChild(cardTwo);

        mainDiv.appendChild(column);
        secondDiv.appendChild(columnTwo);
    });
}

getInfo();