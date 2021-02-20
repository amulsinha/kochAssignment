import { Component, OnInit } from '@angular/core';
import {ProductCatalogService} from '../product-catalog/product-catalog.service';
import  * as _ from 'lodash';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
public chekoutItemArr:any;
public total;

  constructor(private productCatalogService:ProductCatalogService) { }

  ngOnInit() {
    let cartItem= this.productCatalogService.getcartItemList();
    let groupedItemList = _.groupBy(cartItem,'itemId');
    this.chekoutItemArr = Object.keys(groupedItemList).map(function (key) { 
      return {'itemId': key , 'itemObj': groupedItemList[key][0],'quantity':groupedItemList[key].length}; 
      });
  }
  increment(index){
    if(this.chekoutItemArr[index].quantity <10){
      this.chekoutItemArr[index].quantity++;
    }
  }
  decrement(index){
    if(this.chekoutItemArr[index].quantity > 0){
      this.chekoutItemArr[index].quantity--;
    }
  }
  getTotal(){
    let _self= this;
    this.total = 0;
    _.forEach(this.chekoutItemArr, function(value) {
      _self.total= _self.total +(value.quantity * value.itemObj.price);
    });
    return this.total;
  }
  getSubtotal(){
    return (this.total - (this.total*10/100));
  }
}
