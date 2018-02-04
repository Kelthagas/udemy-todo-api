// const MongoClient = require('mongodb').MongoClient;

// Object destructoring
// This mean, we can grab multiple things from the mongodb library
const {MongoClient, ObjectID} = require('mongodb'); // identical to const MongoClient = require('mongodb').MongoClient;

// First is a string where the database is being served, second is a callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }

  console.log('Successfully connected to database');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a77506726f8ad48019859f3')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
