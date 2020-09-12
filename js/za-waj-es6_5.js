const langImmersionSection = document.querySelector('.lang-immersion-info');
const langImmersionButton = document.querySelector('.langImmersionButton');



const showLangImmersionSection = () => {
    langImmersionSection.classList.add('section-ease');
    langImmersionSection.style.display = 'block';
};

langImmersionButton.addEventListener('click', () => {
    showLangImmersionSection();
});