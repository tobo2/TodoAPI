const mongoose = require("mongoose");

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true  // removes leading and ending empty space
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// Add new todo to database //

// var newTodo = new Todo({
//     text: 'Go to the gym',
//     completed: true,
//     completedAt: Date.now()
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });