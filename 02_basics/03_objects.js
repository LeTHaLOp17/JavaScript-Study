// Objects can be diclare in 2 ways 
// constructor and literals
// ja hum contructor se banate hai to singleton object banta hai (Constructor se humesha signleton banega)
// object.create {Constructor se karne ka tarika}
//lekin dusre tarah se kai objects ban sakte hai (Singleton nhi banta hai)


// Declration of object
// const JsUser = {
//     name: "Ayush",
//     age: 20,
//     email: "aksingh@gmail.com",
//     isLoggedIN: false,
//     lastLoginDays: ["Monday", "Saturday", "Sunday"]
// };

// // Acessing the array 
// console.log(JsUser.name);
// console.log(JsUser["email"]);



// Now using symbol as a key
const mySym = Symbol("key1");

const JsUserSymbol = {
    name: "Ayush",
    [mySym]: "MyKey1", // Correct way of diclairing symbol as a key
    age: 20,
    email: "aksingh@gmail.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday", "Sunday"]
};
 

// console.log(JsUserSymbol.name);
// console.log(JsUserSymbol["email"]);
// console.log(JsUserSymbol[mySym]);
// console.log(typeof JsUserSymbol[mySym]);


// We can override the data easily

JsUserSymbol.email = "Patel@gmail.com"
// console.log(JsUserSymbol["email"]);

// Object.freeze(JsUserSymbol); // Use to freeze the object
// console.log(JsUserSymbol);

JsUserSymbol.greeting = function(){
    console.log("Hello I am ayush kumar ");
}

console.log(JsUserSymbol.greeting());

JsUserSymbol.greetingTwo = function(){
    console.log(`Hello I am ayush kumar, ${this.age} `);
}

console.log(JsUserSymbol.greetingTwo());