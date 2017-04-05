const mongoose = require("mongoose");

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};


// Add new user to database //

// var user = new User({
//     email: 'mike@example.com'
// });
//
// user.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (err) => {
//     console.log('Unable to save user', err);
// });