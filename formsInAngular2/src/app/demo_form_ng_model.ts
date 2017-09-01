import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Component} from "@angular/core";
@Component({
  selector: 'demo-form-ng-model',
  template: `<label for="productNameInput">Product Name</label>
              <input type="text"
                id="productNameInput"
                placeholder="Product name"
                [formControl]="myForm.get('productName')"
                [(ngModel)]="productName">
                <div class="ui info message">The product name is: {{productName}}</div>`

})
export class DemoFormNgModel{
  myForm : FormGroup;
  productName: string;

  constructor(fb : FormBuilder){
      this.myForm = fb.group({
        'productName':['',Validators.required]
      });
  }

  onSubmit(value:String){
    console.log(`you submited:`, value);
  }
}
