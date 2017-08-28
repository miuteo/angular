import {Component} from '@angular/core';

@Component({
  selector : 'ngSwichExample',
  template : `<h4 class="ui horizontal divider header">
    Current choice is {{choice}}
  </h4>
  
  <div class="ui raised segment">
    <ul [ngSwitch]="choice">
      <li *ngSwitchCase="1">First choice</li>
      <li *ngSwitchCase="2">Second choice</li>
      <li *ngSwitchCase="3">Third choice</li>
      <li *ngSwitchCase="4">Fourth choice</li>
      <li *ngSwitchCase="5">Fifth choice</li>
      <li *ngSwitchDefault>Default choice</li>
    </ul>
  </div>
  <div style="margin-top: 20px;">
    <button class="ui primary button" (click)="nextChoice()">Next choice</button>  
  </div>
  `
})
export class NgSwitchExample{
  choice :number = 1;
  nextChoice(){
    this.choice++;
  }
}