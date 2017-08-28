import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector:'products-list',
  // inputs:['productList'],
  // outputs:['onProductSelected'],
  templateUrl:'./product-list.component.html'
})
export class ProductsListComponent{

  @Input() productList : Product[];
  @Output() onProductSelected : EventEmitter<Product>;
  productsSelected : Product[] = [];

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
    alreadySelected(product :Product): boolean{

    return this.productsSelected.includes(product);
  }

   clicked(product : Product) :void{
     this.currentProduct = product;
     this.onProductSelected.emit(product);
     if(!this.productsSelected.includes(product)){
       this.productsSelected.push(product);
     }
   }

}
