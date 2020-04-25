'use strict';

let respondWithCode = require('../utils/writer').respondWithCode;

/**
 * Adds a single travel event
**/
exports.addTravelEvent = function(body) {
  return new Promise(async function(resolve, reject) {
    let newTravelEvent = TravelEvent.build(body);

    // Create the new travel event and persist to DB
    newTravelEvent = await newTravelEvent.save()
    .then(newTravelEvent => {
      return(newTravelEvent)
    })
    .catch(err => {
      reject(respondWithCode(500, err));
    });
  });
}

/*
 * Returns a list of all travel events - An array of objects
**/
exports.getTravelEvents = function() {
  return new Promise(async function(resolve, reject) {
    await TravelEvent.findAll()
    .then(travelEvents => {
      resolve(travelEvents)
    })
    .catch(err => {
      reject(utils.respondWithCode(500, err));
    });
  })
}