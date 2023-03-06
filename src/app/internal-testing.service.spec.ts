import { TestBed } from '@angular/core/testing';

import { InternalTestingService } from './internal-testing.service';

describe('InternalTestingService', () => {
  let service: InternalTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
