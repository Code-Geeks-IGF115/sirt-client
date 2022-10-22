import { TestBed } from '@angular/core/testing';

import { NutricionApiService } from './nutricion-api.service';

describe('NutricionApiService', () => {
  let service: NutricionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutricionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
