import {Component, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'product-row',
  template: `<div>product row will be here soon</div>`
})
export class ProductRowComponent{
  @Input() product: Product;
}
