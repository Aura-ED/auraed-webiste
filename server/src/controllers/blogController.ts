import { Router } from "express";
import { makeValidateBody } from "express-class-validator";
import { CreateBlogDto } from "../dto/blogs.dto";
import { prismaClient } from "../prisma";
import expressAsyncHandler from "express-async-handler";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { hasRole } from "../middlewares/hasRole";
import { Role } from "@prisma/client";

export const blogRouter = Router();

blogRouter.get(
  "/",
  expressAsyncHandler(async (_req, res) => {
    const blogs = await prismaClient.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({
      message: "Fetched all blogs",
      data: { blogs },
      length: blogs.length,
    });
  })
);

blogRouter.post(
  "/",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(CreateBlogDto)],
  expressAsyncHandler(async (req, res) => {
    const blog = await prismaClient.blog.create({
      data: {
        ...(req.body as CreateBlogDto),
      },
    });
    res.status(201).json({
      message: "Blog created",
      data: { blog },
      length: 1,
    });
  })
);

blogRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blog = await prismaClient.blog.findUnique({
      where: { id: req.params.id },
    });
    if (!blog) {
      res.status(404).json({
        message: "Blog not found",
      });
      return;
    }
    res.status(200).json({
      message: "Blog found",
      data: { blog },
      length: 1,
    });
  })
);

blogRouter.put(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(CreateBlogDto)],
  expressAsyncHandler(async (req, res) => {
    const blog = await prismaClient.blog.update({
      where: { id: req.params.id },
      data: {
        ...(req.body as CreateBlogDto),
      },
    });
    res.status(200).json({
      message: "Blog updated",
      data: { blog },
      length: 1,
    });
  })
);

blogRouter.delete(
  "/:id",
  [isAuthenticated, hasRole(Role.ADMIN)],
  expressAsyncHandler(async (req, res) => {
    const blog = await prismaClient.blog.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "Blog deleted",
      data: { blog },
      length: 1,
    });
  })
);
