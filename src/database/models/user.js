'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      // define association here
      User.hasMany(models.Order,{
        as:'orders',
        foreignKey:'userId',
      })
      User.belongsTo(models.Address,{as:'addresses'});
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};