'use strict';

module.exports = (sequelize, DataTypes) => {
  const TravelEvent = sequelize.define('travelEvent', {
    travelEventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      field: 'travel_event_id'
    },
    eventTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'event_time'
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    eventType: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'event_type'
    } 
  }, { tableName: 'travel_events' });
  

  return TravelEvent;
};