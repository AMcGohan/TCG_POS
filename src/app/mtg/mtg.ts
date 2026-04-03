import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mtg',
  imports: [FormsModule,],
  templateUrl: './mtg.html',
  styleUrl: './mtg.scss',
})
export class Mtg {
  cards: any[] = [];  // flattened list of card faces for display

  constructor(private cdr: ChangeDetectorRef) {
    this.getSephiroth();
  }

  async getSephiroth() {
    try {
      const response = await fetch('http://localhost:3000/api/cards');
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const result = await response.json();
      this.cards[0] = result.cards[0];
      console.log(this.cards);

    } catch (error) {
      console.error(`Fetch error:`, error);
    }
  }

  // private normalizeCards(rawCards: any[]): any[] {
  //   return rawCards.map((card: any) => {
  //     // Double-faced cards have card_faces array - use only the front face
  //     if (card.card_faces && card.card_faces.length > 0) {
  //       const frontFace = card.card_faces[0];
  //       return {
  //         name: frontFace.name,
  //         image_uris: frontFace.image_uris,
  //         card_set: card.set.toUpperCase(),
  //         card_cn: card.collector_number,
  //         card_id: card.id,
  //         prices: card.prices.usd,
  //         prices_foil: card.prices.usd_foil,
  //       };
  //     }
  //     // Single-faced cards: return as-is
  //     return {
  //       name: card.name,
  //       image_uris: card.image_uris,
  //       card_set: card.set,
  //       card_cn: card.collector_number,
  //       card_id: card.id,
  //       prices: card.prices.usd,
  //       prices_foil: card.prices.usd_foil,
  //     };
  //   });
  // }

  async search(card_query: string) {
    // event?.preventDefault();
    // if (!card_query) {
    //   this.cards = [];
    //   return;
    // }
    // try {
    //   const response = await axios.get(`https://api.scryfall.com/cards/search?q=${card_query}&unique=prints`);
    //   const rawCards = response.data.data || [];
    //   this.cards = this.normalizeCards(rawCards);
    //   console.log('search results', rawCards);
    //   this.cdr.markForCheck();
    // } catch (error) {
    //   console.error('search failed', error);
    // }
  }
}
