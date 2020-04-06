'use strict';
let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single travel event
 **/
exports.addTravelEvent = function(body) {
  return new Promise(async function(resolve, reject) {
    const { eventTime, latitude, longitude, eventType, serviceAddressId, userId } = body;
    await db.add_travel_event([eventTime, latitude, longitude, eventType, serviceAddressId, userId])
    .then(travelEvent => {
      resolve(travelEvent)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/*
 * Returns a list of all service addresses - An array of objects
 **/
exports.getTravelEvents = function() {
  return new Promise(async function(resolve, reject) {
    await db.get_travel_events()
    .then(travelEvents => {
      resolve(travelEvents)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}