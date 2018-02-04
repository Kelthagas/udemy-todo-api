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

  // Delete Many
  db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  // Delete One
  db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  // Find one and delete
  // Will delete the item and return the object
  db.collection('Todos').findOneAndDelete({text: 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  db.close();
});
