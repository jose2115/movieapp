import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/interfaces/film.interfaces';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

constructor(
  private http: HttpClient
) { }

onFilms(): Observable<Film[]> {
  const url = `${base_url}films`;
  return this.http.get<Film[]>(url).pipe(
    map((resp: any) => 
      resp.results
    )
  );  
}

onOneFilms(url_:string): Observable<Film> {
  const url = `${url_}`;
  return this.http.get<Film>(url).pipe(
    map((resp: Film) => 
      resp
    )
  );  
}


}


