'use strict';

var utils = require('../utils/writer.js');
var TravelEvents = require('../service/TravelEventsService');

module.exports.addTravelEvent = function addTravelEvent (req, res, next, body) {
  TravelEvents.addTravelEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTravelEvents = function getTravelEvents (req, res, next) {
  TravelEvents.getTravelEvents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
