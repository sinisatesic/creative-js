const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector('.name-input');

const items = todoList.children;

// //ATTACH AN EVENT LISTENER - CLICK, SCROLL, RESIZING THE BROWSER; event listener listens to one of these

button.addEventListener('click', function(e){
    e.preventDefault();
    // console.log('NEW ITEM ADDED -(anonymous function event)- ');
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    //adding class
    newItem.innerText = nameInput.value;
    //adding text
    todoList.appendChild(newItem); //adding li tag item to todoList, which is ul with id todoList
    todoNr.innerText = items.length; //this is here so inner text updates itself with each event
    nameInput.value = ""; //Delete the value from input
//Creating the element and attaching the listener
    newItem.addEventListener('click', deleteItem);
}); //one time use: anonymous function


function deleteItem(e){
    e.stopPropagation(); // THIS STOPS EVENT BUBBLING - VER NIZE!
    e.target.remove(); //removes element that's targeted
}

todoList.addEventListener('click', e=> {
    todoList.classList.toggle('fade');
});
//this above in combination with deleteItem function is example of event bubbling;
//multiple events initiated simultaneously - this can cause unwanted outcomes
//when li is clicked, also clicking on other things (ul, body, document, window, etc)