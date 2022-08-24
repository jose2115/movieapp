import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModulesComponent } from '../modules.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  { 
    path: '',
		component: ModulesComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: BodyComponent}
		]
   },
];

@NgModule({
	imports: [
    RouterModule.forChild(routes),
    
  ],
	exports: [RouterModule]
})

export class FilmsRoutes{}