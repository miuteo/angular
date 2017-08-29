import {Component, Input} from '@angular/core';

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
  
  <div class="ui input">
    <input type="text" name="choice" value="{{choice}}" #choiceinput (change)="applySettings(choiceinput.value)">
  </div>
  
  <button class="ui primary button" (click)="applySettings(choiceinput.value)">Apply settings</button>
  <div style="margin-top: 20px;">
    <button class="ui primary button" (click)="nextChoice()">Next choice</button>  
  </div>
  <h4 class="ui horizontal divider header">
    ngStyle wit object property from variable
  </h4>
  <div>
    <span [ngStyle]="{color:color}">{{color}} text</span>  
  </div>
  <h4 class="ui horizontal divider header">
    style from variable
  </h4>
  <div [style.background-color]=color>
   {{color}} background
  </div>
    
    <div class="ui action input">
        <input type="text"  placeholder="Color..." name="color"  #colorinput>
         <!--<button class="ui button">Set color</button>-->
    </div>
    <div class="ui action input">
      <input type="text" name="color" placeholder="Size.." #sizeinput>
      <button class="ui button" (click)="changeSizeAndColor(colorinput.value,sizeinput.value)">Set size and color</button>
    </div>
    <div [ngStyle]="{color:color,'font-size': fontSize+'px'}">TEXT</div>
    <div clas='ngNonBindableDemo'>
      <span class="bordered">{{color}}</span>
      <span clss="pre" ngNonBindable><-This is what {{color}} rendered</span>
    </div>
  `
//we ca use key value pairs <div [ngStyle]="{color:'white','background-color':blue}">

})
export class NgSwitchExample{
  choice :number = 1;
  color : string;
  fontSize: number;
  constructor(){
    this.color=`red`;
    this.fontSize=20;
  }
  nextChoice(){
    this.choice++;

  }
  applySettings(choice : number){
    this.choice=choice;
  }
  changeSizeAndColor(color:string,fontSize:number){
    this.color=color;
    this.fontSize=fontSize;

  }
}
