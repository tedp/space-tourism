import { createAction, props } from '@ngrx/store';
import { Destination } from '../services/content-service.service';

export const loadSpaceTourisms = createAction(
  '[SpaceTourism] Load SpaceTourisms',
  props<{ destinations: Destination[] }>()
);

export const loadCurrenDestinationName = createAction(
  '[SpaceTourism] Load CurrenDestinationName',
  props<{ destinationName: string }>()
);
