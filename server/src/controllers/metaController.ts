import { Role } from '@prisma/client';
import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { makeValidateBody } from '../utils/validateBody';
import { hasRole } from '../middlewares/hasRole';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { prismaClient } from '../prisma';
import { CreateMetaDto, UpdateMetaDto } from '../dto/metadata.dto';

export const metaRouter = Router();

metaRouter.get(
  '/',
  expressAsyncHandler(async (_req, res) => {
    const metaDataObj = await prismaClient.metadata.findUnique({
      where: {
        id: 'cl8p09cyd0020jgt0fouq2a7n',
      },
    });
    const metaData = {
      places: metaDataObj?.places,
      events: metaDataObj?.events,
      reach: metaDataObj?.reach,
      updatedAt: metaDataObj?.updatedAt,
    };
    console.log(metaData);
    console.log(Date.now());
    res.status(200).json({
      message: 'Fetched metadata',
      data: { ...metaData },
      length: 1,
    });
  })
);

metaRouter.patch(
  '/',
  [isAuthenticated, hasRole(Role.ADMIN), makeValidateBody(UpdateMetaDto, true)],
  expressAsyncHandler(async (req, res) => {
    const metaDataObj = await prismaClient.metadata.update({
      where: { id: 'cl8p09cyd0020jgt0fouq2a7n' },
      data: {
        ...(req.body as UpdateMetaDto),
      },
    });
    const metaData = {
      places: metaDataObj?.places,
      events: metaDataObj?.events,
      reach: metaDataObj?.reach,
      updatedAt: metaDataObj.updatedAt,
    };
    res.status(200).json({
      message: 'Metadata updated',
      data: { ...metaData },
      length: 1,
    });
  })
);
