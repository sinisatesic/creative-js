const pic1 = document.querySelector('#meet-the-team-pic1');
const bio1 = document.querySelector('#meet-the-team-bio1');
const pic2 = document.querySelector('#meet-the-team-pic2');
const bio2 = document.querySelector('#meet-the-team-bio2');

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

pic1.addEventListener('click', () => {
    showBio1();
});

pic2.addEventListener('click', () => {
    showBio2();
});