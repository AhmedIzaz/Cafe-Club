import express from "express";
import {
  categories,
  create_category,
  category_foods,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/category-list", categories);
router.get("/category-foods/:category_id", category_foods);
router.post("/create-category", create_category);

export default router;
