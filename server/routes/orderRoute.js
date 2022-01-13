import express from "express";
import { create_order } from "../controllers/orderController.js";
import { is_authenticate } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create-order", is_authenticate, create_order);

export default router;
