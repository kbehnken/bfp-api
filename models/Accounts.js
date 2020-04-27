'use strict';

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    accountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      field: 'account_id',
      autoIncrement: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'company'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name'
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'type'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'accounts' });
  
  return Account;
};
