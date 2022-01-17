import express from "express";
import {
  delete_order_by_owner,
  owner_login,
  owner_signup,
} from "../controllers/ownerController.js";
import {
  is_authenticate,
  not_authenticate,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/owner-signup", not_authenticate, owner_signup);
router.post("/owner-login", not_authenticate, owner_login);
router.post("/delete-order-by-owner", is_authenticate, delete_order_by_owner);

export default router;
