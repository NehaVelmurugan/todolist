import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registrationForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl(''), 
  });
  constructor() { }

  ngOnInit(): void {
      console.log(this.registrationForm.value);
      this.registrationForm.get('userName')?.valueChanges.subscribe((value)=>{
        console.log(value);     
      })
  }
  onSubmit(){
    console.log(this.registrationForm.value)
  }
}
//“Same Origin Policy
// plethora 