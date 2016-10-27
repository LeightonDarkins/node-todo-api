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

  var filter = {
    _id: new ObjectId('5811d0df2e7bf130198d4bfd')
  };

  var update = {
    $set: {
      name: 'Leighton',
    },
    $inc: {
      age: 1
    }
  };

  var options = {
    returnOriginal: false
  }

  // todosCollection.findOneAndUpdate(filter, update, options)
  // .then((result) => {
  //   HELPERS.prettyPrint(result);
  // });

  usersCollection.findOneAndUpdate(filter, update, options)
  .then((result) => {
    HELPERS.prettyPrint(result);
  });

  // db.close();
});
