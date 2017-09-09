import {MyService} from './MyService';
import {Component, ReflectiveInjector} from '@angular/core';

@Component({
  selector :'di-sample-app',
  template :`
    <button (click)="invokeService()">Get Value</button>
  `
})
export class DiSampleApp{
  // myService: MyService;
  constructor(private myService: MyService,
              private myService2: MyService){
    // let injector:any = ReflectiveInjector.resolveAndCreate([MyService]);
    // this.myService = injector.get(MyService);
    // console.log(`Same instance?`,this.myService === injector.get(MyService));
    console.log(`Same instance?`,this.myService === this.myService2);
  }

  invokeService(){
    console.log(`MyService returned`,this.myService.getValue());
  }
}
