import { Role } from "@prisma/client";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { makeValidateBody } from "../utils/validateBody";
import { CreateEventDto, UpdateEventDto } from "../dto/events.dto";
import { hasRole } from "../middlewares/hasRole";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { prismaClient } from "../prisma";

export const eventRouter = Router();

eventRouter.get(
  "/",
  expressAsyncHandler(async (_req, res) => {
    const events = await prismaClient.event.findMany();
    res.status(200).json({
      message: "Fetched all events",
      data: { events },
      length: events.length,
    });
  })
);

eventRouter.post(
  "/",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(CreateEventDto)],
  expressAsyncHandler(async (req, res) => {
    const event = await prismaClient.event.create({
      data: {
        ...(req.body as CreateEventDto),
      },
    });
    res
      .status(201)
      .json({ message: "Event created", data: { event }, length: 1 });
  })
);

eventRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const event = await prismaClient.event.findUnique({
      where: { id: req.params.id },
    });
    if (!event) {
      res.status(404).json({
        message: "Event not found",
      });
      return;
    }
    res.status(200).json({
      message: "Event found",
      data: { event },
      length: 1,
    });
  })
);

eventRouter.patch(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(UpdateEventDto)],
  expressAsyncHandler(async (req, res) => {
    const event = await prismaClient.event.update({
      where: { id: req.params.id },
      data: {
        ...(req.body as UpdateEventDto),
      },
    });
    res.status(200).json({
      message: "Event updated",
      data: { event },
      length: 1,
    });
  })
);

eventRouter.delete(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN)],
  expressAsyncHandler(async (req, res) => {
    const event = await prismaClient.event.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "Event deleted",
      data: { event },
      length: 1,
    });
  })
);
