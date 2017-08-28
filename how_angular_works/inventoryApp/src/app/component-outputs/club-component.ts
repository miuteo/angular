import {Component} from "@angular/core";
@Component({
  selector: 'club',
  template:`
    <div>
      <single-component (putRingOnIt)="ringWasSelected($event)"></single-component>
    </div>`
})
export class ClubComponent{
  ringWasSelected(message : string){
    console.log(`Put your hands up: ${message}`);
  }
}
