import { Component, signal, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { List } from "./list/list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, List],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TCG_POS');

  clientList: any;
  totalPrice = signal(0);

}
