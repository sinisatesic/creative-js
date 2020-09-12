const testingSection = document.querySelector('.testing-info');
const testingButton = document.querySelector('.testingButton');



const showTestingSection = () => {
    testingSection.classList.add('section-ease');
    testingSection.style.display = 'block';
};

testingButton.addEventListener('click', () => {
    showTestingSection();
});