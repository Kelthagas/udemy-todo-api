var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// Getting a single User data
app.get('/todos/:id', (req, res) => {
  req.params

  if (!ObjectID.isValid(req.params.id)) {
    res.status(404).send();
  } else {
    Todo.findById(req.params.id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }, (e) => res.status(400).send());
  }
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
