'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single customer
 **/
exports.addCustomer = function(body) {
  return new Promise(async function(resolve, reject) {
    const newCustomer = Customer.build(body);
    await newCustomer.save()
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
    await Customer.findAll()
    .then(customers => {
      console.log(customers)
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
exports.getCustomerById = function(customerId) {
  return new Promise(async function(resolve, reject) {
    await Customer.findByPk(1, {
      include: [{
        model: Address
      }]
    })
    .then(customer => {
       if (customer.length === 0){
        resolve(respondWithCode(404, "Customer not found"))
       }
       console.log(customer);
       resolve(customer)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

