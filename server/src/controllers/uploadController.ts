import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import multer from "multer";
import path from "path";
import { existsSync } from "fs";

export const uploadRouter = Router();
const upload = multer({ dest: "uploads/" });

uploadRouter.post(
  "/",
  upload.single("file"),
  expressAsyncHandler(async (req, res) => {
    const file = req.file;
    if (!file) {
      res.status(400).json({
        message: "No file uploaded",
      });
      return;
    }
    const fileName = file.filename;
    res.status(201).json({
      message: "File uploaded",
      data: { fileName },
      length: 1,
    });
  })
);

uploadRouter.get(
  "/:filename",
  expressAsyncHandler(async (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(
      process.env.UPLOADS_FOLDER || __dirname + "../../../uploads",
      fileName
    ) as string;

    if (!existsSync(filePath)) {
      res.status(404).json({
        message: "File not found",
      });
      return;
    }

    res.status(200).sendFile(filePath);
  })
);
