import { createAction, props } from '@ngrx/store';
import { Film } from 'src/app/core/interfaces/film.interfaces';


export const loadFilm = createAction(
  '[Film List] Load Film'
);
 

export const retrievedFilmList = createAction(
  '[Film List/API] Retrieve Films Success',
  props<{ films: Film[] }>()
); 

export const retrievedFilmOne = createAction(
  '[Film One] Retrieve loaded film Success',
  props<{ film: Film }>()
);