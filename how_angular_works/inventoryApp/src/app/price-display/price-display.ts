import {Component, Input} from "@angular/core";

@Component({
  selector : 'price-display',
  template :'<div class="prince-display">\${{price}}</div>'
})
export class PriceDisplay{
  @Input() price : number;
}
