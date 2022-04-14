import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-program',
  templateUrl: './reactive-form-program.component.html',
  styleUrls: ['./reactive-form-program.component.css']
})
export class ReactiveFormProgramComponent implements OnInit {

  public changingValue:any;
  public options =["High", "Medium", "Low"]
  public optionsValue = [
   {key : "High", value : ["HighTemp", "HighPre", "HighValue"]},
   {key : "Medium", value: ["MediumTemp", "MediumPre", "MediumValue"]},
   {key : "Low", value: ["LowTemp", "LowPre", "LowValue"]},
  ]

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm.get('priority')?.valueChanges.subscribe((value:any)=>{
      this.changingValue = value;
    }) 

  }

  loginForm = this.fb.group({
    userName : ['',Validators.required],
    choice : ['', Validators.required],
    priority :['', Validators.required]
  })

}
