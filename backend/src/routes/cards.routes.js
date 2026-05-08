import { Router } from "express";
import { listMTGCards, listRiftCards } from "../controllers/cards.controllers.js";

const router = Router();

router.get("/mtg/:name", listMTGCards);

// router.get("/rift/:name", listRiftCards);
// router.get("/op/:name", listOPCards);
// router.get("/swu/:name", listSWUCards);
// router.get("/fab/:name", listFABCards);
// router.get("/pkmn/:name", listPKMNCards);

export default router;