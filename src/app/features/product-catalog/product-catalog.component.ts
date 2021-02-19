import { Component, OnInit } from '@angular/core';
import {ProductCatalogService } from './product-catalog.service';
import {PriceRangeSliderService} from '../../core/widget/price-range-slider/price-range-slider.service';
import {SearchWidgetService} from '../../core/widget/search-widget/search-widget.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import {SortingService} from '../../core/widget/sorting/sorting.service';
declare var require: any
import  * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})

export class ProductCatalogComponent implements OnInit {
public visibleitemList:any;
public checkoutListItem =[];
public itemList : any;
public range: any;
public searchText:any;
private sortCriteria:string;
private unsubscribe = new Subject();
  constructor(
    private productCatalogService:ProductCatalogService,
    private priceRangeSliderService:PriceRangeSliderService,
    private searchWidgetService:SearchWidgetService,
    private sortingService:SortingService
    ) { }

  ngOnInit() {

    this.itemList = Object.assign([],require('../../../assets/static.json').Response.product);
    this.visibleitemList = Object.assign([],require('../../../assets/static.json').Response.product);
    this.productCatalogService.setItemList(this.itemList);
    let minRange= 0;
    let maxRange = _.maxBy(this.itemList, function(o) { return o.price; }).price;
    this.range = {
      value:minRange,
      highValue : maxRange
    }
    this.searchText="";
    this.priceRangeSliderService.initPriceRange().takeUntil(this.unsubscribe).subscribe((val: any) => {
      this.range = val;
      this.filterVisibleListItemBasedOnPrice();
      this.filterVisibleListItemBasedOnSearch();
    });
    this.searchWidgetService.initSearchText().takeUntil(this.unsubscribe).subscribe((val: any) => {
      this.searchText = val;
      this.filterVisibleListItemBasedOnPrice();
      this.filterVisibleListItemBasedOnSearch();
    });
    this.sortingService.initSort().takeUntil(this.unsubscribe).subscribe((val: any) => {
      this.sortCriteria = val;
      this.filterVisibleListItemBasedOnPrice();
      this.filterVisibleListItemBasedOnSearch();
      this.filterVisibleListItemBasedOnSort();
    });


  }
  addTocart(item){
    this.checkoutListItem.push(item)
    this.productCatalogService.setcartItemList(this.checkoutListItem);
    this.productCatalogService.getCartDetail(this.checkoutListItem);
  }

  private filterVisibleListItemBasedOnPrice(){
    let _self= this;
    this.visibleitemList = _.filter(this.itemList, function(o) { return (o.price >= _self.range.value && o.price <= _self.range.highValue); });
  }
  private filterVisibleListItemBasedOnSearch(){
    let _self= this;
    if(this.searchText != '' && this.searchText.length >=3){
      this.visibleitemList = _.filter(this.visibleitemList, function(o) { 
        let str = o.itemName.toLowerCase();
        let searchTxt = _self.searchText.toLowerCase();
        return (str.indexOf(searchTxt)>=0); 
      });
    }
    else{
      this.filterVisibleListItemBasedOnPrice();
    }
  }

  private filterVisibleListItemBasedOnSort(){
      if(this.sortCriteria == 'name-asc'){
       this.visibleitemList = _.orderBy(this.visibleitemList, [obj => obj.itemName.toLowerCase()], 'asc');
      }
      else if(this.sortCriteria == 'name-desc'){
        this.visibleitemList = _.orderBy(this.visibleitemList, [obj => obj.itemName.toLowerCase()], 'desc');
      }
      else if(this.sortCriteria == "price-lh"){
        this.visibleitemList=  _.orderBy(this.visibleitemList, ['price'], ['asc']);
      }
      else if(this.sortCriteria=='price-hl'){
        this.visibleitemList=  _.orderBy(this.visibleitemList, ['price'], ['desc']);
      }
      else{
        this.filterVisibleListItemBasedOnPrice();
      }
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
