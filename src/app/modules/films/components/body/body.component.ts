
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/interfaces/film.interfaces';
import { loadFilm, retrievedFilmOne } from 'src/app/state/actions/films.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFilmsSelector, selectIndividualFilmsFeature} from 'src/app/state/selectors/films.selectors';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  films: Observable<Film[]> = new Observable()
  filmOne: Observable<Film> = new Observable()
  prueba: any;

  constructor(
    private store: Store<AppState>
  ) {
   }

  ngOnInit() {
    this.onFilms()
  }

  onFilms(){

    this.store.dispatch(loadFilm())

    this.films = this.store.select(selectFilmsSelector)

    this.films.subscribe(resp =>  this.store.dispatch(retrievedFilmOne({ film : resp[0]})));

    this.filmOne = this.store.select(selectIndividualFilmsFeature)

  }

  onSelectId(){

    this.filmOne.subscribe(
      resp => 
      console.log(resp)
    )
  }


  onSelect(valor:Film){

    console.log("enviando", valor)

    this.store.dispatch(retrievedFilmOne( { film: valor } ))

  }
 

}
