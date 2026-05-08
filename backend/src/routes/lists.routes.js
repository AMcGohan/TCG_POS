import { Router } from "express";
import { fetchBuyList, createBuyList, addToBuyList } from "../controllers/lists.controllers.js";

const router = Router();

// Fetching lists
router.get("/:id", fetchBuyList)

// Create lists
router.post("/", createBuyList)

// Insert card into list 
// TODO fetch price_id based on card_id and foil bool
router.post("/:id", addToBuyList)

export default router;