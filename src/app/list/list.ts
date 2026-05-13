import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiResponse, CardListItem } from '../interfaces';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  // Contains array of cards associated with list_id, card_id, and price_id.
  // currentList: CardList[] = [];

  // API URL
  LIST_URL = "http://localhost:3000/api/list/";
  currentList: CardListItem[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchList(4);
  }


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

  async addCard(list_id: number, card_id: number, quantity: number) {
    const response = await fetch(this.LIST_URL + list_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"card_id": card_id, "price_id": 1, "quantity": quantity})
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
    this.cdr.detectChanges();
    this.currentList = data.buyList.Card_Orders;
  } 
}
