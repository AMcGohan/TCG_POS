import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

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
}
