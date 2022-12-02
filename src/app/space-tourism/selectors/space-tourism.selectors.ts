import { spaceTourismFeature } from '../reducers/space-tourism.reducer';
import { createSelector } from '@ngrx/store';
import { upperCase } from 'lodash';

export const selectCurrentDestination = createSelector(
  spaceTourismFeature.selectDestinations,
  spaceTourismFeature.selectCurrentDestinationName,
  (destinations, currentDestinationName) =>
    destinations.find(
      (destination) =>
        upperCase(destination.name) === upperCase(currentDestinationName)
    )
);

export const selectCurrentCrew = createSelector(
  spaceTourismFeature.selectCrew,
  spaceTourismFeature.selectCurrentCrewName,
  (crews, currentCrewName) =>
    crews.find((crew) => upperCase(crew.name) === upperCase(currentCrewName))
);

export const selectCurrentTechnology = createSelector(
  spaceTourismFeature.selectTechnologies,
  spaceTourismFeature.selectCurrentTechnologyName,
  (technologies, currentTechName) =>
    technologies.find(
      (technologies) =>
        upperCase(technologies.name) === upperCase(currentTechName)
    )
);
