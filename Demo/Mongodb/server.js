import { MongoClient } from 'mongodb';
import express from "express";

const uri = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

const app = express();

const client = new MongoClient(uri); 
client.connect();
console.log("Opened Connection");

// setTimeout(() => {
//     client.close()
//     console.log("Closed Connection");
// }, 3000)

// Connecting to the db
const db = client.db('testDB');

// Getting the list of the collections
const collections = await db.listCollections().toArray();
const names = collections.map(collection =>  collection.name)
console.log(names);

// CRUD
let result;

// Create
result = await db.collection('users').insertOne({name: 'ABC', age: 25});
result = await db.collection('users').insertOne({name: 'FGH', age: 29, email: 'xyz@gmail.com'});
result = await db.collection('users').insertMany([{name: 'DEF', age: 23}, {name: 'XYZ', age: 27}]);
console.log(result);

// Read
result = db.collection('users').find();
result = await db.collection('users').findOne({name: 'ABC', age: 25});
console.log(result);

// Update
result = await db.collection('users').updateMany({name: 'ABC'}, { $set: {age: 31} });
result = await db.collection('users').updateOne({name: 'ABC'}, { $set: {age: 33} });
console.log(result);

// Delete
result = await db.collection('users').deleteMany({name: 'ABC'});
result = await db.collection('users').deleteOne({name: 'ABC'});
console.log(result);


app.listen(PORT, () => {
    console.log(`Server Listening on Port: ${PORT}`)
})