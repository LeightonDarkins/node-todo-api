const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save()
// .then((doc) => {
//   console.log('Saved Todo', doc)
// }, (e) => {
//   console.log('Unable to save Todo');
// });

var completedTodo = new Todo({
  text: 'Make a Todo',
  completed: true,
  completedAt: 10293
});

completedTodo.save()
.then((doc) => {
  console.log('Saved Todo', doc)
}, (e) => {
  console.log('Unable to save Todo');
})
