import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilmsService } from 'src/app/modules/films/services/films.service';

@Pipe({
  name: 'pipefilms'
})
export class FilmsPipe implements PipeTransform {

  constructor(
    private film: FilmsService
  ){

  }

  transform(value: string): Observable<any> {

    return this.film.onOneFilms(value).pipe(map(resp => {
      return resp.title
    }));

  }


}
