import { TestBed } from '@angular/core/testing';

import { AssociateApiService } from './associate-api.service';

describe('AssociateApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociateApiService = TestBed.get(AssociateApiService);
    expect(service).toBeTruthy();
  });
});
