import { Routes } from '@angular/router';
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
        component: DestinationsComponent,
      },
    ],
  },
] as Routes;
