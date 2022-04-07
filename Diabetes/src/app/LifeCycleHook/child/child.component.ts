import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() public myNumber: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue : SimpleChange = changes['myNumber']; //doubt
    console.log(`ngOnChanges() -> previous Value =  ${currentValue.previousValue}`);
    console.log(`ngOnChanges() -> current Value =  ${currentValue.currentValue}`);
    console.log(`ngOnChanges() -> firstChange Value =  ${currentValue.firstChange}`);
    // console.log(`ngOnChanges() -> isFirstChange Value =  ${currentValue.isFirstChange()`);
  }


  ngOnInit(): void {
    console.log(`ngOnInit() -> value = ${this.myNumber}`)
  }

}
