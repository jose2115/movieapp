
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModulesComponent } from '../modules.component';
import { PruebaComponent } from './prueba.component';

const routes: Routes = [
  { 
    path: '',
		component: ModulesComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: PruebaComponent}
		]
   },
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
    
  ],
	exports: [RouterModule]
})

export class PruebaRoutes{}