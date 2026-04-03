import { Router } from "express";
import { listCards } from "../controllers/cards.controllers.js";

const router = Router();

router.get("/", listCards);

export default router;