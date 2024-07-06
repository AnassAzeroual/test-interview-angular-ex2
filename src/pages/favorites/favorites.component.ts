import { Component, OnInit } from '@angular/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { Movie, MovieDB } from "../../models/movie";
import { SharedModule } from '../../shared/shared.module';
import { ResultsComponent } from '../results/results.component';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ResultsComponent, NzEmptyModule, SharedModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  movies: MovieDB = new MovieDB();

  ngOnInit(): void {
    let data = sessionStorage.getItem('favorites');
    if (data) {
      this.movies.results = JSON.parse(data)
    }
  }

}
