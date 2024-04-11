import express from "express";
import middlewares from "./middlewares.js";
const PORT = 3000;

let users = [
    { id: 1, name: "User 1", age: 21 },
    { id: 2, name: "User 2", age: 22 },
    { id: 3, name: "User 3", age: 23 },
];

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
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    let { id: user_id } = req.params;
    let start_time, end_time;
    let benchmark = {};

    // 1
    let user = null;
    start_time = performance.now();
    for (let index = 0; index < users.length; index++) {
        if (users[index].id === parseInt(user_id)) {
            user = users[index];
            break;
        }
    }
    end_time = performance.now();
    benchmark["t1"] = end_time - start_time;

    // 2
    start_time = performance.now();
    user = users.find((user) => {
        if (user.id === parseInt(user_id)) {
            return user;
        }
    });
    end_time = performance.now();
    benchmark["t2"] = end_time - start_time;

    // 3
    start_time = performance.now();
    user = users.find((user) => user.id === parseInt(user_id));
    end_time = performance.now();
    benchmark["t3"] = end_time - start_time;

    res.send(benchmark);
});

app.use(express.json()); // Middleware for post requests
app.post("/users", (req, res) => {
    let { name, age } = req.body;

    name = name.replace("x", users.length + 1);

    const new_user = {
        id: users.length + 1,
        name,
        age,
    };

    users.push(new_user);

    res.send(new_user);
});

app.put("/users/:id", (req, res) => {
    const { id: user_id } = req.params;
    const updated_user_props = req.body;

    let user = users.find((user) => user.id === parseInt(user_id));

    user.name = updated_user_props?.name ?? user?.name;
    user.age = updated_user_props?.age ?? user?.age;

    res.send(user);
});

app.delete("/users/:id", (req, res) => {
    const { id: user_id } = req.params;

    users = users
        .map((user) => {
            if (user.id === parseInt(user_id)) {
                return null;
            }
            return user;
        })
        .filter((user) => user !== null);

    res.send(users);
});

app.get(
    "/users/:id/:country_id/:city_id",
    (req, res, next) => {
        console.log("CUSTOM MIDDLE WARE");
        next();
    },
    (req, res) => {
        // const user_id = req.params.id;
        // const country_id = req.params.country_id;
        // const city_id = req.params.city_id;

        const { id: user_id, country_id, city_id } = req.params;
        const { token } = req.query;
        let { page_size, page_number } = req.query;

        if (!page_number) {
            page_number = 1;
        }
        if (!page_size) {
            page_size = 10;
        }
        // res.write(`User with ID ${id} \n`);
        // res.write(`User with ID ${country_id} \n`);
        // res.write(`User with ID ${city_id} \n`);
        // res.end();

        // res.send(`User with ID ${user_id}, country ID ${country_id}, city_id ${city_id}...`);
        res.send(`Size: ${page_size} & Number: ${page_number}`);
    }
);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
