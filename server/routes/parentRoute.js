import express from "express";
import { create_parent } from "../controllers/parentController.js";
const router = express.Router();

router.post("/create-parent", create_parent);
export default router;
