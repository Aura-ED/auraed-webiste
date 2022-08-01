import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { AppError, catchAsync } from '../utils/errorUtils';

export const getDocs = (Model: Model) =>
  catchAsync(async (req: Request, res: Response) => {
    const docs = await Model.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: 'success',
      results: docs.length,
      docs,
    });
  });

export const getDoc = (Model: Model) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) {
      throw new AppError(404, 'Document Not Found!');
    }
    res.status(200).json({
      status: 'success',
      data: {
        doc,
      },
    });
  });

export const createDoc = (Model: Model) =>
  catchAsync(async (req: Request, res: Response) => {
    const doc = new Model(req.body);
    await doc.save();
    res.status(201).json({
      status: 'success',
      message: 'Document created',
      data: {
        doc,
      },
    });
  });

export const updateDoc = (Model: Model) =>
  catchAsync(async (req: Request, res: Response) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      throw new AppError(404, 'Document Not Found!');
    }
    res.status(200).json({
      status: 'success',
      message: 'Document updated',
      data: {
        doc,
      },
    });
  });

export const deleteDoc = (Model: Model) =>
  catchAsync(async (req: Request, res: Response) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      throw new AppError(404, 'Document Not Found!');
    }
    res.status(200).json({
      status: 'success',
      message: 'Document deleted',
      data: {
        doc,
      },
    });
  });
