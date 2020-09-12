const profDevSection = document.querySelector('.prof-dev-info');
const profDevButton = document.querySelector('.profDevButton');



const showProfDevSection = () => {
    profDevSection.classList.add('section-ease');
    profDevSection.style.display = 'block';
};

profDevButton.addEventListener('click', () => {
    showProfDevSection();
});