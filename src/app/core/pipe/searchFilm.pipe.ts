import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/film.interfaces';

@Pipe({
  name: 'searchFilm'
})
export class SearchFilmPipe implements PipeTransform {

  transform(data: Character[], url:string):Character[] {

    if (!data) {
      return [];
    }
    if (!url) {
      return data
    }

    return data.filter(it => {
      return it.films.includes(url);
    });

  }

}
