import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./HomeComponent";
import {AboutComponent} from "./AboutComponent";
import {ContactComponent} from "./ContactComponent";

@Component({
  selector: 'router-app',
  template: `<div>
    <nav>
      <a>Navigation</a>
      <ul>
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['about']">About</a></li>
        <li><a [routerLink]="['contact']">Contact Us</a></li>
      </ul>
    </nav>

    <!--<router-outlet></router-outlet>-->
  </div>
  <router-outlet></router-outlet>
  `
})
export class RoutesDemoApp{

}

export const routes: Routes=[
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path: 'home',component: HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus',redirectTo:'contact'}
];
