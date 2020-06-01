'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single asset
 **/
exports.addAsset = function(body) {
  return new Promise(async function(resolve, reject) {
    let newAsset = Asset.build(body);
    await newAsset.save()
    .then(asset => {
      resolve(asset)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Returns a list of all assets - An array of objects
 **/
exports.getAssets = function() {
  return new Promise(async function(resolve, reject) {
    await Asset.findAll()
    .then(assets => {
      resolve(assets)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
 * Returns a single asset
 **/
exports.getAssetById = function(assetId) {
  return new Promise(async function(resolve, reject) {
    await Asset.findByPk(assetId)
    .then(asset => {
       if(!asset) {
        resolve(respondWithCode(404, "Asset not found"))
       }
       resolve(asset)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  })
}

