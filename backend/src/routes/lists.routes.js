import { Router } from "express";
import { fetchBuyList, createBuyList, addToBuyList, deleteBuyList } from "../controllers/lists.controllers.js";

const router = Router();

// Fetching lists
router.get("/:id", fetchBuyList)

// Create lists
router.post("/", createBuyList)

// Insert card into list 
// TODO fetch price_id based on card_id and foil bool
router.post("/:id", addToBuyList)

// Delete list
router.delete("/:id", deleteBuyList)

export default router;