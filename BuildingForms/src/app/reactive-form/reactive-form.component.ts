import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
/*    Reactive Form using FormControl and FormGroup
  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  })
*/
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    userName : ['',Validators.required],
    password : ['',Validators.required],
    confirmPassword :['', Validators.required]
  }, {validator:passwordValidator})

  get userName():any{
    return this.loginForm.get('userName')
  }

  login(Values:any){
    console.log(Values);
  }
  

}


