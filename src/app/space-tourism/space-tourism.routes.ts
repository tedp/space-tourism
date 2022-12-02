import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';

import { CrewComponent } from './crew/crew.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { CrewsGuard } from './guards/crews.guard';
import { DestinationsGuard } from './guards/destinations.guard';
import { SelectedCrewGuard } from './guards/selected-crew.guard';
import { SelectedDestinationGuard } from './guards/selected-destination.guard';
import { SelectedTechnologyGuard } from './guards/selected-technology.guard';
import { TechnologyGuard } from './guards/technologies.guard';
import { IntroComponent } from './intro/intro.component';
import { spaceTourismFeature } from './reducers/space-tourism.reducer';
import { SpaceTourismComponent } from './space-tourism.component';
import { TechnologyComponent } from './technology/technology.component';

export default [
  {
    path: '',
    component: SpaceTourismComponent,
    providers: [provideState(spaceTourismFeature)],
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
      },
      {
        path: 'crew',
        canActivate: [CrewsGuard],
        children: [
          { path: '', redirectTo: '/crew/douglas-hurley', pathMatch: 'full' },
          {
            path: ':crewName',
            canActivate: [SelectedCrewGuard],
            component: CrewComponent,
          },
        ],
      },
      {
        path: 'technology',
        canActivate: [TechnologyGuard],
        children: [
          {
            path: '',
            redirectTo: '/technology/launch-vehicle',
            pathMatch: 'full',
          },
          {
            path: ':techName',
            canActivate: [SelectedTechnologyGuard],
            component: TechnologyComponent,
          },
        ],
      },
    ],
  },
] as Routes;
