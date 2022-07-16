import { Request, Response } from 'express';
import { Gallery } from '../models/galleryModel';

exports.getImages = async (req: Request, res: Response) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.status(200).json({
    status: 'success',
    images
  });
};

exports.addImages = async (req: Request, res: Response) => {
  const image = new Gallery(req.body);
  await image.save();
  res.status(201).json({
    status: 'success',
    message: 'Image added',
    data: {
      image
    }
  });
};

exports.getImagesByCategory = async (req: Request, res: Response) => {
  const images = await Gallery.find({ category: req.params.category });
  res.status(200).json({
    status: 'success',
    images
  });
};
