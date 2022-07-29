import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.sendProd = true;
  }
}

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.sendProd) {
    res.status(err.statusCode).json({
      status: 'fail',
      message: err.message,
    });
  } else if (err.name == 'CastError') {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  } else {
    console.log(err.name);
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: 'fail',
    message: err.message,
    stack: err.stack,
  });
};

export const handleError = (err: AppError, res: Response) => {
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    sendErrorProd(err, res);
  }
};

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
