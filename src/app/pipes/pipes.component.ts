import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
   
  public title ="Pipe are Created";
  public name =" This is jaya";
  public personalDetails ={
    "firstName" : "John",
    "lastName" : "steven"
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
