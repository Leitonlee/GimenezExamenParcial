'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand,{as:'brands'});
      Product.belongsTo(models.Category,{as:'categories'});
      Product.belongsTo(models.Size,{as:'sizes'});
      Product.belongsTo(models.Gender,{as:'genders'});
      Product.hasOne(models.Orderdetail,{
        as:'orderDetails',
        foreignKey:'productId',
      })
      Product.hasMany(models.Image,{
        as:'images',
        foreignKey:'productId',
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};