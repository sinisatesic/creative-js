const API_URL = 'https://dog.ceo/api/breeds/image/random/3';
const randomDogsElement = document.querySelector('.random-dogs');
const button = document.querySelector('.get-doges');

const getRandomDog  = async () => {
    // each time this function is called, inner html of it is set to blank:
    randomDogsElement.innerHTML = '';


    // by default, fetch will make get request to above url:
    const response = await fetch(API_URL);
    // need to then parse the response into json:
    const json = await response.json();
    // log below will show message property of provided object:
    console.log(json.message); // array containing images


    //<div class="column">
    //  <div class="card">
    //    <div class="card-image">
    //        <figure class="image is-4by3">
    //          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    //        </figure>
    //    </div>
    //  </div>
    //</div>

    // because "message" is an array, can use forEach to iterate over it:
    json.message.forEach(dogImage => {
        const columnElement = document.createElement('div');
        columnElement.classList.add('column');

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        //append dynamic card element into dynamic column element:
        columnElement.appendChild(cardElement);

        const cardImageElement = document.createElement('div');
        cardImageElement.classList.add('card-image');
        //append dynamic card image element into dynamic card element div:
        cardElement.appendChild(cardImageElement);

        const figureElement = document.createElement('figure');
        figureElement.classList.add('image');

        //appendy dynamic figure ele to card-image ele:
        cardImageElement.appendChild(figureElement);

        const imageElement = document.createElement('img');
        // dogImage is an array of urls for images, so below works; each dog image will be linked to as source for url for img:
        imageElement.src = dogImage;

        //append dynamic img ele to figure ele:
        figureElement.appendChild(imageElement);

        // lastly, need to append column element into random dogs ele:
        randomDogsElement.appendChild(columnElement);
    });
}

// event listener to generate images once button is clicked
button.addEventListener('click', getRandomDog);