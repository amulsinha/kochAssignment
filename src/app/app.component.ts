import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized, NavigationEnd } from '@angular/router';
import {Constants} from './core/constant'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  private currentPage;
  public pageTitle:string;
  public cartComponentVisibility:boolean;
  public searchComponentVisibility:boolean =true;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ){}
  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.currentPage = this.setPageName(val);
      if (val instanceof NavigationEnd) {
        if(this.currentPage == 'product-catalog'){
          this.pageTitle = Constants.pageDescription.productcatlog;
          this.cartComponentVisibility = true;
        }
        else{
          this.pageTitle = Constants.pageDescription.checkout;
          this.cartComponentVisibility = false;

        }
      }
      

    });

}
public setPageName(event) {
  let pageName = '';
  if (event.hasOwnProperty('url')) {
    const url = event['url'];
    pageName = url.replace('/', '');
  }
  return pageName;
}
}