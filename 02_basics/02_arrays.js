const marvel_heroes = ["Thor", "IronMan", "Captain America"];
const dc_heroes = ["Superman", "flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //['Thor', 'IronMan', 'Captain America', 'Hawkeye', ['Superman', 'flash', 'Batman']]
//push will add all the elemens as an array and make it a 2d array on last element

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes); //['Thor', 'IronMan', 'Captain America', 'Hawkeye','Superman', 'flash', 'Batman']
//concat will add all the elemens as an signle array and give the output


// const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);   //Same as concat but in this method(spread method) we can add more than two array

const array = [1, 2, 3, [4, 5, 6], 7, [6, 8, [4,7]]];
const real_array = array.flat(Infinity);
console.log(real_array);
