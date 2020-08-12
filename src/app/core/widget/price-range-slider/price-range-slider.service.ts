import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PriceRangeSliderService {
  public range: Subject<any> = new Subject<any>();
  constructor() { }

  initPriceRange(): Observable<string> {
    return this.range.asObservable();
  }

  setPriceRange(item) {
    this.range.next(item);
  }

  // setcartItemList(value){
  //   this.cartList = value;
  // }
  // getcartItemList(){
  //   return this.cartList;
  // }

}
