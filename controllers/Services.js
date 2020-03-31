'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.getServiceById = function getServiceById (req, res, next, id) {
  Services.getServiceById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServices = function getServices (req, res, next) {
  Services.getServices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
