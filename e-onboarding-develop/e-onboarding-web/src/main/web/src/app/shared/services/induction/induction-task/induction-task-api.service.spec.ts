import { TestBed } from '@angular/core/testing';

import { InductionTaskApiService } from './induction-task-api.service';

describe('InductionTaskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InductionTaskApiService = TestBed.get(InductionTaskApiService);
    expect(service).toBeTruthy();
  });
});
