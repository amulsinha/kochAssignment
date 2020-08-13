import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductCatalogComponent } from './features/product-catalog/product-catalog.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { HeaderFeaturesDescriptionComponent } from './header/header-features-description/header-features-description.component';
import { HeaderWidgetComponent } from './header/header-widget/header-widget.component';
import { LoadingPageComponent } from './core/loading-page/loading-page.component';
import { SearchWidgetComponent } from './core/widget/search-widget/search-widget.component';
import { CartWidgetComponent } from './core/widget/cart-widget/cart-widget.component';
import { PriceRangeSliderComponent } from './core/widget/price-range-slider/price-range-slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SortingComponent } from './core/widget/sorting/sorting.component';
import {ProductCatalogService } from '../app/features/product-catalog/product-catalog.service';
import {PriceRangeSliderService} from './core/widget/price-range-slider/price-range-slider.service';
import {SearchWidgetService} from './core/widget/search-widget/search-widget.service';
import {SortingService} from './core/widget/sorting/sorting.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    CheckoutComponent,
    HeaderFeaturesDescriptionComponent,
    HeaderWidgetComponent,
    LoadingPageComponent,
    SearchWidgetComponent,
    CartWidgetComponent,
    PriceRangeSliderComponent,
    SortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng5SliderModule,
  ],
  providers: [ProductCatalogService,PriceRangeSliderService,SearchWidgetService,SortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
