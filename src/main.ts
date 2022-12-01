import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import appRoutes from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule,

      // configure NgRx modules
      StoreModule.forRoot({
        router: routerReducer,
      }),
      StoreDevtoolsModule.instrument(),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([])
    ),
    provideRouter(appRoutes),
  ],
});
