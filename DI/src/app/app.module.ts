import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DiSampleApp} from './injector/DiSampleApp';
import {MyService} from './injector/MyService';

@NgModule({
  declarations: [
    AppComponent,
    DiSampleApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:MyService,useClass:MyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
