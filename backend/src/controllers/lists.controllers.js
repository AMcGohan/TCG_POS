import { getBuyListService, createBuyListService } from "../models/lists.models.js";

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