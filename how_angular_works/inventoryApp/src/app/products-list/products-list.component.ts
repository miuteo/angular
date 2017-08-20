import {Component} from '@angular/core';

@Component({
  selector:'products-list',
  inputs:['productList'],
  outputs:['onProductSelected'],
  templateUrl:'./product-list.component.html'
})
class ProductsListComponent{

}
