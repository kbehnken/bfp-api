'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'customer_id',
      autoIncrement: true
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'customer_name'
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone_number'
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email_address'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'customers' });

  
  return Customer;
};
