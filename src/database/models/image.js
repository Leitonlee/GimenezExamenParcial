'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    
    static associate(models) {
      // define association here
      Image.belongsTo(models.Product,{as:'products'});
    }
  };
  Image.init({
    name: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};