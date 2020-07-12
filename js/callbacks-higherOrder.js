const videos = ['blade 1', 'blade 2', 'blade 3'];

videos.forEach(function(video){ // 'video' can be named anything
    console.log('in between string'); //will log this between each iteration
    console.log(video); // loops over each individual strig in array
});

//A forEach loop is a higher-order function
// a higher-order function is a function which takes a function as parameter

function repeater(fn){ //will repeat function parameter 3 times
    fn();
    fn();
    fn();
}

function sayHello(){
    console.log('hello there');
}

repeater(sayHello); //will print 'hello there' 3 times


//call back function - below, pretend there's button variable
button.addEventListener('click', function(){ //<-- call back function; gets executed at specific point/event, not immediately
    //stuff
});