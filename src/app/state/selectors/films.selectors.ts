import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { FilmOne, FilmState } from 'src/app/core/interfaces/film.interfaces';
import { AppState } from '../app.state';

//export const selectFilms = createFeatureSelector<Film[]>('films');

export const selectFilms = ( state: AppState ) => state.films;

export const selectFilm = (state: AppState) => state.film;

//export const selectFilmOne = createFeatureSelector<Film>('film');



export const selectFilmsSelector = createSelector(
  selectFilms,
  (state: FilmState) => state.films
);

//TODO -> this selector is used to access the array films property of the store in FilmState 
export const selectIndividualFilmsFeature = createSelector(
   selectFilm,
    (state: FilmOne) => state.film
);

/* export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
); */