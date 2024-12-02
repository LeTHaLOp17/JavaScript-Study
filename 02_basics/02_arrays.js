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
const real_array = array.flat(Infinity); //Try to write the exact number of nested array instead of infinity for best practice
console.log(real_array); //[1, 2, 3, 4, 5, 6, 7, 6, 8, 4, 7]

console.log(Array.isArray("Ayush Kumar")); //Tells if the given data is array or not 
console.log(Array.from("Ayush Kumar")); //changes the input into an array
console.log(Array.from({name : "Ayush Kumar"})); //This will give you an empty array, becuse we have to diclaire if we want to make the arrray of keys or itd values

let score = 100;
let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score, score1, score2, score3));  //It will return an array with set of elements, it can anything arrays variables, ...
