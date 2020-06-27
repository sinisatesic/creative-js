const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector(".todo-nr b");
// console.log(todoNr);

const mainTitle = document.querySelector(".main-title");

const items = todoList.children;
//
// //ATTACH AN EVENT LISTENER - CLICK, SCROLL, RESIZING THE BROWSER; event listener listens to one of these
button.addEventListener('click', function(){
    // console.log('NEW ITEM ADDED -(anonymous function event)- ');
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = `Item ${items.length + 1}`;
    todoList.appendChild(newItem); //adding li tag item to todoList, which is ul with id todoList
    todoNr.innerText = items.length; //this is here so inner text updates itself with each event
}); //one time use: anonymous function
//
// // function addItem(){
// //     console.log('FUNCTION FOR EVENT');
// // }
//

button.addEventListener('keydown', function(event){
    if(event.keyCode === 81){ //if the event should be on specific key input; here is example with it being 'q'
        mainTitle.classList.toggle('color');
    }
    console.log(event);
    // mainTitle.style.color = "red"; //this way if you wish to manually add style properties, but that could get cumbersome
    // mainTitle.style.fontSize = "50px";
    // mainTitle.classList.add('color'); //add a class to element which can have multiple style properties already affiliated to it
    // mainTitle.classList.toggle('color'); //will check to see if class is attributed; if not, will add - if added, will remove
});
