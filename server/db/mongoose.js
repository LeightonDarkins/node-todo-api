const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'

mongoose.Promise = global.Promise;

mongoose.connect(URI);

module.exports = { mongoose };
