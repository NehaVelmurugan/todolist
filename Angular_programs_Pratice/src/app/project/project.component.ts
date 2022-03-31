import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  @Input() public navData: any; 

  @Output() public navSelector= new EventEmitter(); 

  
  childClickEvent(event:Event){
    // for(let i=0; i<this.childData.length;i++){
    // // this.navSelector.emit(this.childData[i].output);
    // console.log(this.childData[i].output);
    // }
    this.navSelector.emit(event);
    console.log(event)
  }

  // firstChild(){
  //   this.navSelector.emit("Welcome to Home Page")
  // }
  // secondChild(){
  //   this.navSelector.emit("Welcome to About Page")
  // }
  // thirdChild(){
  //   this.navSelector.emit("contact is saved successfully");
  // }
  // parentForth(){
  //   this.navSelector.emit("Successfully Login");
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
