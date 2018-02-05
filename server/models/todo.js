var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
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

// var newTodo = new Todo({
//   text: "Eat dinner",
//   completed: false
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (err) => {
//   console.log('Unable to save', err);
// });

module.exports = {Todo};
