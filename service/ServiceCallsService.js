'use strict';


/**
 * Adds a single service call/work order
 *
 * body ServiceCall JSON object with service call information
 * returns ServiceCalls
 **/
exports.addServiceCall = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "serviceDate" : "serviceDate",
  "salt" : "salt",
  "phosphates" : "phosphates",
  "tds" : "tds",
  "filterPsi" : "filterPsi",
  "chlorine" : "chlorine",
  "ph" : "ph",
  "alkalinity" : "alkalinity",
  "cya" : "cya",
  "trichlorShock" : "trichlorShock",
  "sodaAsh" : "sodaAsh",
  "sodiumBicarbonate" : "sodiumBicarbonate",
  "tabs" : "tabs",
  "granularTrichlor" : "granularTrichlor",
  "userid" : 1,
  "serviceAddressId" : 4,
  "technician" : "technician",
  "startTime" : "startTime",
  "endTime" : "endTime"
}, {
  "serviceDate" : "serviceDate",
  "salt" : "salt",
  "phosphates" : "phosphates",
  "tds" : "tds",
  "filterPsi" : "filterPsi",
  "chlorine" : "chlorine",
  "ph" : "ph",
  "alkalinity" : "alkalinity",
  "cya" : "cya",
  "trichlorShock" : "trichlorShock",
  "sodaAsh" : "sodaAsh",
  "sodiumBicarbonate" : "sodiumBicarbonate",
  "tabs" : "tabs",
  "granularTrichlor" : "granularTrichlor",
  "userid" : 1,
  "serviceAddressId" : 4,
  "technician" : "technician",
  "startTime" : "startTime",
  "endTime" : "endTime"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a single service call/work order
 *
 * id Integer Id of service call/work order to return
 * returns ServiceCall
 **/
exports.getServiceCallById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "serviceDate" : "serviceDate",
  "salt" : "salt",
  "phosphates" : "phosphates",
  "tds" : "tds",
  "filterPsi" : "filterPsi",
  "chlorine" : "chlorine",
  "ph" : "ph",
  "alkalinity" : "alkalinity",
  "cya" : "cya",
  "trichlorShock" : "trichlorShock",
  "sodaAsh" : "sodaAsh",
  "sodiumBicarbonate" : "sodiumBicarbonate",
  "tabs" : "tabs",
  "granularTrichlor" : "granularTrichlor",
  "userid" : 1,
  "serviceAddressId" : 4,
  "technician" : "technician",
  "startTime" : "startTime",
  "endTime" : "endTime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of all service calls/work orders
 *
 * returns ServiceCalls
 **/
exports.getServiceCalls = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "serviceDate" : "serviceDate",
  "salt" : "salt",
  "phosphates" : "phosphates",
  "tds" : "tds",
  "filterPsi" : "filterPsi",
  "chlorine" : "chlorine",
  "ph" : "ph",
  "alkalinity" : "alkalinity",
  "cya" : "cya",
  "trichlorShock" : "trichlorShock",
  "sodaAsh" : "sodaAsh",
  "sodiumBicarbonate" : "sodiumBicarbonate",
  "tabs" : "tabs",
  "granularTrichlor" : "granularTrichlor",
  "userid" : 1,
  "serviceAddressId" : 4,
  "technician" : "technician",
  "startTime" : "startTime",
  "endTime" : "endTime"
}, {
  "serviceDate" : "serviceDate",
  "salt" : "salt",
  "phosphates" : "phosphates",
  "tds" : "tds",
  "filterPsi" : "filterPsi",
  "chlorine" : "chlorine",
  "ph" : "ph",
  "alkalinity" : "alkalinity",
  "cya" : "cya",
  "trichlorShock" : "trichlorShock",
  "sodaAsh" : "sodaAsh",
  "sodiumBicarbonate" : "sodiumBicarbonate",
  "tabs" : "tabs",
  "granularTrichlor" : "granularTrichlor",
  "userid" : 1,
  "serviceAddressId" : 4,
  "technician" : "technician",
  "startTime" : "startTime",
  "endTime" : "endTime"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

