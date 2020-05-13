'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
  * Returns a list of all assets to addresses mappings - An array of objects
**/
exports.getAssetsToAddresses = function() {
  return new Promise(async function(resolve, reject) {
    await AssetsToAddresses.findAll()
    .then(assetsToAddresses => {
      resolve(assetsToAddresses)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}