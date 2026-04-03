import { getCardsService } from "../services/cards.service.js"

export async function listCards(req, res) {
    const cards = await getCardsService();
    res.json({cards});
}