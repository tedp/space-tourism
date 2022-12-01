import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import appRoutes from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ router: routerReducer }),
    provideRouter(appRoutes),
    provideRouterStore(),
    provideStoreDevtools(),
  ],
});
