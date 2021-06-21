'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    
    static associate(models) {
      // define association here
      Shipping.belongsTo(models.Order,{as:'orders'});
    }
  };
  Shipping.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};