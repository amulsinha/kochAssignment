import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import {ProductCatalogService } from '../../../features/product-catalog/product-catalog.service';
import  * as _ from 'lodash';
import {PriceRangeSliderService} from '../price-range-slider/price-range-slider.service';



@Component({
  selector: 'app-price-range-slider',
  templateUrl: './price-range-slider.component.html',
  styleUrls: ['./price-range-slider.component.scss']
})
export class PriceRangeSliderComponent implements OnInit {
  value: number = 0;
  highValue: number = 0;
  options: Options = {
    floor: 0,
    ceil: 60
  };
  constructor(private productCatalogService:ProductCatalogService,
    private priceRangeSliderService:PriceRangeSliderService
    ) { }

  ngOnInit() {
    let item = this.productCatalogService.getItemList();
   
    let max = _.maxBy(item, function(o) { return o.price; });
    this.highValue =  max.price;
    this.options.ceil = max.price;
  }
  onUserChange(event): void {
    this.priceRangeSliderService.setPriceRange(event);
  }
}
