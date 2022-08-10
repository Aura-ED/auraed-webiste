import { Response } from "express";

export class AppError extends Error {
  statusCode: number;
  sendProd: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.sendProd = true;
  }
}

const sendErrorProd = (err: AppError, res: Response) => {
  if (err.sendProd) {
    res.status(err.statusCode).json({
      status: "fail",
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: "fail",
    message: err.message,
    stack: err.stack,
  });
};

export const handleError = (err: AppError, res: Response) => {
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }
  if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    sendErrorProd(error, res);
  }
};
