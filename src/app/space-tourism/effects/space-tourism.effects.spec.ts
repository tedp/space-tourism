import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpaceTourismEffects } from './space-tourism.effects';

describe('SpaceTourismEffects', () => {
  let actions$: Observable<any>;
  let effects: SpaceTourismEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpaceTourismEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SpaceTourismEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
