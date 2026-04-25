import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mtg',
  imports: [FormsModule,],
  templateUrl: './mtg.html',
  styleUrl: './mtg.scss',
})

export class Mtg {
  MTG_API = "http://localhost:3000/api/cards/mtg";

  cards: any[] = [];  // flattened list of card faces for display

  constructor(private cdr: ChangeDetectorRef) {
  }

  async search(card_query: string) {
    event?.preventDefault();
    if (!card_query) {
      this.cards = [];
      return;
    }
    try {
      const response = await fetch(`${this.MTG_API}/${card_query}`);
      const result = await response.json();

      this.cards = result.cards;
      this.cdr.detectChanges();

    } catch (error) {
      console.error('search failed', error);
    }
  }
}
