import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductCatalogService {
  public cartItem: Subject<string> = new Subject<string>();
  public cartList:any;
  public item:any;
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
}

