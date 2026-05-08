import * as listModels from "../models/lists.models.js";

export async function getBuyListService(id) {
    return await listModels.getBuyListService(id);
}

export async function createBuyListService(buyListData) {
    return await listModels.createBuyListService(buyListData);
}