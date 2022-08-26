import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { prismaClient } from "../prisma";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "../config";
import { LoginDto, RefreshTokenDto, SignupDto } from "../dto/auth.dto";
import { makeValidateBody } from "../utils/validateBody";

export const authRouter = Router();

authRouter.post(
  "/login",
  makeValidateBody(LoginDto),
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body as LoginDto;
    const user = await prismaClient.user.findUnique({
      where: { email },
    });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid password",
      });
      return;
    }
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      JWT_ACCESS_SECRET
    );
    const refreshToken = jwt.sign(
      { id: user.id, tokenVersion: user.tokenVersion },
      JWT_REFRESH_SECRET
    );
    res.status(200).json({
      message: "Logged in",
      data: { accessToken, refreshToken },
      length: 1,
    });
  })
);

authRouter.post(
  "/signup",
  makeValidateBody(SignupDto),
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await prismaClient.user.findUnique({
      where: { email },
    });
    if (user) {
      res.status(409).json({
        message: "User already exists",
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const accessToken = jwt.sign(
      { id: newUser.id, role: newUser.role } as IAccessTokenPayload,
      JWT_ACCESS_SECRET
    );
    const refreshToken = jwt.sign(
      { id: newUser.id, tokenVersion: 1 } as IRefreshTokenPayload,
      JWT_REFRESH_SECRET
    );
    res.status(200).json({
      message: "User created",
      data: { accessToken, refreshToken },
      length: 1,
    });
  })
);

authRouter.post(
  "/refresh",
  makeValidateBody(RefreshTokenDto),
  expressAsyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    const { id, tokenVersion } = jwt.verify(
      refreshToken,
      JWT_REFRESH_SECRET
    ) as IRefreshTokenPayload;
    const user = await prismaClient.user.findUnique({
      where: { id },
      select: { tokenVersion: true, id: true, role: true },
    });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }
    if (user.tokenVersion !== tokenVersion) {
      res.status(401).json({
        message: "Invalid refresh token",
      });
      return;
    }
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      JWT_ACCESS_SECRET
    );
    const newRefreshToken = jwt.sign(
      { id: user.id, tokenVersion: tokenVersion },
      JWT_REFRESH_SECRET
    );
    res.status(200).json({
      message: "Refresh successful",
      data: { accessToken, refreshToken: newRefreshToken },
      length: 1,
    });
  })
);
