import { MongoClient } from 'mongodb';
import express from "express";
import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017';

const app = express();
const client = new MongoClient(uri); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
    
    client.connect();
    console.log("Mongodb Client connection opened");

    mongoose.connect(uri);
    console.log("Mongoose connection opened");
})

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true}
})

const User = mongoose.model('users_mongoose', userSchema);

// Create
const new_user = new User({name: 'XYZ', email: 'xyz@gmail.com', age: 25});
new_user.save();

// Read
let users = await User.find();
console.log("Users: ", users);

// Update
const updated_user = await User.findOneAndUpdate({name: 'XYZ', email: 'xyz@gmail.com', age: 25}, {name: 'XYZ', email: 'xyz@gmail.com', sage: 27}, {new: true});

// Read
users = await User.find();
console.log("Users: ", users);

// Delete
const deleted_user = await User.findOneAndDelete({name: 'XYZ', email: 'xyz@gmail.com', age: 25})

