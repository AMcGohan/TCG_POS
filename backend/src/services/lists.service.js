import { addToBuyList } from "../controllers/lists.controllers.js";
import * as listModels from "../models/lists.models.js";

export async function getBuyListService(id) {
    return await listModels.getBuyListService(id);
}

export async function createBuyListService(buyListData) {
    return await listModels.createBuyListService(buyListData);
}

export async function addToBuyListService(id, cardsToAdd) {
    return await listModels.addToBuyListService(id, cardsToAdd);
}