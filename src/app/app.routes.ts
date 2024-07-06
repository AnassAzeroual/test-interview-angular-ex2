import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import {SearchComponent} from "./pages/search/search.component";
import {ResultsComponent} from "./pages/results/results.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'details', component:DetailsComponent },
  { path: 'search', component:SearchComponent },
  { path: 'results', component:ResultsComponent },
  { path: 'favorites', component:FavoritesComponent },
];
