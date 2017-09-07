import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./HomeComponent";
import {AboutComponent} from "./AboutComponent";
import {ContactComponent} from "./ContactComponent";
import {SearchComponent} from "./sportify/SearchComponent";
import {TrackComponent} from "./sportify/TrackComponent";

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


  </div>
  <router-outlet></router-outlet>
  `
})
export class RoutesDemoApp{

}

export const routes: Routes=[
  // {path:'',redirectTo:'search',pathMatch:'full' },
  {path: 'demo-routing/home',component: HomeComponent},
  {path: 'demo-routing/about',component:AboutComponent},
  {path: 'demo-routing/contact', component: ContactComponent},
  {path: 'demo-routing/contactus',redirectTo:'demo-routing/contact'},
  {path: 'search',component:SearchComponent},
  {path:'tracks/:id',component:TrackComponent},
  {path:'demo-routing',component:RoutesDemoApp}
];
