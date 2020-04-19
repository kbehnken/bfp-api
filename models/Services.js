'use strict';

module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('service', {
    serviceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      field: 'service_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  });
  Service.belongsToMany(ServiceCall, {through: 'services_to_service_calls'});
  return Service;
};