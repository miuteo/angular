import {Router} from "@angular/router";
import {Component} from "@angular/core";
@Component({
  selector: 'router-app',
  template:`
    <div class="page-header">
      <div class="container">
        <h1>Router Sample</h1>
        <div class="navLinks">
          <a [routerLink]="['../demo-routing/home']">Home</a>
          <a [routerLink]="['../demo-routing/about']">About</a>
          <a [routerLink]="['../demo-routing/contact']">Contact us</a>
          <a [routerLink]="['/auth/protected']">Protected</a>
        </div>
      </div>
    </div>
    
    <div id="content">
      <div class="container">
        <login-component></login-component>
        <hr>
      </div>
    </div>
  
  `
})
export class RouterDemoApp{
  constructor(private router: Router){

  }
}
