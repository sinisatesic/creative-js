const bio1 = document.querySelector('#advisory-bio1');
const bio2 = document.querySelector('#advisory-bio2');
const bio3 = document.querySelector('#advisory-bio3');
const bio4 = document.querySelector('#advisory-bio4');

const pic1 = document.querySelector('#advisory-pic1');
const pic2 = document.querySelector('#advisory-pic2');
const pic3 = document.querySelector('#advisory-pic3');
const pic4 = document.querySelector('#advisory-pic4');

//should prolly just forEach next time...

pic1.addEventListener('click', () => {
    showBio1();
});

pic2.addEventListener('click', () => {
    showBio2();
});

pic3.addEventListener('click', () => {
    showBio3();
});

pic4.addEventListener('click', () => {
    showBio4();
});

const showBio1 = () => {
    bio1.classList.add('section-ease-reverse');
    bio1.style.display = 'block';
    pic1.style.cursor = 'auto';
};

const showBio2 = () => {
    bio2.classList.add('section-ease-reverse');
    bio2.style.display = 'block';
    pic2.style.cursor = 'auto';
};

const showBio3 = () => {
    bio3.classList.add('section-ease-reverse');
    bio3.style.display = 'block';
    pic3.style.cursor = 'auto';
};

const showBio4 = () => {
    bio4.classList.add('section-ease-reverse');
    bio4.style.display = 'block';
    pic4.style.cursor = 'auto';
};
