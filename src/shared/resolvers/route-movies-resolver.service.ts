import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteMoviesResolver implements Resolve<any> {
  constructor(private srvGlobal: GlobalService) {}

  resolve(): Observable<any> {
    let page = 1;
    let genres: string[] = [];
    return this.srvGlobal.discoverMovies(page,genres)
  }
}
