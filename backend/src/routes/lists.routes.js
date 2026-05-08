import { Router } from "express";
import { fetchBuyList, createBuyList } from "../controllers/lists.controllers.js";

const router = Router();

// Fetching lists
router.get("/:id", fetchBuyList)

// Create lists
router.post("/", createBuyList)

export default router;