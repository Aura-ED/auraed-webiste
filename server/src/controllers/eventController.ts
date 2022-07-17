import { Request, Response } from 'express';
import { Event } from '../models/eventModel';

exports.getEvents = async (req: Request, res: Response) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.status(200).json({
    status: 'success',
    events
  });
};

exports.addEvent = async (req: Request, res: Response) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json({
    status: 'success',
    message: 'Image added',
    data: {
      event
    }
  });
};

exports.getEvent = async (req: Request, res: Response) => {
  const event = await Event.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    event
  });
};

exports.updateEvent = async (req: Request, res: Response) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!event) {
    return res.status(404).json({
      status: 'fail',
      message: 'Event not found'
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'Event updated',
    data: {
      event
    }
  });
};
