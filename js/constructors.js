// constructor funct9on

// can create objects dynamically in terms of their values/properties

function toDO(name, completed){
    this.name = name;
    this.completed = completed;
    (this.getTodoName = function(){
        console.log(this.name);
    });
}

const todo = new Todo("drink water", true);
const todo2 = new Todo("walk my dog", true);

todo.getTodoName();
todo2.getTodoName();