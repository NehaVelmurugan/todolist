import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-program',
  templateUrl: './reactive-form-program.component.html',
  styleUrls: ['./reactive-form-program.component.css']
})
export class ReactiveFormProgramComponent implements OnInit {

  public changingValue:any;
  public options= [
   {key : "High", value : ["HighTemp", "HighPre", "HighValue"]},
   {key : "Medium", value: ["MediumTemp", "MediumPre", "MediumValue"]},
   {key : "Low", value: ["LowTemp", "LowPre", "LowValue"]},
  ]

  public userPattern ="[a-zA-Z]{0,30}"

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm.get('priority')?.valueChanges.subscribe((value:any)=>{
      this.changingValue = value;
    }) 

  }

  loginForm = this.fb.group({
    userName : ['',[Validators.required, Validators.pattern(this.userPattern)]],
    choice : ['', Validators.required],
    priority :['', Validators.required],
    task :['',Validators.required]
  })
}
