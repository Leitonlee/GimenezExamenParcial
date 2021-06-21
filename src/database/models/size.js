'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
   
    static associate(models) {
      // define association here
      Size.hasMany(models.Product,{
        as:'products',
        foreignKey:'sizeId',
      })
    }
  };
  Size.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};