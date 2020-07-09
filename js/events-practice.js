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

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const numTasks = document.querySelector('.numTasks b');
// const tasks = list.children;
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => { //event for click on submit button
//     const newTask = document.createElement('li');   //create new li element
//     newTask.classList.add('.task'); //add class of task to newly created li element
//     newTask.innerText = `task ${tasks.length + 1}`; //what text will show after "task" for new li
//     list.appendChild(newTask); //append newly created li element to ul with class list
//     numTasks.innerText = tasks.length;  //number of tasks heading will contain text of the length of li tasks in ul with class list
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('task');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     newTask.classList.add('task');
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     newTask.classList.add('task');
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

// const button = document.querySelector('.submit');
// const list = document.querySelector('.list');
// const tasks = list.children;
// const numTasks = document.querySelector('.numTasks b');
//
// button.addEventListener('click', e => {
//     const newTask = document.createElement('li');
//     newTask.innerText = `task ${tasks.length + 1}`;
//     newTask.classList.add('task');
//     list.appendChild(newTask);
//     numTasks.innerText = tasks.length;
// });

const button = document.querySelector('.submit');
const list = document.querySelector('.list');
const tasks = list.children;
const numTasks = document.querySelector('.numTasks b');

button.addEventListener('click', e => {
    const newTask = document.createElement('li');
    newTask.innerText = `task ${tasks.length + 1}`;
    newTask.classList.add('task');
    list.appendChild(newTask);
    numTasks.innerText = tasks.length;
});

const buttonTwo = document.querySelector('.second-submit');
const arts = document.querySelector('.arts');
const sections = arts.children;

buttonTwo.addEventListener('click', e => {
    const newSection = document.createElement('section');
    newSection.innerText = `party time`;
    newSection.classList.add('sec');
    newSection.classList.add('testy');
    arts.appendChild(newSection);

})















