'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Venues.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Venues',
  });
  return Venues;
};