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
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'account_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'users' });

  return User;
};