import express from "express";
import { createRecord , getRecords } from "../controllers/record.controller.js";
import { protect, allowRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create a financial record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - type
 *               - category
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 20000
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *                 example: income
 *               category:
 *                 type: string
 *                 example: salary
 *               note:
 *                 type: string
 *                 example: April salary
 *     responses:
 *       201:
 *         description: Record created successfully
 */
router.post("/", protect, allowRoles("admin"), createRecord);
/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all financial records
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of records
 */
router.get("/", protect, getRecords);

export default router;