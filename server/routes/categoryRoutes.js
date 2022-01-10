import express from "express";
import { categories } from "../controllers/categoryController.js";
const router = express.Router();

router.get("/category_list", categories);

export default router;
