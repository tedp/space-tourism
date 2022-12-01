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
