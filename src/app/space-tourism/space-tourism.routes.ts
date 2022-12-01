import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { CrewComponent } from './crew/crew.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationsGuard } from './guards/destinations.guard';
import { SelectedDestinationGuard } from './guards/selected-destination.guard';
import { IntroComponent } from './intro/intro.component';
import { spaceTourismFeature } from './reducers/space-tourism.reducer';
import { SpaceTourismComponent } from './space-tourism.component';

export default [
  {
    path: '',
    component: SpaceTourismComponent,
    children: [
      {
        path: '',
        component: IntroComponent,
      },
      {
        path: 'destinations',
        canActivate: [DestinationsGuard],
        children: [
          { path: '', redirectTo: '/destinations/moon', pathMatch: 'full' },
          {
            path: ':planet',
            component: DestinationsComponent,
            canActivate: [SelectedDestinationGuard],
          },
        ],
        providers: [provideState(spaceTourismFeature)],
      },
      {
        path: 'crew',
        children: [
          { path: '', redirectTo: '/crew/mark', pathMatch: 'full' },
          {
            path: ':crewName',
            component: CrewComponent,
          },
        ],
      },
      {
        path: 'crew',
        component: DestinationsComponent,
      },
      {
        path: 'technology',
        component: DestinationsComponent,
      },
    ],
  },
] as Routes;
