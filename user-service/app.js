const express = require('express');
const User = require('./models/User');
const sequelize = require('./configs/db-config');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
// Sync all models
sequelize.sync({ alter: true }) // or { force: true }
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Sync error:', err);
  });
  console.log('User DB synced');
  app.listen(3002, () => console.log('User service running on port 3002'));
