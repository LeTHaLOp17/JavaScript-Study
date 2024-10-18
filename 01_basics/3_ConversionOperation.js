let score = "33"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

//1, "AnyStringg" => true, 0, "" => false

let Num = 33

let inInteger = String(Num)
console.log(typeof inInteger);

//Agar starting mai string mai to puri line string mai consider ki jayegi
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
