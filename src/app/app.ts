import { Component, signal, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientListService } from './services/client-list.service';
import { ClientLists } from "./client-lists/client-lists";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ClientLists, ClientLists],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TCG_POS');

  clientList: any;
  totalPrice = signal(0);
  
  constructor(private clientListService: ClientListService) {
    effect(async () => {
      const list = this
    });
    this.clientList = this.clientListService.clientList;
  }

  clearList() {
    this.clientListService.clearList();
  }
  // async getListPrice() {
  //   return await this.clientListService.getListPrice();
  // }
}
