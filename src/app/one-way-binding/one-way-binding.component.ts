import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css'],
})
export class OneWayBindingComponent implements OnInit {
  // frd = { id: 1, name: 'John', salary: 12000 };
  // status = false;
  // status1 = false;
  // className = 'propertyBinding';
  // className1 = 'attributeBinding';


  // @Output() public childName = new EventEmitter();

  // childData(){
  //   this.childName.emit("This is My App");
  // }


  // constructor() {
  //   setTimeout(() => {
  //     this.status = false;
  //   }, 2000);
  // }

  ngOnInit(): void {}
}
