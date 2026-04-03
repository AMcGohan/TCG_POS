import { Routes } from '@angular/router';
import { Mtg } from './mtg/mtg';
import { Riftbound } from './riftbound/riftbound';

export const routes: Routes = [
    { path: 'mtg', component: Mtg},
    { path: 'rift', component: Riftbound},
];
