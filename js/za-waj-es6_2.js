const currSection = document.querySelector('.curr-dev-info');
const currButton = document.querySelector('.currButton');



const showCurrSection = () => {
    currSection.classList.add('section-ease');
    currSection.style.display = 'block';
};

currButton.addEventListener('click', () => {
    showCurrSection();
});