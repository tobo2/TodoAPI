const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://tobo:d9zxnyqa@ds155150.mlab.com:55150/todo_app' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};