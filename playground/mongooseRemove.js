const
    {ObjectId} = require("mongodb");

const
    {mongoose} = require("./../server/db/mongoose"),
    {Todo} = require("./../server/models/todo"),
    {User} = require("./../server/models/user");

// Remove All
// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//
// Todo.findOneAndRemove({text: "test todo text"}).then((doc) => {
//     console.log(doc);
// });

Todo.findByIdAndRemove('58eac9b160385435610c4acc').then((todo) => {
    console.log(todo);
});