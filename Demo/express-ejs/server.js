import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { page_name: "Home" });
});

app.get("/about", (req, res) => {
    res.render("index", { page_name: "About" });
});

app.get("/contact", (req, res) => {
    res.render("index", { page_name: "Contact" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server Listening on Port", PORT);
});
