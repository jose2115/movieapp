import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CharactersRoutes } from './characters.routing';
import { BodyComponent } from './components/body/body.component';
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
import { FilterPipe } from 'src/app/core/pipe/filter.pipe';
import { FilmsPipe } from 'src/app/core/pipe/films.pipe';
import { GenderPipe } from 'src/app/core/pipe/gender.pipe';
import { FormsModule } from '@angular/forms';
import { SearchFilmPipe } from 'src/app/core/pipe/searchFilm.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CharactersRoutes,
    FormsModule,
  ],
  declarations: [
    FilterPipe,
    FilmsPipe,
    GenderPipe,
    SearchFilmPipe,
    BodyComponent,
    CardCharactersComponent,
  ]
})
export class CharactersModule { }
