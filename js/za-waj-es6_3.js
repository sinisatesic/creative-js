const translationSection = document.querySelector('.translation-info');
const translationButton = document.querySelector('.translationButton');



const showTranslationSection = () => {
    translationSection.classList.add('section-ease');
    translationSection.style.display = 'block';
};

translationButton.addEventListener('click', () => {
    showTranslationSection();
});