'use strict';

module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('photo', {
    photoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      field: 'photo_id'
    },
    dateTaken: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_taken'
    },
    category: {
      type: DataTypes.STRING,
      field: 'category'
    },
    photoUrl: {
      type: DataTypes.STRING,
      field: 'photo_url'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, { tableName: 'photos' });

  return Photo;
};
