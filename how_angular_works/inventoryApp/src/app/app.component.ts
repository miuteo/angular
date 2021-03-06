import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<div class="inventory-app">
  //           <h1>{{products[0].name}}</h1>
  //           <span>{{products[0].sku}}</span>
  //                </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  var = 'A';
  products :Product[];
  constructor(){
      this.products = [
        new Product(
          'MYSHOES',
          'Black Running Shoes',
          '/assets/images/products/black-shoes.jpg',
          ['Men', 'Shoes', 'Running Shoes'],
          109.99),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/assets/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99)
      ];
  }

  productWasSelected(product: Product):void{
    console.log(`Product clicked`,product);
  }
}
