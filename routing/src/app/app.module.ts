import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';
import { AppComponent } from './app.component';
import {HomeComponent} from "./HomeComponent";
import {AboutComponent} from "./AboutComponent";
import {ContactComponent} from "./ContactComponent";
import {RouterModule} from "@angular/router";
import {RoutesDemoApp} from "./RoutesDemoApp";
import {routes} from "./RoutesDemoApp";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {SearchComponent} from "./sportify/SearchComponent";
import {SpotifyService} from "./sportify/spotifyService";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoutesDemoApp,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    Http,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF,useValue: '/'},
    SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
