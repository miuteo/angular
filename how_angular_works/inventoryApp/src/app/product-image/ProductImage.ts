
import {Product} from "../product.model";
import {Component, Input} from "@angular/core";
@Component({
  selector:'product-image',
  host : {'class' : 'ui'+' small image'},
  template : `<img class="product-image" [src]="product.imageUrl">`
})
export class ProductImage{
  @Input() product : Product;
}
