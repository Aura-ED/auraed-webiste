import { Request, Response } from 'express';

export class AppError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export const handleError = (err: AppError, res: Response) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Unknown Error!';
  res.status(statusCode).json({
    status: 'fail',
    statusCode,
    message,
  });
};
