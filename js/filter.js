// Filter is similar to find, but returns multiple values/elements

const videos = ['Matrix', 'Matrix 2', 'Matrix 3'];

const filtering = videos.filter(function(video){
    return video.length < 7;//will return filtered elements within a new array
});

//can also work on array of objects
const games = [
    {title: 'Halo', rating: 10},
    {title: 'Starcraft II', rating: 10},
    {title: 'Fortnite', rating: 1}
];

const goodGames = games.filter(function(game){
   // console.log(game);
    return game.rating > 1
});