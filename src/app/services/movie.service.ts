import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`${environment.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    );
  }
}
