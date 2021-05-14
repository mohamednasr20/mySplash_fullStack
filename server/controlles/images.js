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
    res.status(201).json(savedImage);
  } catch (error) {
    next(error);
  }
});

imagesRouter.delete('/:id', async (req, res, next) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = imagesRouter;
