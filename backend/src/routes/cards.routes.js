import { Router } from "express";
import { listMTGCards, listRiftCards } from "../controllers/cards.controllers.js";

const router = Router();

router.get("/mtg", listMTGCards);
router.get("/rift", listRiftCards);

export default router;