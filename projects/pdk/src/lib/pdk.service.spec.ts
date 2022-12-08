import { TestBed } from '@angular/core/testing';

import { PdkService } from './pdk.service';

describe('PdkService', () => {
  let service: PdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
