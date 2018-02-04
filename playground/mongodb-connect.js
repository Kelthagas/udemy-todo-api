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

  // Allows to insert one document to a collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Andrew Batallones',
  //   age: 27,
  //   location: 'Bellflower'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into Users');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').findOne({name: 'Andrew Batallones'}, (err, result) => {
    if (err) {
      return console.log('Unable to process query');
    }

    // You can grab a Tiemstamp from the _id
    console.log(JSON.stringify(result._id.getTimestamp(), undefined, 2));
  })

  db.close();
});
