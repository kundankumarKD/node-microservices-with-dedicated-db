const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db-config');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

module.exports = User;