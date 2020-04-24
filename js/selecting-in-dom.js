
const headers = document.getElementsByTagName("h2");

console.log(headers);
//will return HTML collection (a container but not actual array)
//holds header elements

const list = document.getElementsByClassName('item');
console.log(list);
console.log(list.length);

const alo = document.getElementById('alo');
console.log(alo);
//if there's 2 ids of same name by mistake, it will always return first one

//Query selector is superior as you can modify all css elements with it
// Query selector/selector all will return a NodeList
const query = document.querySelector('h3');
console.log(query);
const potato = document.querySelector('.potato');
console.log(potato);
const carrot = document.querySelector('#carrot');
console.log(carrot);;

const divs = document.querySelectorAll('div');
console.log(divs);
//will return node list of all divs

const classy = document.querySelectorAll('div.classy');
console.log(classy);
//will select all divs but only with class 'classy'; can do this with other elements as well


const tet = document.querySelector('#alo h3');
console.log(tet);
//will target only h3 within an element of id alo


const blork = document.querySelectorAll('div h3');
console.log(blork);
//will target all h3 tags within divs


