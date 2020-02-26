import { TestBed } from '@angular/core/testing';

import { ProbationTaskApiService } from './probation-task-api.service';

describe('ProbationTaskApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProbationTaskApiService = TestBed.get(ProbationTaskApiService);
    expect(service).toBeTruthy();
  });
});
