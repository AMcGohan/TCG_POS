import { Router } from "express";
import { listMTGCards, listRiftCards, fetchBuyList } from "../controllers/cards.controllers.js";

const router = Router();

router.get("/mtg/:name", listMTGCards);
router.get("/rift", listRiftCards);

// Fetching lists
router.get("/list/:id", fetchBuyList);

export default router;