const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db-config');

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
});

module.exports = Post;
