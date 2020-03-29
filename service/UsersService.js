'use strict';


/**
 * Returns a list of all users
 *
 * returns Users
 **/
exports.getUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isAdmin" : true,
  "userRole" : "employee",
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "emailAddress" : "emailAddress",
  "hash" : "hash"
}, {
  "isAdmin" : true,
  "userRole" : "employee",
  "firstName" : "firstName",
  "lastName" : "lastName",
  "phoneNumber" : "phoneNumber",
  "emailAddress" : "emailAddress",
  "hash" : "hash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

