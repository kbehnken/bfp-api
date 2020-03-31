'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single customer
 **/
exports.addCustomer = function(body) {
  return new Promise(async function(resolve, reject) {
    const { customerName, phoneNumber, emailAddress } = body;
    await db.add_customer([customerName, phoneNumber, emailAddress])
    .then(customer => {
      resolve(customer)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Returns a list of all customers - An array of objects
 **/
exports.getCustomers = function() {
  return new Promise(async function(resolve, reject) {
    await db.get_customers()
    .then(customers => {
      resolve(customers)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
 * Returns a single customer
 **/
exports.getCustomerById = function(id) {
  return new Promise(async function(resolve, reject) {
    await db.get_customer_by_id(id)
    .then(customer => {
       if (customer.length === 0){
        resolve(respondWithCode(404, "Customer not found"))
       }
       resolve(customer)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

