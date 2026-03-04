import { Component, effect, inject, signal } from '@angular/core';
import { ClientListService } from '../services/client-list.service';

@Component({
  selector: 'app-client-lists',
  imports: [],
  templateUrl: './client-lists.html',
  styleUrl: './client-lists.scss',
})
export class ClientLists {
  private clientListService = inject(ClientListService);
  clientList = this.clientListService.clientList;

  totalPrice = signal(0);

  constructor() {
    effect(async () => {
      const list = this.clientList();

      if (list.length > 0) {
        // Fetch the price from the service
        const price = await this.clientListService.getTotalPriceService();
        this.totalPrice.set(price);
      } else {
        this.totalPrice.set(0);
      }
    });
  }

  clearList() {
    this.clientListService.clearList();

  }
}