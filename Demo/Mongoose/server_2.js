import express from "express";
import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

const app = express();

app.listen(PORT, async () => {
    console.log(`Listening on PORT ${PORT}`);

    await mongoose.connect(uri);
    console.log("Mongoose connection opened");
});

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true}
});

const User = mongoose.model('user', userSchema);

// Create User
// const newUser = new User({name: "U10", email: "u10@gmail.com", age: 310});
// await newUser.save();

// Read Users
const allUsers = await User.find();
console.log("All Users: ", allUsers);

// Delete Users
// await User.deleteMany({name: "ABC"});

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: User}
});

const Post = mongoose.model('post', postSchema);

// Create Post
// const newPost = new Post({
//     title: 'T1',
//     content: 'T1 Content',
//     author: allUsers[0]
// });
// await newPost.save();

// Read all Posts
const allPosts = await Post.find();
console.log("All Posts: ", allPosts);

const userOfMyPost = await User.findById(allPosts[0].author);
console.log("User of my Post #1", userOfMyPost);

// Read all Posts with Population
const allPostsWithUsers = await Post.find().populate('author').exec();
console.log("All Posts with Users: ", allPostsWithUsers);

// Read all Posts with deep Population
// const allPostsWithUsers = await Post.find().populate({path: 'author', populate: {path: 'country', popluate: {path: 'continent'}}}).exec();
// console.log("All Posts with Users: ", allPostsWithUsers);

// Call Back Hell
// Post
//     .find()
//     .then((posts) => {
//         console.log(posts);

//         const author_id = posts[0].author;

//         User
//             .findById(author_id)
//             .then((user) => {
//                 console.log(user)

//                 const country_id = user.country_id;
//                 Country
//                     .findById(country_id)
//                     .then((country) => {
//                         console.log(country);

//                         Country
//                             .findById(country_id)
//                             .then((country) => {
//                                 console.log(country);

//                                 Country
//                                     .findById(country_id)
//                                     .then((country) => {
//                                         console.log(country);

//                                         Country
//                                             .findById(country_id)
//                                             .then((country) => {
//                                                 console.log(country);
//                                             })
//                                             .catch((err) => {
//                                                 console.error(err);
//                                             })
//                                     })
//                                     .catch((err) => {
//                                         console.error(err);
//                                     })
//                             })
//                             .catch((err) => {
//                                 console.error(err);
//                             })
//                     })
//                     .catch((err) => {
//                         console.error(err);
//                     })
//             })
//             .catch((err) => {
//                 console.error(err);
//             })
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// Post
//     .find()
//     .then(async (posts) => {
//         console.log(posts);

//         const author_id = posts[0].author;

//         const user = await User.findById(author_id);
//         console.log("Callback User", user);
//     })
//     .catch((err) => {
//         console.error(err);
//     })
     
    

// Aggregation
console.log("All Users: ", allUsers, allUsers.length);

let a1 = await User.aggregate([
    {
        $group: {
            _id: '$name',
            count: { $sum: '1' }
        }
    },
    {
        $sort: {
            age_sum: 1
        }
    }, 
    {
        $limit: 3
    }
]);

console.log(a1);

a1 = await User.aggregate([
    {
        $group: {
            _id: '$email',
            age_sum: { $sum: '$age' }
        }
    },
    {
        $sort: {
            age_sum: 1
        }
    }, 
    {
        $limit: 3
    }
]);

console.log(a1);

a1 = await User.aggregate([
    {
        $group: {
            _id: '$email',
            age_max: { $max: '$age' }
        }
    },
    {
        $sort: {
            age_sum: 1
        }
    }, 
    {
        $limit: 3
    }
]);

console.log(a1);