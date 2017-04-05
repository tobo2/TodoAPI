const
    {ObjectId} = require("mongodb");

const
    {mongoose} = require("./../server/db/mongoose"),
    {Todo} = require("./../server/models/todo"),
    {User} = require("./../server/models/user");

// var id = "58e549c60821a027d5a14892";
//
// if(!ObjectId.isValid(id)){
//     console.log("Id not valid");
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos: ", todos);
// });
//
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo: ", todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log("Id not found");
//     }
//     console.log("Todo By Id: ", todo);
// }).catch((err) => console.log(err));

var userId = "58e403a9489f2b23d0c22af3";

User.findById(userId).then((user) => {
    if(!user) {
        return console.log("User not found");
    }
    console.log("User: ", user);
}).catch((err) => console.log(err));