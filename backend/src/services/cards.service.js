import * as cardModels from "../models/cards.models.js";

export async function getMTGCardsService() {
    return await cardModels.getAllMTGCardsService();
}

export async function getRiftCardsService() {
    return await cardModels.getAllRiftCardsService();
}