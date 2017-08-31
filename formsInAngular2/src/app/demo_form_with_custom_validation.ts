import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector : 'demo-form-with-custom-validation',
  template : `<div class="ui raised segment">
    <h2 class="ui header">Demo form with custom validation </h2>
    <form class="ui form" [formGroup]="myForm"
        (ngSubmit)="onSubmit(myForm.value)">
      <div class="field" [class.error]="!myForm.controls['sku'].valid && myForm.touched">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               name="SKU"
               [formControl]="myForm.controls['sku']"
        >
        <div *ngIf="!myForm.controls['sku'].valid" class="ui error message">SKU is invalid</div>
        <div *ngIf="myForm.controls['sku'].hasError('required') && myForm.controls['sku'].touched">SKU is required</div>
        <div *ngIf="myForm.controls['sku'].hasError('min') && myForm.controls['sku'].touched">Min value is 10</div>
        <div *ngIf="myForm.controls['sku'].hasError('invalidSku') && myForm.controls['sku'].touched">Values should begin with 123</div>
        <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>
      </div>
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>`
})
export class DemoFormWithCustomValidation{
  myForm : FormGroup;

  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      'sku':['',Validators.compose([Validators.required,Validators.min(10),this.skuValidator])]
    });
  }
  onSubmit(object:any){
    console.log(`object value=`,object);
  }

  skuValidator(control: FormControl):{[s:string]:boolean}{
    console.log(control.value+!control.value.match(/^123/));
    if(!control.value.match(/^123/))
      return {invalidSku: true};
  }

}
