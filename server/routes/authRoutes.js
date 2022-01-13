import express from "express";
const router = express.Router();
import {
  get_carts_and_orders,
  login,
  signup,
} from "../controllers/authController.js";
import {
  is_authenticate,
  not_authenticate,
} from "../middlewares/authMiddleware.js";
router.post("/login", not_authenticate, login);
router.post("/signup", not_authenticate, signup);
router.post("/get-carts-and-orders", is_authenticate, get_carts_and_orders);

export default router;
