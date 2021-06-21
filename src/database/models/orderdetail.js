'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
   
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order,{as:'orders'});
      OrderDetail.belongsTo(models.Product,{as:'products'});
    }
  };
  OrderDetail.init({
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};