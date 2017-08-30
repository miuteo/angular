import {Component} from "@angular/core";

@Component({
  selector: 'demo-form-sku',
  template: `<div class="ui raised segment">
    <h2 class="ui header">Demo form:SKU</h2>
    <form class="ui form"
          #f="ngForm" 
          (ngSubmit)="onSubmit(f.value)"
    >
      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               name="SKU"
               ngModel
        >
      </div>
      
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>`
})
export class Demo_form_sku{
  onSubmit(object:any){
    console.log(`object value=`,object)
  }
}
