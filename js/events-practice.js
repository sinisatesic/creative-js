const first = document.querySelector('.first-header');
const second = document.querySelector('.second-header');
const third = document.querySelector('.third-header');

first.addEventListener('mouseenter', e => {
    second.classList.toggle('party');
});

second.addEventListener('mouseenter', e => {
    third.classList.toggle('party');
});

third.addEventListener('mouseenter', e => {
    third.classList.add('flippy');
});