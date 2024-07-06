import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiKey = '94e6a0482d705a94b0a30a488ce9058a';
  private apiUrl = 'https://api.themoviedb.org/3';

  /* -------------------------------------------------------------------------- */
  /*                              Spinner Behavior                              */
  /* -------------------------------------------------------------------------- */
  private stateSource = new BehaviorSubject<boolean>(false);
  currentState$ = this.stateSource.asObservable();
  changeSpinnerValueState(state: boolean) { this.stateSource.next(state); }
  constructor(private http: HttpClient) { }


  searchMovies(query: string, page: number, genre: string[]) {
    if(!query) return this.discoverMovies(page,genre);
    let tempIDs = genre.join(',');
    const queryParams = {api_key:this.apiKey,query:query,page:page,with_genres:tempIDs}
    return this.http.get(`${this.apiUrl}/search/movie`,{params:queryParams});
  }

  discoverMovies(page: number, genres: string[]) {
    let tempIDs = genres.join(',');
    const queryParams = {api_key:this.apiKey,include_adult:false,include_video:false,language:'en-US',sort_by:'popularity.desc',page:page,with_genres:tempIDs}
    return this.http.get(`${this.apiUrl}/discover/movie`,{params:queryParams});
  }

  getGenres() {
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list', { params: { language: 'en' } })
  }

  sessionStorage(data:any){
    sessionStorage.setItem('movies',JSON.stringify(data));
  }

}
