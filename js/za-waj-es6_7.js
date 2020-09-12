const regionalSection = document.querySelector('.regional-info');
const regionalButton = document.querySelector('.regionalButton');



const showRegionalSection = () => {
    regionalSection.classList.add('section-ease');
    regionalSection.style.display = 'block';
};

regionalButton.addEventListener('click', () => {
    showRegionalSection();
});