import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { loggerMiddleware } from "./middleware/logger";
import logger from "./utils/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);

app.get("/health", (_req: Request, res: Response) => {
  const healthCheck = {
    status: "ok",
    message: "OK",
    uptime: process.uptime(),
    timestamp: Date.now(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || "1.0.0",
  };

  try {
    res.status(200).json(healthCheck);
    logger.info({ message: "Health check successful", data: healthCheck });
  } catch (error) {
    healthCheck.status = "error";
    healthCheck.message = (error as Error).message;
    res.status(503).json(healthCheck);
    logger.error({ message: "Health check failed", error });
  }
});

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    req: {
      method: req.method,
      url: req.url,
      headers: req.headers,
    },
  });
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
