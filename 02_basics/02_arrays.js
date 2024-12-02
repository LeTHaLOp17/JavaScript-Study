const marvel_heroes = ['Thor', 'IronMan', 'Captain America', 'Hawkeye'
];
const dc_heroes = ['Superman', 'flash', 'Batman'];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); //['Thor', 'IronMan', 'Captain America', 'Hawkeye', ['Superman', 'flash', 'Batman']]
//push will add all the elemens as an array and make it a 2d array on last element