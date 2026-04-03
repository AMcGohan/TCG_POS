import { Component } from '@angular/core';

@Component({
  selector: 'app-riftbound',
  imports: [],
  templateUrl: './riftbound.html',
  styleUrl: './riftbound.scss',
})
export class Riftbound {
  cards: any[] = [];

  constructor() {
    this.getReksai();
  }

  async getReksai() {
    try {
      const response = await fetch('http://localhost:3000/api/cards/rift');
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const result = await response.json();
      this.cards[0] = result.cards[0];
      console.log(this.cards);

    } catch (error) {
      console.error(`Fetch error:`, error);
    }
  }
}