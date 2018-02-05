var mongoose = require('mongoose');

// mongoose will micromanages the order of how things are called
// will help when something is called before mongoose connects
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
