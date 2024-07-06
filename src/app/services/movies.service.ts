import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = '94e6a0482d705a94b0a30a488ce9058a';
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }


  searchMovies(query: string) {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);
  }

}
