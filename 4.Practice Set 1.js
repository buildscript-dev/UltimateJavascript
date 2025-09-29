// ==========================
//   Practice Set
// ==========================

// 1. Create a variable of type string and add number to it
let userName = "build";
let num = 123;

// When a string and number are added → number is converted to string
console.log(userName + num); // "build123"

// 2. Find the type of different values
console.log(typeof userName);       // "string"
console.log(typeof num);            // "number"
console.log(typeof (userName + num)); // "string" (because of concatenation)

// 3. Create an object
const item = {
  build: true,
  fake: false,
  script: true,
};

console.log(item);            // { build: true, fake: false, script: true }
console.log(item.script);     // true (dot notation)
console.log(item["fake"]);    // false (bracket notation)

// 4. Add new key to the object
item.coder = false;           // same as item['coder'] = false
console.log(item);            // { build: true, fake: false, script: true, coder: false }

// 5. Word meaning dictionary (object example)
const dict = {
  appreciate: "recognize the full worth",
  ataraxia: "a state of serene calmness",
  plethora: "a large or excessive amount",
};

console.log(dict.ataraxia);      // "a state of serene calmness"
console.log(dict["appreciate"]); // "recognize the full worth"
console.log(dict.plethora);      // "a large or excessive amount"
