import { Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { IntroComponent } from './intro/intro.component';
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
        children: [
          { path: '', redirectTo: '/destinations/moon', pathMatch: 'full' },
          {
            path: ':planet',
            component: DestinationsComponent,
          },
        ],
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
