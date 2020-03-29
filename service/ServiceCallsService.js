'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single service call/work order
 *
 * body ServiceCall JSON object with service call information
 * returns ServiceCalls
 **/
exports.addServiceCall = function(body) {
  return new Promise(async function(resolve, reject) {
    const { startTime, endTime, userId, salt, phosphates, tds, filterPsi, chlorine, ph, alkalinity, cya, trichlorShock, sodaAsh, sodiumBicarbonate, tabs, granularTrichlor, phosphateRemover, muriaticAcid, sodiumThiosulfate, stabilizer, greenToClean, de, serviceAddressId } = body;
    await db.add_service_call([startTime, endTime, userId, salt, phosphates, tds, filterPsi, chlorine, ph, alkalinity, cya, trichlorShock, sodaAsh, sodiumBicarbonate, tabs, granularTrichlor, phosphateRemover, muriaticAcid, sodiumThiosulfate, stabilizer, greenToClean, de, serviceAddressId])
    .then(serviceCall => {
      resolve(serviceCall)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}


/**
 * Returns a single service call/work order
 *
 * id Integer Id of service call/work order to return
 * returns ServiceCall
 **/
exports.getServiceCallById = function(id) {
  return new Promise(async function(resolve, reject) {
    await db.get_service_call_by_id(id)
    .then(serviceCall => {
      if (serviceCall.length === 0) {
        resolve(respondWithCode(404, "Service call not found"))
      }
      resolve(serviceCall)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}


/**
 * Returns a list of all service calls/work orders
 *
 * returns ServiceCalls
 **/
exports.getServiceCalls = function() {
  return new Promise(async function(resolve, reject) {
    await db.get_service_calls()
    .then(serviceCalls => {
      resolve(serviceCalls)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  });
}

