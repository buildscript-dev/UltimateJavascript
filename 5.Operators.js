// ===================
//     Operators
// ===================

// Operators perform operations on values (operands).
// Example: Operand Operator Operand → Result

let a = 100;
let b = 20;

// ---------------------
// Arithmetic Operators
// ---------------------
console.log(a + b);  // 120  (addition)
console.log(a - b);  // 80   (subtraction)
console.log(a * b);  // 2000 (multiplication)
console.log(a ** b); // 100^20 (exponentiation)
console.log(a / b);  // 5    (division)
console.log(a % b);  // 0    (modulus / remainder)

// Increment & Decrement
console.log(++a); // pre-increment: increase first, then use → 101
console.log(a++); // post-increment: use first, then increase → 101 (a becomes 102 after this)
console.log(--a); // pre-decrement: decrease first, then use → 101
console.log(a--); // post-decrement: use first, then decrease → 101 (a becomes 100 after this)

// ---------------------
// Assignment Operators
// ---------------------
a = 100; // reset a for clarity

a += 5;  // a = a + 5 → 105
console.log(a);

a -= 5;  // a = a - 5 → 100
console.log(a);

a *= 2;  // a = a * 2 → 200
console.log(a);

a /= 4;  // a = a / 4 → 50
console.log(a);

a %= 7;  // a = a % 7 → 1
console.log(a);

// ⚠ Common beginner mistakes:
// `a =+ 5` → assigns +5 (just 5), not add 5
// `a =- 5` → assigns -5 (just -5), not subtract 5
// `a =* 5` and `a =/ 5` are invalid

// ---------------------
// Comparison Operators
// ---------------------
a = 10;
b = "10";

console.log(a == b);   // true  (loose equality, checks value only)
console.log(a === b);  // false (strict equality, checks value + type)
console.log(a != b);   // false (not equal by value)
console.log(a !== b);  // true  (not equal by value or type)
console.log(a > 5);    // true
console.log(a < 5);    // false
console.log(a >= 10);  // true
console.log(a <= 9);   // false

// ---------------------
// Logical Operators
// ---------------------
let x = true;
let y = false;

console.log(x && y); // false (AND → both must be true)
console.log(x || y); // true  (OR → at least one true)
console.log(!x);     // false (NOT → flips the value)
console.log(!y);     // true

// ---------------------
// Ternary Operator
// ---------------------
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 18;

let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote); // "Yes, can vote"

let score = 45;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // "Fail"

// Nested ternary example
let marks = 75;
let grade = marks >= 90 ? "A+" :
            marks >= 75 ? "A" :
            marks >= 60 ? "B" :
            marks >= 50 ? "C" : "F";
console.log(grade); // "A"
