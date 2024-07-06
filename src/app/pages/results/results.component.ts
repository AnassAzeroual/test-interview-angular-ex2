import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  movies: Movie[] = []
@Input('movies') set newMovie(movies: Movie[]){
  this.movies = movies;
}

  showDetails(movieId: number) {
    // Implement navigation to movie details page
  }
}
