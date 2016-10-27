const { MongoClient, ObjectId } = require('mongodb');

const HELPERS = require('../helpers/helpers.js');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB!');
  }

  console.log('Connected to MongoDB!');
  console.log('=====================');

  var todosCollection = db.collection('Todos');
  var usersCollection = db.collection('Users');

  usersCollection.find(
    {
      name: 'Jim'
    })
    .toArray()
    .then((docs) => {
      console.log('Users');
      console.log('=====================');
      HELPERS.prettyPrint(docs);
    }, (err) => {
      console.log('Unable to fetch Users');
    });

  todosCollection.find(
    {
      _id: new ObjectId('5811cfd09d1f5f2ff06403e5')
    })
    .toArray()
    .then((docs) => {
      console.log('Todos');
      console.log('=====================');
      HELPERS.prettyPrint(docs);
    }, (err) => {
      return console.log('Unable to fetch ToDos');
    });

  todosCollection.find()
    .count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      return console.log('Unable to fetch ToDos');
    });

  // db.close();
});
