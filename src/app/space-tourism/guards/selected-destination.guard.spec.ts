import { TestBed } from '@angular/core/testing';

import { SelectedDestinationGuard } from './selected-destination.guard';
import { provideMockStore } from '@ngrx/store/testing';

describe('SelectedDestinationGuard', () => {
  let guard: SelectedDestinationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideMockStore()] });
    guard = TestBed.inject(SelectedDestinationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
