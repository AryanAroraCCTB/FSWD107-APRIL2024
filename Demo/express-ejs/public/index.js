console.log("Hello From the Browser Window");

console.log(document);

const btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {
    window.alert("Button Clicked");
});
