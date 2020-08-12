import { TestBed, inject } from '@angular/core/testing';

import { CartWidgetService } from './cart-widget.service';

describe('CartWidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartWidgetService]
    });
  });

  it('should be created', inject([CartWidgetService], (service: CartWidgetService) => {
    expect(service).toBeTruthy();
  }));
});
