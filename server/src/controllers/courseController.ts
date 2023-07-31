import { Role } from "@prisma/client";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { CreateCourseDto, UpdateCourseDto } from "../dto/course.dto";
import { hasRole } from "../middlewares/hasRole";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { prismaClient } from "../prisma";
import { makeValidateBody } from "../utils/validateBody";

export const courseRouter = Router();

courseRouter.get(
  "/",
  expressAsyncHandler(async (_req, res) => {
    const courses = await prismaClient.course.findMany({});
    res.status(200).json({
      message: "Fetched all courses",
      data: { courses },
      length: courses.length,
    });
  })
);

courseRouter.post(
  "/",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(CreateCourseDto)],
  expressAsyncHandler(async (req, res) => {
    const course = await prismaClient.course.create({
      data: req.body as CreateCourseDto,
    });
    res.status(201).json({
      message: "Created course",
      data: { course },
      length: 1,
    });
  })
);

courseRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const course = await prismaClient.course.findUnique({
      where: { id: req.params.id },
    });
    if (!course) {
      res.status(404).json({
        message: "Course not found",
      });
      return;
    }
    res.status(200).json({
      message: "Fetched course",
      data: { course },
      length: 1,
    });
  })
);

courseRouter.patch(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(UpdateCourseDto)],
  expressAsyncHandler(async (req, res) => {
    const course = await prismaClient.course.update({
      where: { id: req.params.id },
      data: req.body as UpdateCourseDto,
    });
    res.status(200).json({
      message: "Updated course",
      data: { course },
      length: 1,
    });
  })
);

courseRouter.delete(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN)],
  expressAsyncHandler(async (req, res) => {
    await prismaClient.course.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "Deleted course",
      data: null,
      length: 0,
    });
  })
);
