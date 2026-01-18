import "dotenv/config";
import type { Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import corsConfig from "./config/cors";
import logger from "./config/logger";

const app = express();

// middlewares
app.use(helmet());
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use(morgan("combined", {stream: {write: (message) => logger.info(message.trim())}}))


app.get("/", (req: Request, res: Response)=> {
  res.json({
    message: "Welcome to users-api",
    success:true,
  })
})

export default app;