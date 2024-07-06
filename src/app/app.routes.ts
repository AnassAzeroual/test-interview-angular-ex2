import { Routes } from '@angular/router';
import {DetailsComponent} from "../pages/details/details.component";
import {SearchComponent} from "../pages/search/search.component";
import {FavoritesComponent} from "../pages/favorites/favorites.component";
import { RouteMoviesResolver } from '../shared/resolvers/route-movies-resolver.service';
import { RouteMoviesGenreResolver } from '../shared/resolvers/route-movies-genre-resolver.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'details/:id', component:DetailsComponent },
  { 
    path: 'search',
    component:SearchComponent,
    resolve: {
      resolverMovies: RouteMoviesResolver,
      resolverMoviesGenre: RouteMoviesGenreResolver,
    }
  },
  { path: 'favorites', component:FavoritesComponent },
];
