//find will go through each element in array, and once it finds sought for element, will return just that element

const videos = ['Star Wars IV', 'Star Wars V', 'Star Wars VI'];

const searchForANewHope = videos.find(function(video){
    return video.includes('IV');//will only return SW IV; as string
});

//overall, find will retrieve back specific element from array