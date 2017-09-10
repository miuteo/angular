import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DiSampleApp} from './injector/DiSampleApp';
import {MyService} from './injector/MyService';
import {ParamService} from './injector/ParamService';
import {API_URL, ApiService} from './injector/ApiService';
import {ViewPortService} from './injector/ViewPortService';
const isProduction:boolean = false;
@NgModule({
  declarations: [
    AppComponent,
    DiSampleApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:MyService,useClass:MyService},
    {provide:ParamService,useFactory: () => new ParamService(`paramService parameter`)},
    {provide:ApiService, useClass:ApiService},
    {provide:'ApiServiceAlias',useExisting:ApiService},
    ViewPortService,
    {provide:'SizeService', useFactory: (viewPortService: any):any =>{
      return viewPortService.determineService();
      },deps: [ViewPortService]
    },
    {provide:API_URL,useValue: isProduction? 'https://production-api.sample.com':'http://dev-api.sample.com'  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
