import express from 'express';
const router = express.Router();
const eventController = require('../controllers/eventController');

router
  .route('/')
  .get(eventController.getEvents)
  .post(eventController.createEvent);

router.route('/:id').get(eventController.getEvent);

export { router as eventRouter };
