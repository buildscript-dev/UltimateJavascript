// ===================
//       Loops in JS
// ===================

// A loop repeats a block of code until a condition is met.

// ---------------------
// 1. For Loop
// ---------------------
// Used when you know how many times you want to repeat.
console.log("For Loop Example:");
for (let i = 0; i < 10; i++) {
    console.log(i);  // prints numbers 0 to 9
}

// ---------------------
// 2. For-in Loop
// ---------------------
// Iterates over KEYS of an object.
console.log("For-in Loop Example:");
let obj = {
    build: 123,
    script: 154,
    nothing: 133,
    pixel: 182,
};
for (let key in obj) {
    console.log("Marks of " + key + " are " + obj[key]);
}

// ---------------------
// 3. For-of Loop
// ---------------------
// Iterates over VALUES of an iterable (like arrays or strings).
console.log("For-of Loop Example:");
for (let value of "BUILD") {
    console.log(value);  // prints B U I L D
}

// ---------------------
// 4. While Loop
// ---------------------
// Runs as long as the condition is TRUE.
console.log("While Loop Example:");
let j = 0;
while (j < 5) {
    console.log(j);  // prints 0 to 4
    j++;
}

// ---------------------
// 5. Do-While Loop
// ---------------------
// Runs ONCE first, then keeps running if the condition is TRUE.
console.log("Do-While Loop Example:");
let k = 0;
do {
    console.log(k);  // prints 0 to 4
    k++;
} while (k < 5);

// ---------------------
// Quick Summary
// ---------------------
// For → fixed number of times
// For-in → keys of an object
// For-of → values of iterable (arrays, strings)
// While → keep looping while condition is true
// Do-While → always runs once, then checks condition
