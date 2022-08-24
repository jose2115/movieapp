import { createReducer, on } from '@ngrx/store';
import { FilmOne, FilmState } from 'src/app/core/interfaces/film.interfaces';
import { retrievedFilmList, retrievedFilmOne } from '../actions/films.actions';


export const initialState: FilmState = { films:[]};

export const filmIndividualState:FilmOne = { film: {
       title: 'A New Hope dasdadsa',
       episode_id: 4,
       opening_crawl: 'ninguno',
       director: 'ninguno',
       producer: 'josealiss',
       release_date: new Date(),
       species: [],
       starships: [],
       vehicles: [],
       characters: [
        "https://swapi.dev/api/people/1/",
       "https://swapi.dev/api/people/2/",
       "https://swapi.dev/api/people/3/",
       "https://swapi.dev/api/people/4/",
       "https://swapi.dev/api/people/5/",
       "https://swapi.dev/api/people/10/",
       "https://swapi.dev/api/people/13/",
       "https://swapi.dev/api/people/14/",
       "https://swapi.dev/api/people/16/",
       "https://swapi.dev/api/people/18/",
       "https://swapi.dev/api/people/20/",
       "https://swapi.dev/api/people/21/",
       "https://swapi.dev/api/people/22/",
       "https://swapi.dev/api/people/25/",
       "https://swapi.dev/api/people/27/",
       "https://swapi.dev/api/people/28/",
       "https://swapi.dev/api/people/29/",
       "https://swapi.dev/api/people/30/",
       "https://swapi.dev/api/people/31/",
       "https://swapi.dev/api/people/45/"],
       planets: [],
       url: 'https://swapi.dev/api/films/1/',
       created: new Date(),
       edited: new Date()  
}   
};

export const filmReducer = createReducer(
  initialState,
  on(retrievedFilmList, (oldState, { films } ) => {
    return { ...oldState,  films }
  })
);

export const filmOneReducer = createReducer(
  filmIndividualState,
  on(retrievedFilmOne, (oldState, {film}) => {
    return { ...oldState,  film } 
  })
)