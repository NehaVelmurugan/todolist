import { AfterViewInit, Component, NgModule, OnInit, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { userInfo } from 'os';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterViewInit {


  @ViewChild(NgForm) userForm: any;

  @ViewChildren("userInfo") userRef:any; 

  constructor() {}
  
  ngOnInit(): void {}

  ngAfterViewInit(): void {

    /*    @viewChild    */
    this.userForm.valueChanges.subscribe((value: any) => {
      console.log("Is form changed value is: " , value);
    });


    /*    @viewChildren       */ 
    // console.log(this.userRef[0])
    // console.log(this.userRef);
    
  }

}


