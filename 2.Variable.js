// =====================
//       Variables
// =====================

// What is a Variable?
// - A variable is like a container that stores data (a value) in memory.
// - JavaScript is "dynamically typed":
//   You don’t need to declare a type (like int, string, etc.).
//   The same variable can hold different types of values during execution.

// ---------------------
// var (old, avoid using)
// ---------------------
var a = 123;        // old style (before ES6). Function-scoped, not block-scoped.
var a = 456;        // can be redeclared in the same scope (confusing, buggy).
console.log(a);     // 456

// ---------------------
// const (constant value)
// ---------------------
const pi = 3.14;    // const = constant, block-scoped.
// Must be assigned at declaration. Cannot be reassigned.
// Uncomment the line below → will throw error if you try to reassign.
// pi = 123; 
console.log(pi);    // 3.14

// ---------------------
// let (modern variable)
// ---------------------
let num = 1234;     
console.log(num);   // 1234

num = "BuildScript"; // can be reassigned with a new value (even different type).
console.log(num);   // "BuildScript"

// ---------------------
// Block scope
// ---------------------
// Block = anything inside { }
{
  let blockLet = "inside block";
  const blockConst = "also inside block";
  console.log(blockLet);   // works here
  console.log(blockConst); // works here
}
// console.log(blockLet);   // ERROR: not accessible outside block
// console.log(blockConst); // ERROR: not accessible outside block

// var ignores block scope (not safe):
{
  var blockVar = "var ignores blocks";
}
console.log(blockVar); // accessible outside → confusing!
