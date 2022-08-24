
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  {
    path: 'films',
    loadChildren: () => import('./modules/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./modules/prueba/prueba.module').then(m => m.PruebaModule)
  },
  {path:'', redirectTo:'/films', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent},
  
];

@NgModule({
	imports: [
    RouterModule.forRoot(routes),
	],
	exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }