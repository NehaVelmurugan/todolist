import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'AngularProgram';
  // public nameOfChild:any;

  public name="John";
  public navMessage:any;
  
  public navList = [
    {name : "Home", message : "Welcome to Home Page"},
    {name : "About", message : "About is Work"},
    {name : "contact", message : "Contact is Saved"},
    {name : "Login", message : "Login is Successfully"}
  ];
  constructor(){
  }
}
