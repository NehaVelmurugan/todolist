import { Component, OnInit } from '@angular/core';
// import { EventBinging } from './eventBinding';
 import { StringInterpoliation } from './stringInterpolation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends StringInterpoliation{

  enteredValue:any;
  onUpdateProudect(event:Event){
      console.log(event);
      this.enteredValue=(<HTMLInputElement>event.target).value;
  }

}
