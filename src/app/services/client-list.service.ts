import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  clientList = signal<any[]>([]);

  addToList(item: any) {
    const currentList = this.clientList();
    this.clientList.set([...currentList, item]);
  }

  getList() {
    return this.clientList();
  }

  clearList() {
    this.clientList.set([]);
  }

  removeItem(index: number) {
    const currentList = this.clientList();
    this.clientList.set(currentList.filter((_, i) => i !== index));
  }

async getTotalPriceService(): Promise<number> {
    const list = this.clientList();
    if (list.length === 0) return 0;

    // Map IDs for Scryfall Collection endpoint
  const identifiers = list.map(card => {
      if (typeof card === 'string') return { id: card };
      if (card && card.id) return { id: card.id };
      return null;
    }).filter(item => item !== null); // Remove nulls
    
    try {
      // One request for up to 75 cards is much faster/better
      const response = await axios.post('https://api.scryfall.com/cards/collection', {
        identifiers: identifiers
      });

      const total = response.data.data.reduce((sum: number, card: any) => {
        // Scryfall prices are strings (e.g. "1.50"), convert to number
        const price = parseFloat(card.prices?.usd || '0');
        return sum + price;
      }, 0);

      return total;
    } catch (error) {
      console.error("Scryfall API Error:", error);
      return 0;
    }
  }
}
