import { TestBed } from '@angular/core/testing';

import { ProceedGuard } from './proceed.guard';

describe('ProceedGuard', () => {
  let guard: ProceedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProceedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
