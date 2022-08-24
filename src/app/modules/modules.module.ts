import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ModulesRoutes } from './modules.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ModulesRoutes,
    HttpClientModule,
    
  ],
  declarations: [ModulesComponent]
})
export class ModulesModule { }
