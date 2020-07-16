

const videos = ['Scary Movie', 'Scary Movie 2', 'Scary Movie 3'];

//regular if else
const newVideos = vides.map(function(video){
    if(video.length < 10){
        return video;
    }else{
        return 'nah';
    }
});

//ternary if else
const newVideos = videos.map(function(video){
    return video.length < 10 ? video : 'nah';
});