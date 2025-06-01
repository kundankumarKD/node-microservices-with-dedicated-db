const express = require('express');
const sequelize = require('./configs/db-config');
const Post = require('./models/Post');
const postRoutes = require('./routes/postRoutes');
const amqp = require('amqplib');

const app = express();
app.use(express.json());
app.use('/posts', postRoutes);

  // Sync all models
sequelize.sync({ alter: true }) // or { force: true }
.then(() => {
  console.log('Database synchronized');
})
.catch(err => {
  console.error('Sync error:', err);
});
  app.listen(3001, () => console.log('Post service running on port 3001'));

async function consumeUserCreated() {
  const connection = await amqp.connect('amqp://rabbitmq');
  const channel = await connection.createChannel();
  await channel.assertQueue('user_created', { durable: false });
  channel.consume('user_created', async (msg) => {
    if (msg !== null) {
      const user = JSON.parse(msg.content.toString());
      console.log('Received user_created event:', user);
      // Create a welcome post for the new user
      await Post.create({
        title: `Welcome ${user.name}!`,
        content: `This is the first post for ${user.email}`
      });
      channel.ack(msg);
    }
  });
}

consumeUserCreated().catch(console.error);
