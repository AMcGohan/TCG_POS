import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Mtg } from './mtg/mtg';
import { ClientLists } from './client-lists/client-lists';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'mtg', component: Mtg},
    { path: 'lists', component: ClientLists }
];
