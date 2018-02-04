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

  db.collection('Todos').find({
    _id: new ObjectID('5a76a2afcda65a30303ae1e0')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find().count().then((count) => {
    console.log('Users');
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.close();
});
