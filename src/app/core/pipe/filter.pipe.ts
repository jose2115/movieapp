import { Pipe, PipeTransform } from '@angular/core';
import { Character, characters } from '../interfaces/film.interfaces';

@Pipe({
  name: 'filtrar'
})


export class FilterPipe implements PipeTransform {

  transform(data: Character[], page:number = 0, search:string):Character[] {

    if (!data) {
      return [];
    }
    if (!search) {
      return data
    }
    search = search.toLocaleLowerCase();

    return data.filter(it => {
      return it.eye_color.toLocaleLowerCase().includes(search);
    });

  }

}
