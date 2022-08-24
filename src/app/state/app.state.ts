import { ActionReducerMap } from "@ngrx/store";
import { FilmOne, FilmState } from "../core/interfaces/film.interfaces";
import { filmOneReducer, filmReducer } from "./reducers/films.reducers";

export interface AppState {
  films: FilmState,
  film: FilmOne
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  films: filmReducer,
  film: filmOneReducer
}



