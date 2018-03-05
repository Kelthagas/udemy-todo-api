const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a7a5c9411da28034d1b9071';

// Validate ID
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
} else {
  Todo.find({
    _id: id
  }).then((todos) => {
    console.log('Todos: ', todos);
  });

  // Will find with at most 1.
  Todo.findOne({
    _id: id
  }).then((todo) => {
    console.log('Todo: ', todo);
  });

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('Unable to find todo.');
    }
    console.log('Todo by ID: ', todo);
  }).catch((e) => console.log(e));
}

// Challenge
// Query Users collection
var userId = '5a77d85be61e74032548f0af';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User: ', user);
}, (e) => console.log(e));
