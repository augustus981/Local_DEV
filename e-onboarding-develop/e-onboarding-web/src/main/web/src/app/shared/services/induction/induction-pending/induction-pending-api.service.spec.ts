import { TestBed } from '@angular/core/testing';

import { InductionPendingApiService } from './induction-pending-api.service';

describe('InductionPendingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InductionPendingApiService = TestBed.get(InductionPendingApiService);
    expect(service).toBeTruthy();
  });
});
