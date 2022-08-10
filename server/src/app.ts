import express from "express";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "./utils/errorUtils";
import { NODE_ENV } from "./config";
import { blogRouter } from "./controllers/blogController";
import { eventRouter } from "./controllers/eventController";
import { authRouter } from "./controllers/authController";

const app = express();

// Middlewares
app.use(express.json());
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Controllers
app.use("/v1/blogs", blogRouter);
app.use("/v1/events", eventRouter);
app.use("/v1/auth", authRouter);

// Error handlers
app.use((err: AppError, _req: Request, res: Response, _next: NextFunction) => {
  handleError(err, res);
});

app.use("*", (_req: Request, _res: Response, next) => {
  next(new AppError(404, "404 Not Found"));
});

app.listen(3000, () => console.log("Server is running on port 3000"));
