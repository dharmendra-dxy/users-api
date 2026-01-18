import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import corsConfig from "./config/cors";
import logger from "./config/logger";

import router from "./routes";

const app = express();

// middlewares
app.use(helmet());
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use(morgan("combined", {stream: {write: (message) => logger.info(message.trim())}}))



app.use("/api", router)

export default app;