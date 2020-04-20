'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single address
 **/
exports.addAddress = function(body) {
  return new Promise(async function(resolve, reject) {
    const newAddress = Address.build(body);
    await newAddress.save()
    .then(address => {
      resolve(address)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}
/*
 * Returns a list of all service addresses - An array of objects
 **/

exports.getAddresses = function() {
  return new Promise(async function(resolve, reject) {
    await Address.findAll()
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
exports.getAddressById = function(addressId) {
  console.log(addressId)
  return new Promise(async function(resolve, reject) {
    await Address.findByPk(addressId, {
        include: [{
            model: ServiceCall,
            include: [ Service ]
        }]
    })
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
