import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FilmsService } from 'src/app/modules/films/services/films.service';
 
@Injectable()

export class FilmsEffects {
 
  loadFilms$ = createEffect(() => this.actions$.pipe(
    ofType('[Film List] Load Film'),
    mergeMap(() => this.film.onFilms()
      .pipe(
        map(films => ({ type: '[Film List/API] Retrieve Films Success', films })),
        catchError(() => EMPTY)
      ))
    )
  );



 
  constructor(
    private actions$: Actions,
    private film: FilmsService
  ) {}
}