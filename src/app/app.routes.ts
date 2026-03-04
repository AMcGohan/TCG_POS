import { Routes } from '@angular/router';
import { Mtg } from './mtg/mtg';
import { ClientLists } from './client-lists/client-lists';

export const routes: Routes = [
    { path: 'mtg', component: Mtg},
    { path: 'lists', component: ClientLists }
];
