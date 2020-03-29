'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single customer
 **/
exports.addCustomer = function(body) {
  return new Promise(async function(resolve, reject) {
    const { customerName, phoneNumber, emailAddress } = body;
    await db.add_service_call([customerName, phoneNumber, emailAddress])
    .then(customer => {
      resolve(customer)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Returns a list of all customers
 *
 * returns schema/ArrayOfCustomers
 **/
exports.getCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

