
import {AuthService} from "./AuthService";
import {Component} from "@angular/core";
@Component({
  selector:`login-component`,
  template:`
    <form class="form=inline" *ngIf="!authService.getUser()">
      <div class="form-group">
        <label for="username">User:</label>
        <input class="form-control" name="username" #username>
      </div>
      
      <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" name="password" #password>
      </div>
      
      <a class="btn btn-defaul" (click)="login(username.value,password.value)">Submit</a>
    </form>
    <div class="well" *ngIf="authService.isLoggedIn()">
      Logged in as <b>{{authService.getUser()}}</b>
      <a href (click)="logout()">Log out</a>
    </div>
    
    <div class="alert alert-danger" role="alert" *ngIf="message">
      {{message}}
    </div>
  `
})
export class LoginComponent{
  message: string;

  constructor(public authService:AuthService){
    this.message='';
  }

  login(username:string,password:string):boolean{
    this.message='';
    if(!this.authService.login(username,password)){
      this.message='Incorrect cedentials.';
      setTimeout(function(){
        this.message='';
      }.bind(this),2500);
    }
    return false;
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }
}
