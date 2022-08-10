import { RequestHandler } from "express";
import { JWT_ACCESS_SECRET } from "../config";
import * as jwt from "jsonwebtoken";

export const isAuthenticated: RequestHandler = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    res.status(401).json({
      message: "Access token is missing",
    });
    return;
  }
  const user = jwt.verify(
    accessToken,
    JWT_ACCESS_SECRET
  ) as IAccessTokenPayload;
  if (!user) {
    res.status(401).json({
      message: "Invalid access token",
    });
    return;
  }
  req.user = user;
  next();
};
