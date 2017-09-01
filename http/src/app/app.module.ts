import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {SimpleHTTPComponent} from "./SimpleHTTPComponent";
import {
  SearchBox, SearchResultComponent, YouTubeSearchComponent,
  youTubeServiceInjectables
} from "./YouTubeSearchComponent";

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent,
    SearchResultComponent,
    YouTubeSearchComponent,
    SearchBox
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
