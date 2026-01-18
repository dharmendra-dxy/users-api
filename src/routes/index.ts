import express from "express"
import type { Request, Response } from "express";

import authRoutes from "./auth.routes"


const router = express.Router();

router.use("/auth", authRoutes);


router.use("/health", (req: Request, res:Response) => {
  res.status(200).json({
    success: true,
    message: "Users Api is running"
  })
})


export default router;