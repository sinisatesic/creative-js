//FUNCTIONS ARE OBJECTS AS WELL

//example of const to anonymous function
const sayHello = function(){
    console.log('hi');
};
sayHello();


const videos = ['blade', 'blade II', 'blade III'];

//previous function construction (es5):
const newVideos = videos.map(function(video){
    return video.length < 10 ? video : "nope";
});

//arrow function construction (es6):
const arrowVideos = videos.map(video => { //if there's multiple params where video is, put them in parenthesis
    return video.length < 10 ? video : "nope";
});

//another arrow function but with even less code:
const anotherArrow = videos.map(video => (video.length < 10 ? video : 'nope'));
//another example
const anotherArrowUpperCase = videos.map(video => video.toUpperCase());
