'use strict';

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'address_id',
      autoIncrement: true
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'street_address'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'city'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'state'
    },
    postalCode: {
      type: DataTypes.STRING,
      field: 'postal_code'
    },
    mapUrl: {
      type: DataTypes.STRING,
      field: 'map_url'
    },
    photoUrl: {
      type: DataTypes.STRING,
      field: 'photo_url'
    },
    latitude: {
      type: DataTypes.FLOAT,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.FLOAT,
      field: 'longitude'
    },
    customerId: {
      type: DataTypes.INTEGER,
      field: 'customer_id',
      references:{
        model: Customer,
        key: 'customer_id'
      }
    },
    vendorId: {
      type: DataTypes.INTEGER,
      field: 'vendor_id',
      references: {
        model: Vendor,
        key: 'vendor_id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'addresses' });

 
  return Address;
};
