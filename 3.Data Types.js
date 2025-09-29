// ===================
//     Data Types
// ===================

// In JavaScript, there are two categories of data types:
// 1. Primitive (7 types, immutable)
// 2. Non-Primitive (objects, arrays, functions, etc.)

// --------------------
// Primitive Data Types
// --------------------

// 1. Null
let a = null;               // intentional absence of value
console.log(a);             // null

// 2. Number
let num = 123;              // integer/float/double
console.log(num);           // 123

// 3. Boolean
let isActive = true;        // true or false
console.log(isActive);      // true

// 4. BigInt
let largest = 1234324324321n;  // use 'n' for BigInt
console.log(largest);          // 1234324324321n

// 5. String
let userName = "BuildScript";   // text data
console.log(userName);          // BuildScript

// 6. Symbol
let specialSymbol = Symbol("unique symbol"); 
console.log(specialSymbol);     // Symbol(unique symbol)

// 7. Undefined
let naah;                       // declared but not assigned
console.log(naah);              // undefined
console.log(typeof naah);       // "undefined"

// --------------------
// Non-Primitive Data Type
// --------------------

// Object = collection of key-value pairs
const item = {
  build: true,
  fake: false,
  script: true,
};

console.log(item);          // { build: true, fake: false, script: true }
console.log(item.script);   // true
console.log(item["fake"]);  // false
