import * as cardModels from "../models/cards.models.js";

export async function getCardsService() {
    return await cardModels.getAllCards();
}