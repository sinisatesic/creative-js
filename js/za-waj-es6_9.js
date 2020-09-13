const expertiseSection = document.querySelector('.expertise-info');
const expertiseButton = document.querySelector('.expertiseButton');



const showExpertiseSection = () => {
    expertiseSection.classList.add('section-ease');
    expertiseSection.style.display = 'block';
};

expertiseButton.addEventListener('click', () => {
    showExpertiseSection();
});