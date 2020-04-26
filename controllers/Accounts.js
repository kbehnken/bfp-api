'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.addAccount = function addAccount (req, res, next, body) {
  Accounts.addAccount(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountById = function getAccountById (req, res, next, id) {
  Accounts.getAccountById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccounts = function getAccounts (req, res, next) {
  Accounts.getAccounts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAccount = function updateAccount (req, res, next, body, id) {
  Accounts.updateAccount(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
