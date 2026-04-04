import express from "express";
import { getSummary, getCategoryBreakdown } from "../controllers/dashboard.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/summary", protect, getSummary);
router.get("/categories", protect, getCategoryBreakdown);

export default router;