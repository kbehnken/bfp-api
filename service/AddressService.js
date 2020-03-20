'use strict';
var respondWithCode = require('../utils/writer.js').respondWithCode;
var isEmpty = require('../utils/utils.js').isEmpty;

/**
 * Adds a service address
 *
 * body Address JSON object with service address information
 * no response value expected for this operation
 **/
exports.addAddress = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a single service address
 *
 * id Integer Id of service address to return
 * no response value expected for this operation
 **/
exports.getAddressById = function(id) {
  console.log(db)
  return new Promise(async function(resolve, reject) {
    await db.get_address_by_id(id)
    .then(address => {
      if (!isEmpty(address)) {
        resolve(address)
      }
      reject(utils.respondWithCode(404, "Address not Found"))
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}


/**
 * Updates an existing service address
 *
 * body Customer JSON object with customer information
 * id Integer Id of customer to update
 * no response value expected for this operation
 **/
exports.updateAddress = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

