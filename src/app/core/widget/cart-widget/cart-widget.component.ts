import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constant'
@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {
public itemCount:number = 0;
@Input() cartItemLength: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.itemCount = this.cartItemLength;
  }

  cartClick(){
    this.router.navigate([Constants.pageUrl.checkout]);
  }

}
