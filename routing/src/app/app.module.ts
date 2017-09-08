import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {HomeComponent} from "./demo_route/HomeComponent";
import {AboutComponent} from "./demo_route/AboutComponent";
import {ContactComponent} from "./demo_route/ContactComponent";
import {RouterModule} from "@angular/router";
import {RoutesDemoApp} from "./RoutesDemoApp";
import {routes} from "./RoutesDemoApp";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {SearchComponent} from "./sportify/SearchComponent";
import {sporifyServiceInjectables, SpotifyService} from './sportify/SpotifyService';
import {TrackComponent} from "./sportify/TrackComponent";
import {SportifyComponent} from "./sportify/SportifyComponent";
import {LoginComponent} from "./auth/LoginComponent";
import {ProtectedComponent} from "./auth/ProtectedComponent";
import {LoggedInGuard} from "./auth/LoggedInGuard";
import {AUTH_PROVIDERS} from "./auth/AuthService";
import {RouterDemoApp} from "./auth/RouterDemoApp";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoutesDemoApp,
    SearchComponent,
    TrackComponent,
    SportifyComponent,
    LoginComponent,
    ProtectedComponent,
    RouterDemoApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: APP_BASE_HREF,useValue: '/'},
    sporifyServiceInjectables,
    AUTH_PROVIDERS,
    LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
