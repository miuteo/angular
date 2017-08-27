import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector:'products-list',
  // inputs:['productList'],
  outputs:['onProductSelected'],
  templateUrl:'./product-list.component.html'
})
export class ProductsListComponent{
   @Input() productList : Product[];
  @Output() onProductSelected : EventEmitter<Product>;

   private currentProduct : Product;

   constructor(){
     this.onProductSelected = new EventEmitter();
   }
   isSelected(product :Product): boolean{
     if(!product || !this.currentProduct){
       return false;
     }
     return product.sku === this.currentProduct.sku;
   }

   clicked(product : Product) :void{
     this.currentProduct = product;
     this.onProductSelected.emit(product);
   }

}
