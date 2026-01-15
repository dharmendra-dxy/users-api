import "dotenv/config";
import express, { Request, Response } from "express";

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