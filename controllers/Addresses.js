'use strict';

var utils = require('../utils/writer.js');
var Addresses = require('../service/AddressesService');

module.exports.addAddress = function addAddress (req, res, next, body) {
  Addresses.addAddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddressById = function getAddressById (req, res, next, id) {
  Addresses.getAddressById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAddresses = function getAddresses (req, res, next) {
  Addresses.getAddresses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAddress = function updateAddress (req, res, next, body, id) {
  Addresses.updateAddress(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
