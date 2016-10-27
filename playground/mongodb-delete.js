const { MongoClient, ObjectId } = require('mongodb');

const HELPERS = require('../helpers/helpers.js');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB!');
  }

  console.log('Connected to MongoDB!');
  console.log('=====================');

  todosCollection = db.collection('Todos');
  usersCollection = db.collection('Users');

  // todosCollection.deleteMany({
  //   text: 'something to do'
  // })
  // .then((result) => {
  //   console.log(result);
  // });
  //
  // todosCollection.deleteOne({
  //   text: 'eat lunch'
  // })
  // .then((result) => {
  //   console.log(result);
  // });
  //
  // todosCollection.findOneAndDelete({
  //   completed: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  // usersCollection.deleteMany({
  //   name: 'Leighton'
  // })
  // .then((result) => {
  //   console.log(result);
  // });
  //
  // usersCollection.findOneAndDelete({
  //   _id: new ObjectId('5811d23d560c85303127aea8')
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
