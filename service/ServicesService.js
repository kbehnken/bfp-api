'use strict';


/**
 * Returns a list of all services
 *
 * returns Services
 **/
exports.getServices = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description"
}, {
  "name" : "name",
  "description" : "description"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

