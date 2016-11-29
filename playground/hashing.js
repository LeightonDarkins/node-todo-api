const { SHA256 } = require('crypto-js');
// var message = "Hi, I'm a butt";
//
// hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log("Data was not changed")
// } else {
//   console.log("Data was changed, don't trust")
// }

const JWT = require('jsonwebtoken');

var data = {
  id: 10
}

var token = JWT.sign(data, '123abc');

console.log(token);

var decoded = JWT.verify(token, '123abc');

console.log(decoded);
