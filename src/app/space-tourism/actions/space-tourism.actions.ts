import { createAction, props } from '@ngrx/store';
import { Destination, Crew } from '../services/content-service.service';

export const loadSpaceTourisms = createAction(
  '[SpaceTourism] Load SpaceTourisms',
  props<{ destinations: Destination[] }>()
);

export const loadCrew = createAction(
  '[SpaceTourism] Load Crews',
  props<{ crew: Crew[] }>()
);

export const loadCurrenDestinationName = createAction(
  '[SpaceTourism] Load CurrenDestinationName',
  props<{ destinationName: string }>()
);

export const loadCurrenCrewName = createAction(
  '[SpaceTourism] Load CurrenCrewName',
  props<{ crewName: string }>()
);
