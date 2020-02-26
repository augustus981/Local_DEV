import { TestBed } from '@angular/core/testing';

import { ProbationPendingApiService } from './probation-pending-api.service';

describe('ProbationPendingApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProbationPendingApiService = TestBed.get(ProbationPendingApiService);
    expect(service).toBeTruthy();
  });
});
