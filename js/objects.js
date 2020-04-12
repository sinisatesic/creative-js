

const user = {  //object
    name: 'Blark',  //properties(keys) : values
    age: 369,
    married: false,
    greet: function(){      //method (function inside object)
        console.log('wassuop');
    }
};

console.log(user.name); //conso (property) greet: () => void  --internal/window; type window.console in console for more info
user.greet();