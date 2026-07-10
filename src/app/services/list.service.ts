import { Injectable } from "@angular/core";
import { ApiResponse } from "../interfaces";


@Injectable({ providedIn: 'root' })
export class ListService {

    LIST_URL = "http://localhost:3000/api/list/";

    constructor() {}

    async addCard(card_id: number, list_id: number) {
        const response = await fetch(this.LIST_URL + list_id, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({"card_id": card_id, "price_id": 1})
        });

        if (!response.ok) {
            console.error("Add to List failed");
            return
        }
        const result = await response.json();
        console.log(result);
        return result;
        }

        async fetchList(list_id: number) {
        const response = await fetch(this.LIST_URL + list_id);

        if (!response.ok) {
            console.error("List Fetch failed");
        }

        const data: ApiResponse = await response.json();
        console.log(data);
    }
}