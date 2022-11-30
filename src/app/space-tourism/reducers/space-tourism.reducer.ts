import { Action, createFeature, createReducer, on } from '@ngrx/store';
import * as SpaceTourismActions from '../actions/space-tourism.actions';
import { Destination } from '../services/content-service.service';

export const spaceTourismFeatureKey = 'spaceTourism';

export interface State {
  destinations: Destination[];
}

export const initialState: State = { destinations: [] };

export const spaceTourismFeature = createFeature({
  name: 'spaceTourism',
  reducer: createReducer(
    initialState,

    on(SpaceTourismActions.loadSpaceTourisms, (state) => state)
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectDestinations, // feature selector
} = spaceTourismFeature;
