import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  public topics=['Angular', 'React', 'Vue']
  constructor() { }

  ngOnInit(): void {
  }
  submit(value:any){
    console.log(value);
  }

}
