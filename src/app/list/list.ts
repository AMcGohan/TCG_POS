import { Component } from '@angular/core';
import { CardOrder } from '../interfaces/card_order';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  // Contains array of cards associated with list_id, card_id, and price_id.
  currentList: CardOrder[] = [];

  // API URL
  LIST_URL = "http://localhost:3000/api/list/";


  /**
   * Creates a list in the database and returns the list_id
   */
  async createList(customer_id: number, emp_id: number) {
    const response = await fetch(this.LIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "customer_id": customer_id, "emp_id": emp_id })
    });

    if (!response.ok) {
      console.error("List Creation failed");
      return
    }
    const result = await response.json();
    console.log(result.buyListData.id);
    return result.buyListData.id;
  } 

  async addCard(card_id: number) {

  }

  async fetchList(list_id: number) {
    const response = await fetch(this.LIST_URL + list_id);

    if (!response.ok) {
      console.error("List Fetch failed");
    }

    const result = await response.json();
    console.log(result);
    return result;
  } 
}
