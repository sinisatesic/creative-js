//MAP METHOD - for arrays
//allows copying of an array; loops over each element and can add modification - then return new array

const videos = ['Scary Movie', 'Scary Movie 2', 'Scary Movie 3'];

const newVideos = videos.map(function(video){
    return video.toUpperCase();
  //  console.log(video);//will return undefined for each element - b/c function doesn't return value
});

newVideos.push('ayyy'); //will insert this string as element to videos array

console.log(newVideos); //will return elements of videos upper-cased

//mapping is great for modifications to an array (as a new array)