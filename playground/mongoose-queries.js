const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

// var id = '5811f29177ba303809a52fa2'; // Todo Id
var id = '581718422043cca3914b2d52';    // User Id

if (!ObjectId.isValid(id)) {
  console.log('Id not valid');
} else {
  User.findById(id).then((user) => {
    if (!user) {
      return console.log('User Id not found!');
    }

    console.log('User: ', user);
  });

  // Todo.find({
  //   _id: id
  // }).then((todos) => {
  //   if (todos.length === 0) {
  //     return console.log('Id not found');
  //   }
  //
  //   console.log(todos);
  // });
  //
  // Todo.findOne({
  //   _id: id
  // }).then((todo) => {
  //   if (!todo) {
  //     return console.log('Id not found');
  //   }
  //
  //   console.log(todo);
  // });

  // Todo.findById(id)
  // .then((todo) => {
  //   if (!todo) {
  //     return console.log('Id not found');
  //   }
  //
  //   console.log(todo);
  // }).catch((err) => {
  //   console.log(err);
  // })
}
