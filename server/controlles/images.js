const imagesRouter = require('express').Router();
const Image = require('../models/image');

imagesRouter.get('/', async (req, res) => {
  const images = await Image.find({});
  res.json(images);
});

imagesRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body;

    const image = new Image({
      label: body.label,
      url: body.url,
    });

    const savedImage = await image.save();
    res.json(savedImage);
  } catch (error) {
    next(error);
  }
});

module.exports = imagesRouter;
