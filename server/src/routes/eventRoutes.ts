import express from 'express';
const router = express.Router();
const eventController = require('../controllers/eventController');

router.route('/').get(eventController.getEvents).post(eventController.addEvent);

router.route('/:category').get(eventController.getEvent);

export { router as eventRouter };
