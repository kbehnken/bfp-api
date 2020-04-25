'use strict';

let respondWithCode = require('../utils/writer').respondWithCode;

/**
  * Adds a single address
**/
exports.addAddress = function(body) {
  return new Promise(async function(resolve, reject) {
    let newAddress = Address.build(body);
    let assets = body.assets || [];

    // Create the new address and persist to DB
    newAddress = await newAddress.save()
    .then(newAddress => {
      return(newAddress)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
    
    // Add an asset association for every id in assets
    for(let i = 0; i < assets.length; i++) {
      await newAddress.addAddress(assets[i])
      .then()
      .catch(err => {
        reject(respondWithCode(500, err));
      });
    }

    // Update the address with the assets data and resolve
    resolve(newAddress.reload({
      include: [ Asset ]
    }))
  });
}

/**
  * Returns a list of all addresses - An array of objects
**/
exports.getAddresses = function() {
  return new Promise(async function(resolve, reject) {
    await Address.findAll()
    .then(addresses => {
      resolve(addresses)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}

/**
  * Returns a single address
**/
exports.getAddressById = function(addressId) {
  return new Promise(async function(resolve, reject) {
    await Address.findByPk(addressId, {
      include: [ Asset ]
    })
    .then(address => {
       if(!address) {
        reject(respondWithCode(404, "Address not found"))
      }
      resolve(address)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/**
 * Adds a single asset to an address
**/
exports.addAssetToAddress = function(addressId, assetId) {
  return new Promise(async function(resolve, reject) {
    
    // Fetch the address
    await Address.findByPk(addressId)
    .then(address => address)
    .catch(err => {
        reject(respondWithCode(500, err));
    });
            
    // Add the asset
    await Address.addAsset(assetId)
    .then(address => {
      resolve(address.reload({
          include: [ Asset ]
      }))
    })
    .catch(err => {
        reject(respondWithCode(500, err));
    });
  });
}

/**
 * Removes an asset from an address
**/
exports.removeAssetFromAddress = function(addressId, assetId) {
  return new Promise(async function(resolve, reject) {
    await AssetsToAddresses.destroy({
      where: {
          addressId: addressId,
          assetId: assetId
      }
    })
    .then(resolve(await Address.findByPk(addressId)))
    .catch(err => {
        reject(respondWithCode(500, err));
    });
  });
}