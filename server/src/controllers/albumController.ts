import { Role } from "@prisma/client";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { CreateAlbumDto } from "../dto/album.dto";
import { hasRole } from "../middlewares/hasRole";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { prismaClient } from "../prisma";
import { makeValidateBody } from "../utils/validateBody";

export const albumRouter = Router();

albumRouter.get(
  "/",
  expressAsyncHandler(async (_req, res) => {
    const albums = await prismaClient.album.findMany();

    res.status(200).json({
      message: "Fetched all albums",
      data: { albums },
      length: albums.length,
    });
  })
);

albumRouter.post(
  "/",
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(CreateAlbumDto)],
  expressAsyncHandler(async (req, res) => {
    const { name, images } = req.body as CreateAlbumDto;
    const album = await prismaClient.album.create({
      data: {
        name,
        images,
      },
    });
    res.status(201).json({
      message: "Created Album",
      data: { album },
      length: 1,
    });
  })
);
