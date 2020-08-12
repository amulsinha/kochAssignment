import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.route.navigate(['/product-catalog']);
    },3000);
  }

}
