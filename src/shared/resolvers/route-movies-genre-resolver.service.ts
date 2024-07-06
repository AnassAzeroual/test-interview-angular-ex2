import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class RouteMoviesGenreResolver implements Resolve<any> {
  constructor(private srvGlobal: GlobalService) {}

  resolve(): Observable<any> {
    return this.srvGlobal.getGenres()
  }
}
