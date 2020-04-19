'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('vendor', {
    vendorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      field: "vendor_id"
    },
    vendorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    emailAddress: {
      type: DataTypes.STRING
    }
  });

  return Vendor;
};