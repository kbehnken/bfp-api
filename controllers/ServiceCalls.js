'use strict';

var utils = require('../utils/writer.js');
var ServiceCalls = require('../service/ServiceCallsService');

module.exports.addServiceCall = function addServiceCall (req, res, next, body) {
  ServiceCalls.addServiceCall(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceCallById = function getServiceCallById (req, res, next, id) {
  ServiceCalls.getServiceCallById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceCalls = function getServiceCalls (req, res, next) {
  ServiceCalls.getServiceCalls()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServiceCall = function updateServiceCall (req, res, next, body, id) {
  ServiceCalls.updateServiceCall(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
