import { TestBed, inject } from '@angular/core/testing';

import { PriceRangeSliderService } from './price-range-slider.service';

describe('PriceRangeSliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceRangeSliderService]
    });
  });

  it('should be created', inject([PriceRangeSliderService], (service: PriceRangeSliderService) => {
    expect(service).toBeTruthy();
  }));
});
