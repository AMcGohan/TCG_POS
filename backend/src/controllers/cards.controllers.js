import { getMTGCardsService, getRiftCardsService } from "../services/cards.service.js"

export async function listMTGCards(req, res) {
    const cards = await getMTGCardsService();
    res.json({cards});
}

export async function listRiftCards(req, res) {
    const cards = await getRiftCardsService();
    res.json({cards});
}