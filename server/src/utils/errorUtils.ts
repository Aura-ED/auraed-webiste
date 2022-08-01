import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.sendProd = true;
  }
}

const handleCastErrorDB = (err: AppError) => {
  const message = `Invalid value "${err.value}" for the field ${err.path}.`;
  const error = new AppError(400, message);
  return error;
};

const handleDuplicateFieldsDB = (err: AppError) => {
  const value = err.message
    .match(/(?<=\{)(.*?)(?=\})/)[0]
    .split(': ')
    .map((x) => x.trim());
  const message = `Duplicate field value: ${value[1]} for field: ${value[0]}. Please use another value!`;
  return new AppError(400, message);
};

const handleValidationErrorDB = (err: AppError, res: Response) => {
  const errors = Object.values(err.errors).map((val) => val.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(400, message);
};

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.sendProd) {
    res.status(err.statusCode).json({
      status: 'fail',
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: 'fail',
    message: err.message,
    stack: err.stack,
  });
};

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export const handleError = (err: AppError, res: Response) => {
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }
  if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    if (err.name == 'CastError') error = handleCastErrorDB(error);
    else if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    else if (err.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    sendErrorProd(error, res);
  }
};
