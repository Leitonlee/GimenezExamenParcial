'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
  
    static associate(models) {
      // define association here
      Payment.hasOne(models.Order,{
        as:'orders',
        foreignKey:'paymentId',
      })
    }
  };
  Payment.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};