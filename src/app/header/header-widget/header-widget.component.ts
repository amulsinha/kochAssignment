import { Component, OnInit,Input } from '@angular/core';
import {ProductCatalogService } from '../../features/product-catalog/product-catalog.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-header-widget',
  templateUrl: './header-widget.component.html',
  styleUrls: ['./header-widget.component.scss']
})
export class HeaderWidgetComponent implements OnInit {

  @Input() cartComponentVisibility: boolean;
  @Input() searchComponentVisibility: boolean;

  private unsubscribe = new Subject();
  public cartitem = 0 ;

  constructor(private productCatalogService:ProductCatalogService) { }

  ngOnInit() {
    this.productCatalogService.initCart().takeUntil(this.unsubscribe).subscribe((val: string) => {
      this.cartitem = val.length;
    });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
