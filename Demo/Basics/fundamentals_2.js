// DOM Manipulation
//     Introduction to the Document Object Model (DOM)
//     Selecting elements
//     Modifying element content, attributes, and styles
//     Event handling (click, submit, etc.)

// DOM Manipulation
// <!-- HTML -->
// <!DOCTYPE html>
// <html>
// <head>
//   <title>DOM Manipulation</title>
// </head>
// <body>
//   <button id="myButton">Click me</button>
//   <div id="output"></div>

//   <script>
//     // JavaScript
//     const button = document.getElementById("myButton");
//     const output = document.getElementById("output");

//     button.addEventListener("click", function() {
//       output.textContent = "Button clicked!";
//     });
//   </script>
// </body>
// </html>

// Set Timeout & Set Intervals
let greet = (name) => {
    console.log("Welcome ", name);
};

// 1st way
setTimeout(() => {
    console.log("Welcome ", "John");
}, 3000);

// 2nd way
setTimeout(function () {
    console.log("Welcome ", "John");
}, 3000);

// 3rd way
setTimeout(greet, 3000);

// 4th way
setTimeout(() => greet("John"), 3000);

setInterval(() => greet("John"), 1000);

// Combine
let greetInterval = setInterval(() => greet("John"), 1000);
setTimeout(() => clearInterval(greetInterval), 5000);

// Asynchronous JavaScript
//     Callback functions
//     Promises
//     Async/await syntax
//     Fetch API for making HTTP requests

// The Real Life Problem. i.e. Data is not instantly available from the API.
// Get info from the API
let userInformation_;
setTimeout(() => {
    userInformation_ = { name: "xyz", age: 10 };
}, 3000);

console.log(userInformation_);
console.log(userInformation_.name);
console.log(userInformation_.age);

// Callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 2000);
}

fetchData(function (data) {
    console.log(data); // Some data
});

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

promise.then((result) => {
    console.log(result); // Promise resolved
});

// Async/await
async function asyncFunction() {
    const result = await promise;
    console.log(result); // Promise resolved
}
asyncFunction();

// Examples
let userInformation = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "xyz", age: 10 });
    }, 3000);
});

userInformation.then((person) => {
    console.log(person);
});

let test = async () => {
    let person = await userInformation;
    console.log(person.name);
};

test();

// Callback Hell or Promise Chains
let schoolInformation = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "abc" });
    }, 3000);
});

let workInformation = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "def" });
    }, 3000);
});

userInformation.then((person) => {
    console.log(person);

    schoolInformation.then((school) => {
        console.log(school);

        workInformation.then((work) => {
            console.log(work);
        });
    });
});

let test_2 = async () => {
    let person = await userInformation;
    let school = await schoolInformation;
    let work = await workInformation;
    console.log(person, school, work);
};

test_2();

// Reject Promises
let countryInformation = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ error: "Bad Request" });
    }, 3000);
});

countryInformation
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

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

// ES6+ Features
//     let and const
//     Arrow functions
//     Template literals
//     Destructuring
//     Spread and rest operators
//     Classes
//     Modules

// Arrow functions
const square = (x) => {
    return x * x;
};
const square_ = (x) => x * x;
console.log(square(5)); // 25

// Template literals
name = "Alice";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Alice!

let x = 10;
console.log(`This is the value ${x}, next is ${++x}`);

// Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
};
const { firstName, lastName } = person;
console.log(firstName, lastName); // John Doe

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const person_ = {
    firstName: "Johns",
    lastName: "Doe",
    middleName: "S. ",
};

const student_ = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: 10,
};

const student = {
    ...person_,
    age: 10,
};
console.log(student);

let fruits_1 = ["apple", "orange", "grapes"];
let fruits_2 = [...fruits_1, "cherry"];
console.log(fruits_2);

// Classes
class Animal {
    name = "";

    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(this.name + " makes a noise.");
    };
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");
dog.speak(); // Dog makes a noise.

// Modules (export/import)
// Export: export default myFunction;
// Import: import myFunction from './myModule';

// ---------------------
// Most commonly used JS Array and Object Methods:
// ---------------------

// Array Methods:
// forEach(): Executes a provided function once for each array element.
let numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
// Output: 2, 4, 6, 8

// map(): Creates a new array by calling a provided function on every element in the calling array.
numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
numbers = [1, 2, 3, 4];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);
// Output: [2, 4]

// Examples
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

let fruitLengths = fruits.map((fruit, index) => {
    if (fruit === "apple") {
        return null;
    }
    return fruit.length;
});

console.log(fruitLengths);

let filterFruits = fruits.filter((fruit) => {
    return fruit !== "apple";
});

console.log(filterFruits);

let filteredFruitLengths = fruits
    .map((fruit, index) => {
        if (fruit === "apple") {
            return null;
        }
        return fruit.length;
    })
    .filter((fruit) => {
        return fruit !== null;
    });

console.log(filteredFruitLengths);

// find(): Returns the first element in the array that satisfies the provided testing function.
numbers = [1, 2, 3, 4];
const even = numbers.find((num) => num % 2 === 0);
console.log(even);
// Output: 2

// reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 10

let acc = 0;
for (let index = 0; index < numbers.length; index++) {
    acc = acc + numbers[index];
}

// Object Methods:
// Object.keys(): Returns an array of a given object's own enumerable property names.
let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
console.log(keys);
// Output: ["a", "b", "c"]

// Object.values(): Returns an array of a given object's own enumerable property values.
obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values);
// Output: [1, 2, 3]

// Object.entries(): Returns an array of a given object's own enumerable property [key, value] pairs.
obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries);
// Output: [ ["a", 1], ["b", 2], ["c", 3] ]

// Object.assign(): Copies all enumerable own properties from one or more source objects to a target object.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);
// Output: { a: 1, b: 3, c: 4 }

// Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
obj = { a: 1, b: 2 };
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("c")); // false

// Debugging Tools
//     Using browser developer tools
//     Console.log and its variations
//     Breakpoints

// Debugging Tools

// Using browser developer tools
// Add breakpoints in the code
console.log("Debugging message");
