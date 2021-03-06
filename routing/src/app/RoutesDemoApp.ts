import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./demo_route/HomeComponent";
import {AboutComponent} from "./demo_route/AboutComponent";
import {ContactComponent} from "./demo_route/ContactComponent";
import {SearchComponent} from "./sportify/SearchComponent";
import {TrackComponent} from "./sportify/TrackComponent";
import {ProtectedComponent} from "./auth/ProtectedComponent";
import {LoggedInGuard} from "./auth/LoggedInGuard";
import {RouterDemoApp} from "./auth/RouterDemoApp";

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
  {path:'demo-routing',component:RoutesDemoApp},
  {path:'auth',component:RouterDemoApp},
  {path:'auth/protected',component:ProtectedComponent,canActivate:[LoggedInGuard]}
];
