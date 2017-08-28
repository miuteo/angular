import {Component, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'product-row',
  // template: `<div>product row will be here soon</div>`,
  templateUrl : './product-row.component.html',
  host:{'class':'item'}
})
export class ProductRowComponent{
  @Input() product: Product;
}
