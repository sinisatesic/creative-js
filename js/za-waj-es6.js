const langSection = document.querySelector('.lang-training-info');
const langButton = document.querySelector('.langButton');



const showLangSection = () => {
    langSection.classList.add('section-ease');
    langSection.style.display = 'block';
};


langButton.addEventListener('click', () => {
    showLangSection();
});
