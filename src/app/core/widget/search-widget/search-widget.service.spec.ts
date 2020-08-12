import { TestBed, inject } from '@angular/core/testing';

import { SearchWidgetService } from './search-widget.service';

describe('SearchWidgetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchWidgetService]
    });
  });

  it('should be created', inject([SearchWidgetService], (service: SearchWidgetService) => {
    expect(service).toBeTruthy();
  }));
});
