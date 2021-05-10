const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Image = require('./models/image');
const config = require('./utlis/config');
const logger = require('./utlis/logger');
const imagesRouter = require('./controlles/images');

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    logger.info('connected to MongoDB');
  } catch (error) {
    logger.error('error connecting to MongoDB:', error.message);
  }
};

connectDB();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/images', imagesRouter);

module.exports = app;
