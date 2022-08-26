import { ClassType, transformAndValidate } from "class-transformer-validator";
import { Request, Response, NextFunction } from "express";
import { NODE_ENV } from "../config";

const isProd = NODE_ENV === "production";

export const makeValidateBody = <T extends ClassType<object>>(
  c: T,
  skipMissingProperties: boolean = false
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const toValidate = req.body;
    if (!toValidate) {
      res.status(400).json({
        error: true,
        message: "Validation failed",
        ...(isProd
          ? {}
          : { originalError: { message: "No request body found" } }),
      });
      return next();
    }
    try {
      const transformed = await transformAndValidate(c, toValidate, {
        validator: { skipMissingProperties },
      });
      req.body = transformed;
    } catch (err) {
      res.status(400).json({
        error: true,
        message: "Validation failed",
        ...(isProd ? {} : { originalError: err }),
      });
    }
    next();
  };
};
