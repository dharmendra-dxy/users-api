import "dotenv/config";
import type { Request, Response } from "express";
import express from "express";

const app = express();

// middlewares


// Rate limiter


// Body Parsing middlewares


// routes

app.get("/", (req: Request, res: Response)=> {
  res.json({
    message: "Welcome to users-api",
    success:true,
  })
})

export default app;