import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public navData: any;
  @Input () public navList:any;// change name 
  @Output() navSelectorTab = new EventEmitter; // navItem

  getNavItem(event:Event){
    this.navSelectorTab.emit(event); 
    console.log(event)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
