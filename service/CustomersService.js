'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single customer
 **/
exports.addCustomer = function(body) {
  return new Promise(async function(resolve, reject) {
    let newCustomer = Customer.build(body);
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
    await Customer.findByPk(customerId, {
      include: [ Address ]
    })
    .then(customer => {
      if (!customer){
        reject(respondWithCode(404, "Customer not found"))
      }
      resolve(customer)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

