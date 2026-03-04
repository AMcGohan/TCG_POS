import { Component } from '@angular/core';
import { ClientListService } from '../services/client-list.service';

@Component({
  selector: 'app-client-lists',
  imports: [],
  templateUrl: './client-lists.html',
  styleUrl: './client-lists.scss',
})
export class ClientLists {
  clientList: any;

  constructor(private clientListService: ClientListService) {
    this.clientList = this.clientListService.clientList;
  }

  clearList() {
    this.clientListService.clearList();

  }

}