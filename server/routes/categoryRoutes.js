import express from "express";
import {
  categories,
  create_category,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/category_list", categories);
router.post("/create-category", create_category);

export default router;
