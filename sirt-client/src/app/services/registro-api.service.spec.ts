import { TestBed } from '@angular/core/testing';

import { RegistroApiService } from './registro-api.service';

describe('RegistroApiService', () => {
  let service: RegistroApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
