const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

// Todo.remove({}).then((result) => { // remove all Todos
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: '581b0d792043cca3914b2d53' }).then((result) => {
  console.log(result)
});

Todo.findByIdAndRemove('581b0d792043cca3914b2d53').then((todo) => {
  console.log(todo)
});
