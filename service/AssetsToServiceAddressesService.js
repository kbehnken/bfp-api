'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single asset to a service address
 **/
exports.addAssetToServiceAddres = function(body) {
  return new Promise(async function(resolve, reject) {
    const { assetId, serviceAddressId } = body;
    await db.add_asset_to_service_address(assetId, serviceAddressId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes a single asset from a service address
 **/
exports.removeAssetFromServiceAddress = function(body) {
  return new Promise(async function(resolve, reject) {
    const { assetId, serviceAddressId } = body;
    await db.remove_asset_from_service_address(assetId, serviceAddressId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes all assets from a service address
 **/
exports.removeAllAssetsFromServiceAddress = function(body) {
  return new Promise(async function(resolve, reject) {
    const { serviceAddressId } = body;
    await db.remove_all_assets_from_service_address(serviceAddressId)
    .then(() => {
      resolve()
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}