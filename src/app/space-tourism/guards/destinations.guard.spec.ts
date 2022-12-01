import { TestBed } from '@angular/core/testing';

import { DestinationsGuard } from './destinations.guard';
import { provideMockStore } from '@ngrx/store/testing';

describe('DestinationsGuard', () => {
  let guard: DestinationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideMockStore()] });
    guard = TestBed.inject(DestinationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
