import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'demo-form-sku-with-builder',
  template:`<h2 class="ui header">Demo Form Sku with Builder</h2>
            <form [formGroup]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">
              <div class="field">
                <label for="skuInput">SKU</label>
                <input type="text"
                       id="skuInput"
                       placeholder="SKU"
                       [formControl]="myForm.controls['sku']"
                >
              </div>
              <button type="submit" class="ui button">Submit</button>
            </form>`
})
export class DemoFormSkuWithBuilder{
  myForm : FormGroup;

  constructor(fb : FormBuilder){
    this.myForm = fb.group({
      'sku' : ['',Validators.required]
    });
  }

  onSubmit(value:String):void{
    console.log('you submitted value:',value)
  }
}
