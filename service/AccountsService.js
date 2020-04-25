'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single account
 **/
exports.addAccount = function(body) {
  return new Promise(async function(resolve, reject) {
    let newAccount = Account.build(body);
    await newAccount.save()
    .then(account => {
      resolve(account)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Returns a list of all accounts - An array of objects
 **/
exports.getAccounts = function() {
  return new Promise(async function(resolve, reject) {
    await Account.findAll()
    .then(accounts => {
      resolve(accounts)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
 * Returns a single account
 **/
exports.getAccountById = function(accountId) {
  return new Promise(async function(resolve, reject) {
    await Account.findByPk(accountId, {
      include: [ Address ]
    })
    .then(account => {
      if (!account){
        reject(respondWithCode(404, "Account not found"))
      }
      resolve(account)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

