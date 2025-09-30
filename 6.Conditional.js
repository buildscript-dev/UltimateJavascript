// =====================
//   Conditional Statements
// =====================

// ---------------------
// prompt() and alert()
// ---------------------
// prompt(): shows a dialog box to get input from the user (returns a string)
// alert(): shows a message in a dialog box

let a = prompt("Hey, what's your age?");   // get input from user
a = Number.parseInt(a);                     // convert string to number

console.log(typeof a);                      // check the type (should be "number")

alert("Hey, I'm an alert dialog box!");    // show a message

// ---------------------
// if-else Conditional
// ---------------------
// Executes a block of code if the condition is true

if (a < 0) {
    console.log("Not born yet");
} else if (a < 17) {
    console.log("Teen");
} else if (a <= 18) {
    console.log("Just adult");
} else if (a > 100) {
    console.log("Are you really alive?");
} else {
    console.log("Adult");
}

// ---------------------
// Switch-Case
// ---------------------
// Executes a block based on exact value matches

let expr = "mango";

switch (expr) {
    case "mango":
        console.log("I'm Mango");
        break;
    case "banana":
        console.log("I'm Banana");
        break;
    default:
        console.log("Unknown fruit");
}

// ---------------------
// Summary Notes
// ---------------------
// 1. prompt() → get user input (always string, convert to number if needed)
// 2. alert() → show a message to the user
// 3. if-else → use for range conditions
// 4. switch-case → use for exact value comparisons
// 5. Always validate input from prompt before using it
