import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductsListComponent} from './products-list/products-list.component'
import {ProductRowComponent} from './product-row/product-row.component';
import {Counter} from "./component-outputs/counter.model";
import {SingleComponent} from "./component-outputs/single-component";
import {ClubComponent} from "./component-outputs/club-component";
import {ProductImage} from "./product-image/ProductImage";
import {ProductDepartment} from "./product-department/ProductDepartment";
import {PriceDisplay} from "./price-display/price-display";
import {NgSwitchExample} from './ng_switch';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    Counter,
    SingleComponent,
    ClubComponent,
    ProductImage,
    ProductDepartment,
    PriceDisplay,
    NgSwitchExample
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
