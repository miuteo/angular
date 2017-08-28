import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'single-component',
  // outputs: ['putRingOnIt:putRingOIt'],
  template: `<button (click)="liked()">Like it?</button>`
})
export class SingleComponent{
  @Output() putRingOnIt: EventEmitter<String>;
  constructor(){
    this.putRingOnIt = new EventEmitter();
  }

  liked():void{
    this.putRingOnIt.emit("oh oh oh");
  }
}
