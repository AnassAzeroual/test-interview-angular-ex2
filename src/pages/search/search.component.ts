import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOmniSearchComponent } from 'ng-omni-search';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MovieDB } from '../../models/movie';
import { GlobalService } from '../../shared/services/global.service';
import { SharedModule } from '../../shared/shared.module';
import { ResultsComponent } from '../results/results.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ResultsComponent, NgFor, NgOmniSearchComponent, NzSelectModule, FormsModule, ReactiveFormsModule, SharedModule, NzPaginationModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  movies!: MovieDB
  searchInput = new FormControl('');
  multipleValue: string[] = [];
  listOfOption: { id: number; name: string; }[] = [];
  page: number = 1;
  constructor(private srvGlobal: GlobalService,private route: ActivatedRoute) {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.search()
      })
  }

  search() {
    this.srvGlobal.searchMovies(String(this.searchInput.value), this.page, this.multipleValue)
      .subscribe((res: any) => {
        this.movies = res
        this.srvGlobal.sessionStorage(res);
      });
  }

  discover() {
    this.srvGlobal.discoverMovies(this.page, this.multipleValue)
      .subscribe((res: any) => {
        this.movies = res
        this.srvGlobal.sessionStorage(res);
      });
  }

  ngOnInit(): void {
    this.movies = this.route.snapshot.data['resolverMovies'];
    this.srvGlobal.sessionStorage(this.movies);
    this.listOfOption = this.route.snapshot.data['resolverMoviesGenre']?.genres ?? [];
  }

  navigation(pageNumber: number) {
    this.page = pageNumber
    this.search()
  }
}
