import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Character, characters, CharacterState, data } from 'src/app/core/interfaces/film.interfaces';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

constructor(
  private http: HttpClient
) { }


onCharacters(): Observable<data> {
  const url = `${base_url}people`;
  return this.http.get<data>(url).pipe(
    tap((resp: data) => 
      resp
    )
  );  
}


onOneCharacter(url_:string): Observable<Character> {
  const url = `${url_}`;
  return this.http.get<Character>(url).pipe(
    map((resp: Character) => 
      resp,
    )
  );  
}


}
