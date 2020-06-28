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

//dynamic adding below

const button = document.querySelector('.submit');
const list = document.querySelector('.list');
const tasks = list.children;
const numTasks = document.querySelector('.numTasks b');

button.addEventListener('click', e => {
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerText = `task ${tasks.length + 1}`;
    list.appendChild(newTask);
    numTasks.innerText = tasks.length;
})