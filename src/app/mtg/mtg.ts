import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../interfaces';

@Component({
  selector: 'app-mtg',
  imports: [FormsModule,],
  templateUrl: './mtg.html',
  styleUrl: './mtg.scss',
})

export class Mtg {
  MTG_API = "http://localhost:3000/api/cards/mtg";

  cards: Card[] = [];

  constructor(private cdr: ChangeDetectorRef) {
  }

  /**
   * Uses backend search select function. If empty, displays "No cards found"
   * @param card_query 
   * @returns 
   */
  async search(card_query: string) {
    event?.preventDefault();
    if (!card_query) {
      this.cards = [];
      return;
    }
    try {
      const response = await fetch(`${this.MTG_API}/${card_query}`);

      if (!response.ok) {
        console.error("Card search failed");
        return
      }
      const result = await response.json();

      this.cards = result.cards;
      this.cdr.detectChanges();

    } catch (error) {
      console.error('search failed', error);
    }
  }
}
