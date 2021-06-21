'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
   
    static associate(models) {
      // define association here
      Gender.hasMany(models.Product,{
        as:'products',
        foreignKey:'genderId',
      })
    }
  };
  Gender.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};