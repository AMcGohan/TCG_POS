import { getBuyListService, createBuyListService, addToBuyListService } from "../services/lists.service.js";

export async function fetchBuyList(req, res) {
    try {
        const buyList = await getBuyListService(req.params.id);
        res.json({buyList});
    } catch (error) {
        console.error("Buy list cont. error:", error.message);
        res.status(500).json({ error: "Failed to retrieve list"});
    }
}

export async function createBuyList(req, res) {
    try {
        const buyListData = await createBuyListService(req.body);
        res.json({buyListData});
    } catch(error) {
        console.error("Buy list creation error: ", error.message);
        res.status(500).json({ error: "Failed to create list"});
    }
}

export async function addToBuyList(req, res) {
    try {
        const listId = req.params.id;
        const cardsToAdd = req.body;
        await addToBuyListService(listId, cardsToAdd);
        const newList = await getBuyListService(listId)
        res.json({newList});
    } catch(error) {
        console.error(error.message)
    }
} 