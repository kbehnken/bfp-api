'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;


/*
 * Returns a list of all service addresses - An array of objects
 **/
exports.getAddresses = function() {
  return new Promise(async function(resolve, reject) {
    await db.get_addresses()
    .then(addresses => {
      resolve(addresses)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
 * Returns a single service address
**/
exports.getAddressById = function(id) {
  return new Promise(async function(resolve, reject) {
    await db.get_address_by_id(id)
    .then(address => {
       if (address.length === 0){
        resolve(respondWithCode(404, "Service address not found"))
       }
       resolve(address)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}
