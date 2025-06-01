const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('post_db', 'user', 'password', {
  host: 'post-db',
  dialect: 'mysql'
});

module.exports = sequelize;
