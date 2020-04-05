'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single service to a service call/work order
 **/
exports.addServiceToServiceCall = function(body) {
  return new Promise(async function(resolve, reject) {
    const { serviceId, serviceCallId } = body;
    await db.add_service_to_service_call(serviceId, serviceCallId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes a single service from a service call/work order
 **/
exports.removeServiceFromServiceCall = function(body) {
  return new Promise(async function(resolve, reject) {
    const { serviceId, serviceCallId } = body;
    await db.remove_service_from_service_call(serviceId, serviceCallId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes all services from a service call/work order
 **/
exports.removeAllServicesFromServiceCall = function(body) {
  return new Promise(async function(resolve, reject) {
    const { serviceCallId } = body;
    await db.remove_all_services_from_service_call(serviceCallId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}