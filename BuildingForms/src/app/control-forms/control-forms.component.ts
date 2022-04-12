import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control-forms',
  templateUrl: './control-forms.component.html',
  styleUrls: ['./control-forms.component.css']
})
export class ControlFormsComponent implements OnInit {

  public required = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  submit(LoginForm : NgForm){
    console.log(LoginForm.value)
  }

}
