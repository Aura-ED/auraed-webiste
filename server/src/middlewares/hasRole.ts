import { Role } from "@prisma/client";
import { RequestHandler } from "express";

export const hasRole: (role: Role) => RequestHandler =
  (role: Role) => (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      res.status(403).json({
        message: "You do not have permission to perform this action."
      });
      return;
    }
    next();
  };
