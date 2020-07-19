//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
//if everything loads up, run this function ^
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
//generating new todo below:
function addTodo(e) {
    //prevent form from submitting
    e.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD todo to local storage
    saveLocalTodos(todoInput.value);
    //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todo Input value after creating new todo
    todoInput.value = "";
}

function deleteCheck(e) { // better to remember as delete AND check - toggle
    const item = e.target;
    //Delete todo item
    if (item.classList[0] === 'trash-btn') {
        //below targets parent element of trash button, so specific todo
        const todo = item.parentElement;
        //Animation when removing item
        todo.classList.add('fall');
        removeLocalTodos(todo);
        //transitionend ensures after fall animation, todo is removed from list
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //check mark/completed icon
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "incomplete":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
        }
    });
}

function saveLocalTodos(todo){
    //check first if there is already a todo in local storge, to avoid re-writing it
    //CHECK - do i already have todo in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        //^checking whether 'todos' exists
        todos = [];
        //if no todos, creates empty array ^
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        //if there is todos already, we get back todos from local storage (array)
    }
    todos.push(todo); //push to todos array
    localStorage.setItem('todos', JSON.stringify(todos));
    //set it back to local storage
}



function getTodos(){
    //check - are there already todos in there (local storage)?
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        //Trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //Append to list
        todoList.appendChild(todoDiv);
    });
}


function removeLocalTodos(todo){
    //TODO IS THE DIV
//check - are there already todos in there (local storage)?
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    //^ inner text of first child of todo div
    todos.splice(todos.indexOf(todoIndex), 1);
    //removes from array 1 todo (todos.indexOf(todoIndex)
    localStorage.setItem('todos', JSON.stringify(todos));
}
