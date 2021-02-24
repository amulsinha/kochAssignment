import { Component, OnInit } from '@angular/core';
import {ProductCatalogService} from '../product-catalog/product-catalog.service';
import  * as _ from 'lodash';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
public chekoutItemArr:any;
public total;
public chkoutBtnDisabled:boolean = false;
private cartItem;
private unsubscribe = new Subject();

  constructor(private productCatalogService:ProductCatalogService) { }

  ngOnInit() {
    this.cartItem= this.productCatalogService.getcartItemList();
    this.itemListGrouping();
 
   
  }

  private itemListGrouping(){
    let groupedItemList = _.groupBy(this.cartItem,'itemId');
    this.chekoutItemArr = Object.keys(groupedItemList).map(function (key) { 
      return {'itemId': key , 'itemObj': groupedItemList[key][0],'quantity':groupedItemList[key].length}; 
      });
  }
  increment(index,id){
    if(this.chekoutItemArr[index].quantity <10){
      this.chekoutItemArr[index].quantity++;
    }
    // console.log("this.chekoutItemArr[index]",this.chekoutItemArr[index]);
    // console.log('this.chekoutItemArr[index].itemObj',this.chekoutItemArr[index].itemObj);
    // console.log("this.cartItem",this.cartItem);
    // console.log("index",index);
    // console.log("id",id);
    // for(let i=1 ; i <= this.chekoutItemArr[index].quantity;i++){
    //   this.productCatalogService.setcartItemList(this.chekoutItemArr[index].itemObj);
    //   this.productCatalogService.getCartDetail(this.chekoutItemArr[index].itemObj);
    // }
    // this.productCatalogService.addTocart(this.chekoutItemArr[index].itemObj);
    // console.log('getcartItemList',this.productCatalogService.getcartItemList());
  
  }
  decrement(index){
    if(this.chekoutItemArr[index].quantity > 0){
      this.chekoutItemArr[index].quantity--;
    }
    // this.productCatalogService.removeTocart(this.chekoutItemArr[index].itemObj);

  }
  getTotal(){
    let _self= this;
    this.total = 0;
    _.forEach(this.chekoutItemArr, function(value) {
      _self.total= _self.total +(value.quantity * value.itemObj.price);
    });
    if( _self.total == 0){
      this.chkoutBtnDisabled= true;
    }
    else{
      this.chkoutBtnDisabled= false;
    }
    return this.total;
  }
  getSubtotal(){
    if(this.total == 0){
      this.chkoutBtnDisabled= true;
    }

    return (this.total);
  }
  sendResponse(){
    console.log('this.checkout',this.chekoutItemArr);
  }
}
