const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Image = require('./models/image');
const config = require('./utlis/config');
const logger = require('./utlis/logger');

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/api/images', async (req, res) => {
  const images = await Image.find({});
  res.json(images);
});

app.post('/api/images', async (req, res, next) => {
  const body = req.body;

  const image = new Image({
    label: body.label,
    url: body.url,
  });

  const savedImage = await image.save();
  res.json(savedImage);
});

module.exports = app;
