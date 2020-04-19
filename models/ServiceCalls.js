'use strict';

module.exports = (sequelize, DataTypes) => {
  const ServiceCall = sequelize.define('serviceCall', {
    serviceCallId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'service_call_id',
      autoIncrement: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_time'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    salt: {
      type: DataTypes.FLOAT,
      field: 'salt'
    },
    phostphate: {
      type: DataTypes.FLOAT,
      field: 'phostphate'
    },
    td: {
      type: DataTypes.FLOAT,
      field: 'td'
    },
    filterPsi: {
      type: DataTypes.FLOAT,
      field: 'filter_psi'
    },
    chlorine: {
      type: DataTypes.FLOAT,
      field: 'chlorine'
    },
    ph: {
      type: DataTypes.FLOAT,
      field: 'ph'
    },
    alkalinity: {
      type: DataTypes.FLOAT,
      field: 'alkalinity'
    },
    cya: {
      type: DataTypes.FLOAT,
      field: 'cya'
    },
    trichlorShock: {
      type: DataTypes.FLOAT,
      field: 'trichlor_shock'
    },
    sodaAsh: {
      type: DataTypes.FLOAT,
      field: 'soda_ash'
    },
    sodiumBicarbonate: {
      type: DataTypes.FLOAT,
      field: 'sodium_bicarbonate'
    },
    tab: {
      type: DataTypes.FLOAT,
      field: 'tab'
    },
    granularTrichlor: {
      type: DataTypes.FLOAT,
      field: 'granular_trichlor'
    },
    phostphateRemover: {
      type: DataTypes.FLOAT,
      field: 'phostphate_remover'
    },
    muriaticAcid: {
      type: DataTypes.FLOAT,
      field: 'muriatic_acid'
    },
    sodiumThiosulfate: {
      type: DataTypes.FLOAT,
      field: 'sodium_thiosulfate'
    },
    stabilizer: {
      type: DataTypes.FLOAT,
      field: 'stabilizer'
    },
    greenToClean: {
      type: DataTypes.FLOAT,
      field: 'green_to_clean'
    },
    de: {
      type: DataTypes.FLOAT,
      field: 'de'
    },
    addressId: {
      type: DataTypes.FLOAT,
      field: 'address_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'service_calls' });
  // ServiceCall.hasMany(Service, {through: 'servicesToServiceCalls'});
  
  return ServiceCall;
};
