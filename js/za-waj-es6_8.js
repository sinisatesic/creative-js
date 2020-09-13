const crossCultureSection = document.querySelector('.cross-culture-info');
const crossCultureButton = document.querySelector('.crossCultureButton');



const showCrossCultureSection = () => {
    crossCultureSection.classList.add('section-ease');
    crossCultureSection.style.display = 'block';
};

crossCultureButton.addEventListener('click', () => {
    showCrossCultureSection();
});