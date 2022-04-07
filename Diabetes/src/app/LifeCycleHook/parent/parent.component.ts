import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  private myNumber : number = 10;

  get counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber = value;
  }

  addValue(){
    this.counter++
  }

  removeValue(){
    this.counter--
  }
  constructor() { }

  ngOnInit(): void {
  }

}
