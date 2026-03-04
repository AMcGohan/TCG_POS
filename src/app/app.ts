import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Mtg } from "./mtg/mtg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mtg, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TCG_POS');
}
