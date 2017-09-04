import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from "./HomeComponent";
import {AboutComponent} from "./AboutComponent";
import {ContactComponent} from "./ContactComponent";
import {RouterModule} from "@angular/router";
import {RoutesDemoApp} from "./RoutesDemoApp";
import {routes} from "./RoutesDemoApp";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoutesDemoApp
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF,useValue: '/'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
