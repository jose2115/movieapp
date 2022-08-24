import { Pipe, PipeTransform } from '@angular/core';
import { Character, characters } from '../interfaces/film.interfaces';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(data: Character[], gender:string):Character[] {

    if (!data) {
      return [];
    }
    if (!gender) {
      return data
    }
    gender = gender.toLocaleLowerCase();

    return data.filter(it => {
      return it.gender.toLocaleLowerCase() == gender;
    });

  }

}
