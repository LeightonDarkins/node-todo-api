const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

mongoose.connect(URI);

module.exports = { mongoose };
