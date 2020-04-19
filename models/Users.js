'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      field: 'user_id'
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      field: 'is_admin'
    },
    userRole: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_role'
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
      field: 'phone_number'
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email_address'
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};