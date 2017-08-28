import {Component} from "@angular/core";

@Component({
  selector: 'counter',
  template: `{{value}}
            <button (click)="increase()">Increase</button> 
            <button (click)="decrease()">Decrease</button>`
})
export class Counter{
    value:number;
    constructor(){
      this.value = 1;
    }

    increase(){
      this.value++;
      return false;
    }
    decrease(){
      this.value--;
      return false;
    }
}
