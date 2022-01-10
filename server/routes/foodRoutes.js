import express from "express";
import { food_description } from "../controllers/foodController.js";
const router = express.Router();

router.get("/food-description/:_id", food_description);

export default router;
