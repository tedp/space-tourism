import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadChildren: () => import('./space-tourism/space-tourism.routes'),
  },
  {
    path: 'design-system',
    loadChildren: () => import('pdk').then((m) => m.DesignSystemRoutingModule),
  },
] as Routes;
