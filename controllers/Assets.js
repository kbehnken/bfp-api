'use strict';

var utils = require('../utils/writer.js');
var Assets = require('../service/AssetsService');

module.exports.getAssetById = function getAssetById (req, res, next, id) {
  Assets.getAssetById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAssets = function getAssets (req, res, next) {
  Assets.getAssets()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
