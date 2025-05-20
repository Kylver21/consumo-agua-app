import { TestBed } from '@angular/core/testing';

import { ConsumoAguaService } from './consumo-agua.service';

describe('ConsumoAguaService', () => {
  let service: ConsumoAguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoAguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
