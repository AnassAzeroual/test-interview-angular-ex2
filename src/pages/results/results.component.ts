import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import {Movie, MovieDB} from "../../models/movie";
import {MovieCardComponent} from "../../shared/componentes/movie-card/movie-card.component";
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgFor,NzEmptyModule,MovieCardComponent,SharedModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  movies: MovieDB = new MovieDB();
@Input('movies') set newMovie(movies: MovieDB){
  this.movies = movies;
}
 constructor(private router: Router){}
  showDetails(movieId: number) {
    this.router.navigate(['/details', movieId]);

  }
}
