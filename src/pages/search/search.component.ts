import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ResultsComponent } from '../results/results.component';
import { Movie } from '../../models/movie';
import { NgOmniSearchComponent } from 'ng-omni-search';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ResultsComponent, NgOmniSearchComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  movies: Movie[] = []
  searchInput = new FormControl('');
  constructor(private movieService: MoviesService) {
  }

  search(query: string) {
    this.movieService.searchMovies(query).subscribe((res: any) => {
      console.log(res);
      this.movies = res?.results
      // Handle search results
    });
  }

  ngOnInit(): void {
    this.searchInput.valueChanges
    .pipe(
      debounceTime(300), // Debounce time (adjust as needed)
      distinctUntilChanged()
    )
    .subscribe(res => {
      this.search(res ?? '')
    })

  }
}
