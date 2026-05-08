import * as cardModels from "../models/cards.models.js";

export async function getMTGCardsService(name) {
    return await cardModels.getMTGCardService(name);
}

export async function getRiftCardsService() {
    return await cardModels.getAllRiftCardsService();
}

export async function getBuyListService(id) {
    return await cardModels.getBuyListService(id);
}