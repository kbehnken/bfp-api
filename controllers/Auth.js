'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.login = function login (req, res, next) {
  Auth.login(req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.decodeToken = function decodeToken (req, res, next) {
  Auth.decodeToken()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};