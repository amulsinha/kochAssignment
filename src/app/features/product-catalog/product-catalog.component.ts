import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'
// import { Location, ViewportScroller } from '@angular/common';
import { ProductCatalogService } from './product-catalog.service';
import { PriceRangeSliderService } from '../../core/widget/price-range-slider/price-range-slider.service';
import { SearchWidgetService } from '../../core/widget/search-widget/search-widget.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SortingService } from '../../core/widget/sorting/sorting.service';

declare var require: any
import * as _ from 'lodash';
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
  public kebabList: any;
  public tandooriList: any;
  public checkoutListItem = [];
  public itemList: any;
  public range: any;
  public searchText: any;
  private sortCriteria: string;
  private unsubscribe = new Subject();
  private prevSelectedItem = [];

  constructor(
    private productCatalogService: ProductCatalogService,
    private priceRangeSliderService: PriceRangeSliderService,
    private searchWidgetService: SearchWidgetService,
    private sortingService: SortingService
  ) { }
  ngOnInit() {
    // this.productCatalogService.setcartItemList(this.checkoutListItem);
    // this.productCatalogService.getCartDetail(this.checkoutListItem);
    // console.log('this.productCatalogService.getCartDetail(this.checkoutListItem)',this.productCatalogService.getCartDetail(this.checkoutListItem));
    this.itemList = Object.assign([], require('../../../assets/static.json').Response.kebab);
    this.kebabList = Object.assign([], require('../../../assets/static.json').Response.kebab);
    this.tandooriList = Object.assign([], require('../../../assets/static.json').Response.tandoori);
    this.itemList = this.itemList.concat(this.tandooriList);
    this.productCatalogService.setItemList(this.itemList);
    let minRange = 0;
    let maxRange = _.maxBy(this.itemList, function (o) { return o.price; }).price;
    this.range = {
      value: minRange,
      highValue: maxRange
    }
    this.searchText = "";
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
    this.prevSelectedItem = this.productCatalogService.getcartItemList();
    // console.log('this.prevSelectedItem',this.prevSelectedItem);
}
  addTocart(item) {
    if (this.prevSelectedItem && this.prevSelectedItem) {
      this.prevSelectedItem.push(item);
      this.productCatalogService.setcartItemList(this.prevSelectedItem);
      this.productCatalogService.getCartDetail(this.prevSelectedItem);
    }
    else {
      this.checkoutListItem.push(item);
      console.log('item',item);
      this.productCatalogService.setcartItemList(this.checkoutListItem);
      this.productCatalogService.getCartDetail(this.checkoutListItem);
    }
   
    
  }
   removeFrmcart(item){
    // this.itemX = item; 
    // console.log('this.this.cartList',this.cartList);
    //   if (this.cartList && this.cartList.length) {
    //       let id= item.itemId
    //     this.cartList.splice(this.cartList.findIndex(function(i){
    //       return i.itemId === id;
    //   }), 1);
    //      console.log('this.cartList',this.cartList);
    //      this.setcartItemList(this.cartList);
    //      this.getCartDetail(this.cartList);
    //   }
    //   else {
    //     this.checkoutListItem.push(item);
    //     console.log('item',item);
    //     this.setcartItemList(this.checkoutListItem);
    //     this.getCartDetail(this.checkoutListItem);
    //   }
    this.productCatalogService.removeTocart(item);

     
  }

  private filterVisibleListItemBasedOnPrice() {
    let _self = this;
    this.kebabList = _.filter(this.itemList, function (o) { return (o.price >= _self.range.value && o.price <= _self.range.highValue); });
  }
  private filterVisibleListItemBasedOnSearch() {
    let _self = this;
    if (this.searchText != '' && this.searchText.length >= 3) {
      this.kebabList = _.filter(this.kebabList, function (o) {
        let str = o.itemName.toLowerCase();
        let searchTxt = _self.searchText.toLowerCase();
        return (str.indexOf(searchTxt) >= 0);
      });
    }
    else {
      this.filterVisibleListItemBasedOnPrice();
    }
  }

  private filterVisibleListItemBasedOnSort() {
    if (this.sortCriteria == 'name-asc') {
      this.kebabList = _.orderBy(this.kebabList, [obj => obj.itemName.toLowerCase()], 'asc');
      this.tandooriList = _.orderBy(this.tandooriList, [obj => obj.itemName.toLowerCase()], 'asc');
    }
    else if (this.sortCriteria == 'name-desc') {
      this.kebabList = _.orderBy(this.kebabList, [obj => obj.itemName.toLowerCase()], 'desc');
      this.tandooriList = _.orderBy(this.tandooriList, [obj => obj.itemName.toLowerCase()], 'desc');
    }
    else if (this.sortCriteria == "price-lh") {
      this.kebabList = _.orderBy(this.kebabList, ['price'], ['asc']);
      this.tandooriList = _.orderBy(this.tandooriList, ['price'], ['asc']);
    }
    else if (this.sortCriteria == 'price-hl') {
      this.kebabList = _.orderBy(this.kebabList, ['price'], ['desc']);
      this.tandooriList = _.orderBy(this.tandooriList, ['price'], ['desc']);
    }
    else {
      this.filterVisibleListItemBasedOnPrice();
    }
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
