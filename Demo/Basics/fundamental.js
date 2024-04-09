// ------------------
// What is JavaScript?
// ------------------

// JavaScript is a high-level, interpreted programming language that is primarily used to make web pages interactive and dynamic.

// Over the years, JavaScript has evolved into a versatile language used not only for front-end web development but also for back-end development (Node.js), mobile app development (React Native, Ionic), game development (Phaser, Three.js), and more. It's one of the core technologies of the World Wide Web along with HTML and CSS.

// ------------------
// Why use JavaScript?
// ------------------

// JavaScript is a crucial component of modern web development for several reasons:

// Client-Side Interactivity:
// JavaScript allows developers to create interactive elements on a web page that respond to user actions without needing to communicate with the server constantly. This improves user experience by providing dynamic content and instant feedback.

// Cross-Platform Compatibility:
// Since JavaScript runs on web browsers, it's platform-independent. This means that applications developed with JavaScript can run on any device with a web browser, whether it's a desktop, tablet, or smartphone.

// Extensive Libraries and Frameworks:
// JavaScript has a vast ecosystem of libraries and frameworks (like React, Angular, Vue.js) that simplify and speed up development. These tools provide pre-written code and functionalities to address common web development challenges.

// Server-Side Development:
// With Node.js, JavaScript can now be used for server-side programming, allowing developers to use the same language for both client-side and server-side scripting. This streamlines development and reduces context-switching for developers.

// Community Support:
// JavaScript has a large and active community of developers. This means there are numerous resources, tutorials, and forums available for learning and troubleshooting, making it easier for developers to find help when needed.

// Install Nodejs
// https://nodejs.org/en/download
// Download tthe lts version

// --------------------------
// Basic Syntax and Structure
// --------------------------

// JavaScript syntax is similar to other programming languages like Java and C, but it's more forgiving and flexible. Here are some basic syntax elements:

// Variables are declared using 'var', 'let', or 'const'
var greeting = "Hello"; // Global scope (not recommended)
let name_ = "John"; // Block scope, reassignable
const age_ = 30; // Block scope, constant

// ----------
// Var vs Let
// ----------

// var
// - var was the original way to declare variables in JavaScript.
// - Variables declared with var are function-scoped or globally scoped, but not block-scoped.
// - This means that a variable declared with var inside a block (like an if statement or a for loop) will be available outside that block.
// - var variables can be re-declared and updated.
// - Hoisting: Variables declared with var are hoisted to the top of their scope during compilation, which means you can use them before they're declared (though they'll have an initial value of undefined until they're assigned).

// let
// - let was introduced in ES6 (ECMAScript 2015) to address some of the issues with var.
// - Variables declared with let are block-scoped. This means that they are only available within the block they are declared in (like an if statement or a for loop).
// - let variables can be updated, but not re-declared within the same scope.
// - let does not get hoisted. If you try to access a let variable before it's declared, you'll get a ReferenceError.

// Note: 'let' is generally preferred for variable declarations in modern JavaScript due to its more predictable and less error-prone behavior.
// It helps in writing cleaner, more readable code.

// Variables and Data Types
//     Declaring variables (var, let, const)
//     Primitive data types (string, number, boolean, object)

// Operators
//     Arithmetic operators (+, -, *, /, %)
//     Comparison operators (==, ===, !=, !==, >, <, >=, <=)
//     Logical operators (&&, ||, !)

// Arithmetic operators
let result = 10 + 5; // result = 15

// Comparison operators
let isEqual = 10 === 10; // isEqual = true

// Logical operators
let isAdult = true;
let hasLicense = false;
let canDrive = isAdult && hasLicense; // canDrive = false

// Control Flow
//     If statements
//     Switch statements
//     Ternary operator

// If statements
let hour = 15;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// Switch statements
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    default:
        console.log("It's another day.");
}

// Ternary operator
let z;
if (x > 10) {
    z = true;
} else {
    z = false;
}

z = x > 10 ? true : false;

// Loops
//     for loop
//     while loop
//     do...while loop
//     Loop control statements (break, continue)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do While loop
do {
    console.log(count);
    count++;
} while (count < 10);

// Functions
//     Declaring functions
//     Parameters and arguments
//     Return statement
//     Function expressions vs. function declarations
//     Arrow functions

// Declaring functions
function greet(name) {
    return "Hello, " + name + "!";
}
// Function expressions
console.log(greet("Alice")); // Hello, Alice!

// Anon functions
let multiply = function (a, b) {
    return a * b;
};

// Arrow functions
let multiply_ = (a, b) => {
    a++;
    b--;
    return a * b;
};

console.log(multiply(5, 3)); // 15
console.log(multiply(5, 1)); // 15

// Scope and Closures
//     Global scope
//     Local scope: functional {}
//     Block scope (with let and const): any {}
//     Closures and their practical uses

// Global scope
let globalVar = "I'm global";
function myFunction() {
    // Local scope
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
}
console.log(localVar); // Error: localVar is not defined

// Closure example
function outerFunction() {
    let outerVar = "I'm outer";
    function innerFunction() {
        console.log(outerVar); // Accessible
    }
    return innerFunction;
}
console.log(outerVar);

const closure = outerFunction();
closure(); // I'm outer

// Arrays
//     Creating arrays
//     Accessing and modifying elements
//     Array methods (push, pop, shift, unshift, splice, slice etc.)
//     Iterating through arrays (for...of, forEach, map, filter, reduce)

// Creating arrays
let fruits = ["apple", "banana", "cherry"];

// Accessing and modifying elements: 0 based indexing
console.log(fruits[0]); // apple
fruits.push("orange"); // Add element to the end
fruits[1] = "pear"; // Modify an element
console.log(fruits); // ["apple", "pear", "cherry", "orange"]

// Array methods
fruits.pop(); // Remove last element
fruits.splice(1, 1); // Remove 1 element at index 1
console.log(fruits); // ["apple", "cherry"]

// Objects
//     Creating objects
//     Accessing object properties
//     Adding and removing properties
//     Object methods

// Creating objects
let person = {
    name: "John",
    age: 30,
    isStudent: false,

    printMe: () => {
        console.log("Hi I am ", this.nam);
    },
};

// Accessing object properties
console.log(person.name); // John

// Adding and removing properties
person.location = "New York";
peson["location_"] = "New York";
delete person.age;

// Object methods
person.greet = () => {
    return "Hello, my name is " + this.name;
};
console.log(person.greet()); // Hello, my name is John

// Classes
class Animal {
    name = "";
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise.");
    }
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");
dog.speak(); // Dog makes a noise.

// Error Handling
//     try...catch statements
//     Handling and throwing errors

// try...catch
try {
    // Code that might throw an error
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message); // Something went wrong
}

let x = "ABC";
let first_letter = x[0]; // A
