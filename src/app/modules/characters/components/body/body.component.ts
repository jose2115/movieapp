import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, Film } from 'src/app/core/interfaces/film.interfaces';
import { loadFilm } from 'src/app/state/actions/films.actions';
import { selectFilmsSelector, selectIndividualFilmsFeature } from 'src/app/state/selectors/films.selectors';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  character:Character[] = []
  films: Film[] = []
  filmOne: Observable<Film> = new Observable()
  public search:string = ''
  public genders:string = ''
  public url:string = ''
  public page:number = 0

  gender = [
    {'genero': 'male'},
    {'genero': 'female'},
    {'genero': 'N/A'}
  ]

  constructor(
    private store: Store<any>,
    private characterService: CharactersService
  ) { }

  ngOnInit() {

   this.onCharacters()
   this.onFilms()

  }

  onCharacters(){

     //this.onCharacters()
     this.filmOne = this.store.select(selectIndividualFilmsFeature)

     console.log("seleccionado", this.filmOne)

     this.filmOne.subscribe(
       resp =>{

         resp.characters.forEach(element => {

           this.characterService.onOneCharacter(element).subscribe(
             resp => 
             {
              console.log(resp)
               this.character.push(resp)
             }
             
           )
         })

       }

      
     )
 
    console.log(this.character)
  }

  onSearch(valor:string){
    this.search = valor
  }

  onFilms(){

    this.store.dispatch(loadFilm())

   this.store.select(selectFilmsSelector).subscribe(
    resp => {
      this.films = resp
    }
   )
  }

}
