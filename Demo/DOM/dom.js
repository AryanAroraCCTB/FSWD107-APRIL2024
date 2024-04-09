console.log("WORKS");

// Access to the HTML Files/Document
console.log(typeof document);
console.log(document);

// Acceess to the Browser window
console.log(window);

// Get elements from the dom
let el = document.getElementById("container");
console.log(el);
console.dir(el);

el = document.getElementsByTagName("div");
console.log(el);

el = document.getElementsByClassName("page");
console.log(el);

el = document.getElementsByName("email");
console.log(el);

el = document.querySelector("#container + h1");
console.log(el);

el = document.querySelector(".page");
console.log(el);

el = document.querySelectorAll(".page");
console.log(el);
