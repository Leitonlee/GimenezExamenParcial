'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /
    static associate(models) {
      // define association here
      Address.hasOne(models.User,{
        as:'users',
        foreignKey:'addressId',
      })
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};