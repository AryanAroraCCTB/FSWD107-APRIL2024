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
console.dir(el);

el = document.querySelector(".page");
console.log(el);

el = document.querySelectorAll(".page");
console.log(el);

// Modify the Element
el = document.querySelector("#container + h1");
console.dir(el);

setInterval(() => {
    el.innerHTML = `<span>${new Date()}</span>`;
}, 500);

let index = 0;
const colors = ["green", "maroon", "orange", "red", "blue"];
setInterval(() => {
    el.innerHTML = `<span>${new Date()}</span>`;
    el.style.color = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
}, 500);

setInterval(() => {
    el.innerHTML = `<span>${new Date()}</span>`;
    el.classList.toggle("bg-primary");
    // el.classList.add("bg-primary");
    // el.classList.remove("bg-primary");
}, 500);

// Event Listeners
let btn = document.getElementById("magic-btn");
console.log(btn);
console.dir(btn);

btn.addEventListener("click", () => {
    console.log("Click Magic");
    window.alert("Click Magic");
});

btn.addEventListener("mouseenter", () => {
    window.alert("Mouse entering");
});

btn.addEventListener("mouseleave", () => {
    window.alert("Mouse leaving");
});

btn.onclick = () => {
    console.log("Click Magic");
    window.alert("Click Magic");
};

let input_el = document.getElementById("user-email");
console.log(input_el);
console.dir(input_el);

input_el.onkeydown = (key) => {
    console.log("key pressed", key);
};

function el_clicked() {
    console.log("EL CLICKED");
}

// Attributes
let img_el = document.getElementsByTagName("img")[0];
console.log(img_el);
console.dir(img_el);

img_el.alt = "ALT TEST";
img_el.setAttribute("alt", "ALT TEST 2");

console.log(img_el.alt);
console.log(img_el.getAttribute("alt"));

// Create, Add, Remove Nodes
const container_new_el = document.getElementById("container-new-nodes");

const child_el = document.createElement("div");
console.log(child_el);
console.dir(child_el);

container_new_el.appendChild(child_el);
child_el.innerText = "Hi, I am NEW";

const temp_span_el = document.querySelector("#container-new-nodes span");
container_new_el.removeChild(temp_span_el);

const copy_child_el = child_el.cloneNode(true);
