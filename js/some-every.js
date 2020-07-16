//SOME and EVERY - return boolean value

const games = [
    {title: 'Halo', rating: 10},
    {title: 'Starcraft II', rating: 10},
    {title: 'Fortnite', rating: 1}
];


const checkRating = games.every(function(game){
    return game.rating > 8; //check if EVERY game has rating greater than 8
});

console.log(checkRating); //false, since 1 game is less than rating 8

const someRating = games.some(function(game){
    return game.rating > 8;//only 1 has to be in accordance with logic to be true
});

console.log(someRating); //true, since 1 or more has rating greater than 8