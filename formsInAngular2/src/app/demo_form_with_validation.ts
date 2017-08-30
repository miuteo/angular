import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector : 'demo-form-with-validation',
  template : `<div class="ui raised segment">
    <h2 class="ui header">Demo form with validation</h2>
    <form class="ui form" [formGroup]="myForm"
        (ngSubmit)="onSubmit(myForm.value)">
      <div class="field" [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               name="SKU"
               [formControl]="myForm.controls['sku']"
        >
        <div *ngIf="!sku.valid" class="ui error message">SKU is invalid</div>
        <div *ngIf="sku.hasError('required') && sku.touched">SKU is required</div>
        <div *ngIf="sku.hasError('min') && sku.touched">Min value is 10</div>
        <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>
      </div>
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>`
})
export class DemoFormWithValidation{
  myForm : FormGroup;
  sku: AbstractControl;

  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      'sku':['',[Validators.required,Validators.min(10)]]
    });
    this.sku = this.myForm.controls['sku'];
  }
  onSubmit(object:any){
    console.log(`object value=`,object);
  }

}
