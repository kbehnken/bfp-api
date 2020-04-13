'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single service to a service call/work order
 **/
exports.addAssetToServiceCall = function(body) {
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
 * Removes a single service from a service call/work order
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
 * Removes all services from a service call/work order
 **/
exports.removeAllAssetsFromServiceCall = function(body) {
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