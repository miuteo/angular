import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Demo_form_sku} from "./demo_form_sku";
import {DemoFormSkuWithBuilder} from "./demo_form_sku_with_builder";
import {DemoFormWithValidation} from './demo_form_with_validation';
import {DemoFormWithValidationShorthand} from "./demo_form_with_validations_shorthand";
import {DemoFormWithCustomValidation} from "./demo_form_with_custom_validation";

@NgModule({
  declarations: [
    AppComponent,
    Demo_form_sku,
    DemoFormSkuWithBuilder,
    DemoFormWithValidation,
    DemoFormWithValidationShorthand,
    DemoFormWithCustomValidation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
