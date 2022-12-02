import { createFeature, createReducer, on } from '@ngrx/store';
import * as SpaceTourismActions from '../actions/space-tourism.actions';
import {
  Destination,
  Crew,
  Technology,
} from '../services/content-service.service';

export interface State {
  destinations: Destination[];
  crew: Crew[];
  technologies: Technology[];
  currentDestinationName: string | undefined;
  currentCrewName: string | undefined;
}

export const initialState: State = {
  destinations: [],
  crew: [],
  technologies: [],
  currentDestinationName: undefined,
  currentCrewName: undefined,
};

export const spaceTourismFeature = createFeature({
  name: 'spaceTourism',
  reducer: createReducer(
    initialState,

    on(SpaceTourismActions.loadSpaceTourisms, (state, { destinations }) => ({
      ...state,
      destinations,
    })),

    on(
      SpaceTourismActions.loadCurrenDestinationName,
      (state, { destinationName }) => ({
        ...state,
        currentDestinationName: destinationName,
      })
    ),

    on(SpaceTourismActions.loadCrew, (state, { crew }) => ({
      ...state,
      crew,
    })),

    on(SpaceTourismActions.loadTechnologies, (state, { technologies }) => ({
      ...state,
      technologies,
    })),

    on(SpaceTourismActions.loadCurrenCrewName, (state, { crewName }) => ({
      ...state,
      currentCrewName: crewName,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectDestinations, // feature selector
  selectCrew, // feature selector
  selectTechnologies, // feature selector
  selectCurrentDestinationName, // feature selector
  selectCurrentCrewName, // feature selector
} = spaceTourismFeature;
