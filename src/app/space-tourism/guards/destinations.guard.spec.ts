import { TestBed } from '@angular/core/testing';

import { DestinationsGuard } from './destinations.guard';

describe('DestinationsGuard', () => {
  let guard: DestinationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DestinationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
