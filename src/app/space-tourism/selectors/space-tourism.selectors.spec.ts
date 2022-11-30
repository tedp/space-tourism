import * as fromSpaceTourism from '../reducers/space-tourism.reducer';
import { selectSpaceTourismState } from './space-tourism.selectors';

describe('SpaceTourism Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSpaceTourismState({
      [fromSpaceTourism.spaceTourismFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
