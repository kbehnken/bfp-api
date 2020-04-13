'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Returns a list of all services - An array of objects
 **/
exports.getServices = function() {
  return new Promise(async function(resolve, reject) {
    await db.get_services()
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
exports.getServiceById = function(id) {
  return new Promise(async function(resolve, reject) {
    await db.get_service_by_id(id)
    .then(service => {
       if (service.length === 0){
        resolve(respondWithCode(404, "Service not found"))
       }
       resolve(service)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

