import { TestBed, inject } from '@angular/core/testing';

import { FxRatesService } from './fx-rates.service';

describe('FxRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FxRatesService]
    });
  });

  it('should be created', inject([FxRatesService], (service: FxRatesService) => {
    expect(service).toBeTruthy();
  }));
});
