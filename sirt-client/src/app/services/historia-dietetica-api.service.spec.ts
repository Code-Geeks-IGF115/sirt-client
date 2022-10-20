import { TestBed } from '@angular/core/testing';

import { HistoriaDieteticaApiService } from './historia-dietetica-api.service';

describe('HistoriaDieteticaApiService', () => {
  let service: HistoriaDieteticaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaDieteticaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
