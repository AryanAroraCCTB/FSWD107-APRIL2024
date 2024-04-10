import express from "express";
import middlewares from "./middlewares.js";
const PORT = 3000;

const app = express();
// -----------------
// Basic Middlewares
// -----------------
// app.use((req, res, next) => {
//     console.log("MIDDLE WARE PROCESSING");
//     //... do processing
//     next();
// });
// app.use((req, res, next) => {
//     console.log("MIDDLE WARE 2 PROCESSING");
//     //... do processing
//     next();
// });

// -----------------------
// Conditional Middlewares
// -----------------------
// Pre-process only GET and DELETE methods
app.use((req, res, next) => {
    const method = req.method;

    if (method === "GET" || method === "DELETE") {
        // process
    }
    next();
});
// Pre-process only POST and PATCH methods
app.use((req, res, next) => {
    const method = req.method;

    if (method === "POST" || method === "PATCH") {
        // process
    }
    next();
});

// -----------------------
// Conditional Middlewares with Modularity
// -----------------------
// Pre-process only GET and DELETE methods
app.use(middlewares.get_delete_mw);
// Pre-process only POST and PATCH methods
app.use(middlewares.post_path_mw);

app.get("/", (req, res) => {
    console.log("ROUTE PROCESSING");
    res.send("Base Route");
});

app.get("/users", (req, res) => {
    res.send(["user1", "user2", "user3"]);
});

app.get(
    "/users/:id",
    (req, res, next) => {
        console.log("CUSTOM MIDDLE WARE");
        next();
    },
    (req, res) => {
        res.send("user1");
    }
);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
