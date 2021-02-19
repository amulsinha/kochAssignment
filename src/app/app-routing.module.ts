import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingPageComponent} from './core/loading-page/loading-page.component';
import {ProductCatalogComponent} from './features/product-catalog/product-catalog.component';
import { CheckoutComponent} from './features/checkout/checkout.component';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:{
      pageGroup: 'Home'
    }
  },
  // {
  //   path: '',
  //   redirectTo: 'product-catalog',
  //   pathMatch: 'full',
  // },
  {
    path: 'order-online',
    component: ProductCatalogComponent,
    data: {
      pageGroup: 'pages'
     },
  },
  {
    path: 'product-checkout',
    component: CheckoutComponent,
    data: {
      pageGroup: 'pages'
     },
  },
  {
    path: '**',
    redirectTo: '',
    data: {
      pageName: '404',
      pageGroup: '404'
     },
  }
 

];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
