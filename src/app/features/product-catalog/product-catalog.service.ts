import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

@Injectable()
export class ProductCatalogService {
  public cartItem: Subject<string> = new Subject<string>();
  public cartList:any;
  public item:any;
  // public prevSelectedItem:[];
  // public checkoutListItem = [];
  public itemX:any =  [];
  constructor() { }

  initCart(): Observable<string> {
    return this.cartItem.asObservable();
  }

  getCartDetail(item) {
    this.cartItem.next(item);
  }

  setcartItemList(value){
    this.cartList = value;
  }
  getcartItemList(){
    
    return this.cartList;
  }

  setItemList(value){
    this.item =  value;
  }
  getItemList(){
    return this.item;
  }
  // addTocart(item){ 
  //   this.prevSelectedItem = this.cartList;
  //   console.log('item',item)
  //     if (this.cartList && this.cartList.length) {
  //       if(item){
          
  //       }
          
  //     }
  //     else {
  //       this.checkoutListItem.push(item);
  //       console.log('item',item);
  //       this.setcartItemList(this.checkoutListItem);
  //       this.getCartDetail(this.checkoutListItem);
  //     }

     
  // }
  removeTocart(item){
    console.log('this.this.cartList',this.cartList);
      if (this.cartList && this.cartList.length) {
          let id= item.itemId
        this.cartList.splice(this.cartList.findIndex(function(i){
          return i.itemId === id;
      }), 1);
         console.log('this.cartList',this.cartList);
         this.setcartItemList(this.cartList);
         this.getCartDetail(this.cartList);
      }
     
  }
}

