
//Sort

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

items.sort();

console.log(items); //alphabetical sorting

//if numbers, however, sort works differently

// ratings.sort();

console.log(ratings); //turns nums into strings to sort by alphabetical order again
// we can pass compare function, though
// based on first 2 values, we can sort them

ratings.sort(function(a, b){
    return a - b;
}); //compare function for sort; will either negative, positive or zero value
// if a - b equates to positive number, b will be sorted before a
// if a - b equates to negative number, a will be sorted before b
// if a - b equates to 0, no change will be done

//as arrow function:
ratings.sort((a,b) => a - b);
console.log(ratings);

//sort will modify original array; keeps reference

//sort can work with object property numbers too:

const games = [
    {title: 'Halo', rating: 10},
    {title: 'Starcraft II', rating: 10},
    {title: 'Fortnite', rating: 1}
];

games.sort((a,b) => a.rating - b.rating);
console.log(games);