import express from "express";
import {
  delete_order_by_owner,
  get_customers,
  owner_login,
  owner_signup,
} from "../controllers/ownerController.js";
import {
  is_owner_authenticate,
  not_authenticate,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/owner-signup", not_authenticate, owner_signup);
router.post("/owner-login", not_authenticate, owner_login);
router.post("/delete-order", is_owner_authenticate, delete_order_by_owner);
router.post("/get-customers", is_owner_authenticate, get_customers);

export default router;
