import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilmsRoutes } from './films.routing';
import { BodyComponent } from './components/body/body.component';
import { CardFilmsComponent } from './components/card-films/card-films.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FilmsRoutes,
  ],
  declarations: [
    BodyComponent,
    CardFilmsComponent
  ]
})
export class FilmsModule { }
