const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_db', 'user', 'password', {
  host: 'user-db',
  dialect: 'mysql'
});

module.exports = sequelize;
