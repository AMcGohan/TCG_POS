import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Card {
  name: string;
  setCode: string;
  number: string;
  imgUrl: string;
}

@Component({
  selector: 'app-mtg',
  imports: [FormsModule,],
  templateUrl: './mtg.html',
  styleUrl: './mtg.scss',
})

export class Mtg {
  MTG_API = "http://localhost:3000/api/cards/mtg";
  SCRYFALL_API = "http://api.scryfall.com/cards/search?q=!"

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
      // Fetch images and wait for completion
      await this.getMTGCardImages();
      this.cdr.detectChanges();

    } catch (error) {
      console.error('search failed', error);
    }
  }

  /**
   *  Called by search query; fetches images from Scryfall API and maps it to card by set and collector number
   * @returns 
   */
async getMTGCardImages() {
  try {

    const response = await fetch(this.SCRYFALL_API + `"${this.cards[0].name}"` + "&unique=prints");
    
    if (!response.ok) {
      console.error("Image getter failed for", this.cards[0].name);
      return;
    }

    const result = await response.json();
    const imageIndex = new Map<string, string>();

    for (const print of result.data) {
      const key = `${print.set}-${print.collector_number}`;
      imageIndex.set(key.toLowerCase(), print.image_uris.small);
    }

    console.log("Image index: ", imageIndex);

    for (const card of this.cards) {
      const key = `${card.setCode}-${card.number}`;
      card.imgUrl = imageIndex.get(key.toLowerCase()) || '';
    }

    console.log("This.cards: ", this.cards);
  } catch (error) {
    console.error('image fetch failed ', error);
  }
}
}
