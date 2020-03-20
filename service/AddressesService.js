'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;
let isEmpty = require('../utils/utils').isEmpty;


/*
 * Returns a list of all service addresses
 *
 * returns schema/ArrayOfAddresses
 **/
exports.getAddresses = function() {
  console.log(db)
  return new Promise(async function(resolve, reject) {
    await db.get_addresses()
    .then(addresses => {
      resolve(addresses)
    })
    .catch(err => {
      reject(utils.respondWithCode(400, err));
    });
  })
}

/**
 * Returns a single service address
 *
 * id Integer Id of service address to return
 * no response value expected for this operation
 **/
exports.getAddressById = function(id) {
  return new Promise(async function(resolve, reject) {
    await db.get_address_by_id(id)
    .then(address => {
       if (address.length === 0){
         console.log("404")
          resolve(respondWithCode(404, "Service address not found"))
       }
       resolve(address)
    })
    .catch(err => {
      console.log(err)
      reject(respondWithCode(500, err));
    });
  })
}
