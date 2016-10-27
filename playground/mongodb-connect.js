const { MongoClient, ObjectId } = require('mongodb');

const HELPERS = require('../helpers/helpers.js');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB!');
  }

  console.log('Connected to MongoDB!');
  console.log('=====================');

  todosCollection = db.collection('Todos');

  todosCollection.insertOne({ text: 'something to do', completed: false }, (error, result) => {
    if (error) {
      return console.log('Unable to insert Todo', error);
    }

    HELPERS.prettyPrint(result.ops);
  });

  usersCollection = db.collection('Users');

  usersCollection.insertOne({ name: 'Leighton', age: 27 }, (error, result) => {
    if (error) {
      return console.log('Unable to insert User', error);
    }

    HELPERS.prettyPrint(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
