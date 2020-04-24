


const collectionItems = document.getElementsByClassName('item');
const nodeItems = document.querySelector('#todo-list');
const nodeItemsForLoop = document.querySelectorAll('.item');
const todoNr = document.getElementsByClassName('todo-nr')[0]; //selects first todo-nr



//everything in DOM is a Node - general term used for object
// different types of nodes
//HTMLCollection can ONLY hold Node elements
// NodeList can hold Node elements, Node texts, Node comments

console.log(collectionItems);
console.log(nodeItems.childNodes);
//.childNodes will return elements within #todo-list
// the text from above log will include Node texts, which is empty space between #todo-list and its children elements
// above can include Node comments, which are html comments but will appear in NodeList in console


//if only Node elements are desired, .children is solution (will be HTMLCollection):
console.log(nodeItems.children);

//one can loop over these as well
for(item of nodeItemsForLoop) {
    console.log(item);
}

//looping over HTMLCollection
for(item of collectionItems){
    console.log(item);
}

//LOOPING DIFFERENCE: with NodeLists, you can use forEach to loop through them,
//with HTMLCollections, you cannot use forEach to loop through them
nodeItemsForLoop.forEach( function (item){
    console.log(item);
});

//Another difference: HTMLCollections can update themselves (query selectors (NodeList) are STATIC; they don't update when we push in new element);
// in other words, if new element is added to collection, it will auto update collection
// HOWEVER, you can make query selectors (NodeList) DYNAMIC by converting var into new var.children():
//      const todoList = document.querySelector("#todo-list");
//      const items = todoList.children; (will transform from NodeList to HTMLCollection);
const collectionItemsUpdate = document.getElementsByClassName('item');
for(item of collectionItemsUpdate){
    console.log(item); // will not include item 3 yet because the code for that is below this
}

const todoList = document.getElementById('todo-list');

const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';
todoList.appendChild(newItem);
//above 4 lines will create element li, add class of item to it, and text of Item 3 to it;
// it will then append newItem const to the todoList const

//Update the amount of items that we have
// todoNr.innerText = collectionItemsUpdate.length; // will be 3

const anotherItem = document.createElement('li');
anotherItem.classList.add('item');
anotherItem.innerText = 'Item 4';
todoList.appendChild(anotherItem);

todoNr.innerText = collectionItemsUpdate.length; // will be 4
console.log(collectionItemsUpdate); //logs 4 in HTMLCollection