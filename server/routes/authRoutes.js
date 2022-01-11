import express from "express";
const router = express.Router();
import { login, signup } from "../controllers/authController.js";
import { not_authenticate } from "../middlewares/authMiddleware.js";
router.post("/login", not_authenticate, login);
router.post("/signup", not_authenticate, signup);

export default router;
