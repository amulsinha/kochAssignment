import { TestBed, inject } from '@angular/core/testing';

import { ProductCatalogService } from './product-catalog.service';

describe('ProductCatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCatalogService]
    });
  });

  it('should be created', inject([ProductCatalogService], (service: ProductCatalogService) => {
    expect(service).toBeTruthy();
  }));
});
