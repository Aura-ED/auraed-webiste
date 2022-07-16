import express from 'express';
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router
  .route('/')
  .get(galleryController.getImages)
  .post(galleryController.addImages);

router.route('/:category').get(galleryController.getImagesByCategory);

module.exports = router;
