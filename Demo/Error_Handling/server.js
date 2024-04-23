import express from 'express';
import { logger, verifyAuthToken } from './middlewares.js';

const app = express();

const PORT = 3000;

app.use(verifyAuthToken);
app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});


try {
    if(!id){
        throw new Error('id is invalid');
    }

    if(!name){
        throw new Error('name is invalid');
    }
} catch(err) {
    console.error(err.message);
}