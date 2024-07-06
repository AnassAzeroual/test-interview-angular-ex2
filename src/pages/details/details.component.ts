import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {Movie, MovieDB} from "../../models/movie";
import { SharedModule } from '../../shared/shared.module';
import { NgIf, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NzRateModule, FormsModule, NzIconModule,NzButtonModule,SharedModule,NgIf,NgOptimizedImage],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  movieId!: number
  movie: Movie = new Movie();
  isFavorit = false
  window = window
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id']
    if (sessionStorage.getItem('movies')) {
      let tempMovie: MovieDB = JSON.parse(sessionStorage.getItem('movies')!)
      this.movie = tempMovie.results.find((v: Movie) => v.id == this.movieId) ?? new Movie();
    }

  }

  favorit() {
    this.isFavorit = !this.isFavorit;
    let data = []
    if (sessionStorage.getItem('favorites')) {
      data  = JSON.parse(sessionStorage.getItem('favorites')!)
    }
    data.push(this.movie)
    let tempFavorites = [...new Set(data)]
    sessionStorage.setItem('favorites',JSON.stringify(tempFavorites))
  }

}
