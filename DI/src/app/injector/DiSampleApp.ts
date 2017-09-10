import {MyService} from './MyService';
import {Component, Inject, ReflectiveInjector} from '@angular/core';
import {ParamService} from './ParamService';
import {ApiService} from './ApiService';
import {ViewPortService} from './ViewPortService';

@Component({
  selector :'di-sample-app',
  template :`
    <button (click)="invokeService()">Get Value</button>
  `
})
export class DiSampleApp{
  // myService: MyService;
  private apiService:ApiService;
  private apiService2: ApiService;
  private sizeService: any;
  constructor(private myService: MyService,
              private myService2: MyService,
              private paramService: ParamService,
              @Inject(ApiService)apiService: ApiService,
              @Inject('ApiServiceAlias') apiService2:ApiService,
              @Inject('SizeService')sizeService:any){
    // let injector:any = ReflectiveInjector.resolveAndCreate([MyService]);
    // this.myService = injector.get(MyService);
    // console.log(`Same instance?`,this.myService === injector.get(MyService));
    console.log(`Same instance?`,this.myService === this.myService2);
    this.apiService = apiService;
    this.apiService2 = apiService2;
    this.sizeService = sizeService;
    console.log(`Same ApiService instance?`,this.apiService === this.apiService2);
    console.log(Math.max(document.documentElement.clientWidth,window.innerWidth||0));

  }

  invokeService(){
    console.log(`MyService returned`,this.myService.getValue());
    console.log(`ParamService returned`,this.paramService.getValue());
    this.apiService.get();
    this.sizeService.run();
  }
  useInjectors():any{
    let injector:any = ReflectiveInjector.resolveAndCreate([
      ViewPortService,
      {provide:'OtherSizeService',useFactory:(viewPortService:ViewPortService)=>{
        return viewPortService.determineService();
              },deps:[ViewPortService]
    }
    ]);
    let sizeService:any = injector.get('OtherSizeService');
    sizeService.run();
  }
}
