import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ModulesModule } from './modules/modules.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';
import { FilmsEffects } from './state/effects/films.effects';

@NgModule({
  declarations: [	
    AppComponent,
    NopagefoundComponent
   ],
  imports: [
    BrowserModule,
    RouterModule,
    ModulesModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FilmsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
