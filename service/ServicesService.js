'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single service
 **/
exports.addService = function(body) {
  return new Promise(async function(resolve, reject) {
    let newService = Service.build(body);
    await newService.save()
    .then(service => {
      resolve(service)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Returns a list of all services - An array of objects
 **/
exports.getServices = function() {
  return new Promise(async function(resolve, reject) {
    await Service.findAll()
    .then(services => {
      resolve(services)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
 * Returns a single service
 **/
exports.getServiceById = function(serviceId) {
  return new Promise(async function(resolve, reject) {
    await Service.findByPk(serviceId)
    .then(service => {
       if(!service) {
        resolve(respondWithCode(404, "Service not found"))
       }
       resolve(service)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

