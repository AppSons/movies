import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //Key 54d169bd

  private API_URL: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=54d169bd';

  constructor(private hhtp: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.hhtp.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    );
  }
}
