'use strict';

let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single service call/work order
**/
exports.addServiceCall = function(body) {
  return new Promise(async function(resolve, reject) {
    let newServiceCall = ServiceCall.build(body);
    let services = body.services || [];

    // Create the new service call and persist to DB
    newServiceCall = await newServiceCall.save()
    .then(newServiceCall => {
      return(newServiceCall)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });

    // Add a service association for every id in services
    for(let i = 0; i < services.length; i++) {
      await newServiceCall.addService(services[i])
      .then()
      .catch(err => {
        reject(respondWithCode(500, err));
      });
    }

    // Update the serviceCall with the services data and resolve
    resolve(newServiceCall.reload({
      include: [ Service ]
    }))
  });
}

exports.updateServiceCall = function(body, serviceCallId) {
  return new Promise(async function(resolve, reject) {

    // Fetch the service call we are updating
    let serviceCall = await ServiceCall.findByPk(serviceCallId) 
    .then(serviceCall => { return serviceCall })
    .catch(err => {
      reject(respondWithCode(404, err));
    });

    // Merge service call with updated values and save
    serviceCall.dataValues = {...serviceCall.dataValues, body}
    await serviceCall.save()
    .then(serviceCall => { resolve(serviceCall) })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
  * Returns a list of all service calls/work orders
**/
exports.getServiceCalls = function() {
  return new Promise(async function(resolve, reject) {
    await ServiceCall.findAll()
    .then(serviceCalls => {
      resolve(serviceCalls)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
  * Returns a single service call/work order
**/
exports.getServiceCallById = function(serviceCallId) {
  return new Promise(async function(resolve, reject) {
    await ServiceCall.findByPk(serviceCallId, {
      include: [ Service ]
    })
    .then(serviceCall => {
      if(!serviceCall) {
        reject(respondWithCode(404, "Service Call not found"))
      }
      resolve(serviceCall);    
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Adds a single service to a service call
**/
exports.addServiceToServiceCall = function(serviceCallId, serviceId) {
  return new Promise(async function(resolve, reject) {
    
    // Fetch the service call
    await ServiceCall.findByPk(serviceCallId)
    .then(serviceCall => serviceCall)
    .catch(err => {
        reject(respondWithCode(500, err));
    });
            
    // Add the service
    await ServiceCall.addService(serviceId)
    .then(serviceCall => {
      resolve(serviceCall.reload({
          include: [ Service ]
      }))
    })
    .catch(err => {
        reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes a service from a service call
**/
exports.removeServiceFromServiceCall = function(serviceCallId, serviceId) {
  return new Promise(async function(resolve, reject) {
    await ServicesToServiceCalls.destroy({
      where: {
          serviceCallId: serviceCallId,
          serviceId: serviceId
      }
    })
    .then(resolve(await ServiceCall.findByPk(serviceCallId)))
    .catch(err => {
        reject(respondWithCode(500, err));
    });
  });
}

