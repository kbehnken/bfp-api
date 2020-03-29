'use strict';

var utils = require('../utils/writer.js');
var Services = require('../service/ServicesService');

module.exports.getServices = function getServices (req, res, next) {
  Services.getServices()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
