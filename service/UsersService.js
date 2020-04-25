'use strict';

let respondWithCode = require('../utils/writer').respondWithCode;

exports.getUsers = function() {
  return new Promise(async function(resolve, reject) {
    await User.findAll()
    .then(users => {
      resolve(users)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}