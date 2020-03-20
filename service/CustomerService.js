'use strict';


/**
 * Adds a customer
 *
 * body Customer JSON object with customer information
 * no response value expected for this operation
 **/
exports.addCustomer = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns a single customer
 *
 * id Integer Id of customer to return
 * returns ./schema/Customer.json
 **/
exports.getCustomerById = function(id) {
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


/**
 * Updates an existing customer
 *
 * body Customer JSON object with customer information
 * id Integer Id of customer to update
 * no response value expected for this operation
 **/
exports.updateCustomer = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

