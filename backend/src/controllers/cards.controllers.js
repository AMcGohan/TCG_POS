import { getMTGCardsService, getRiftCardsService } from "../services/cards.service.js"

export async function listMTGCards(req, res) {
    try {
        const cards = await getMTGCardsService(req.params.name);
        res.json({ cards });
    } catch (error) {
        console.error("Controller error:", error.message);
        res.status(500).json({ error: "Failed to retrieve cards" });
    }
}

export async function listRiftCards(req, res) {
    const cards = await getRiftCardsService();
    res.json({cards});
}

export async function fetchBuyList(req, res) {
    try {
        const buyList = await getBuyListService(req.params.id);
        res.json({buyList});
    } catch (error) {
        console.error("Buy list cont. error:", error.message);
        res.status(500).json({ error: "Failed to retrieve list"});
    }
}