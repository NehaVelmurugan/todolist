import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/Reducer/Action/counter.action';

@Component({
  selector: 'app-my-counter',
  template: `
    <div>
      <h3>Current Count: {{count$|async}}</h3>
      <button class="btn btn-primary" (click)="increment()">Increment</button>&nbsp;
      <button class="btn btn-success" (click)="decrement()">Decrement</button>&nbsp;
      <button class="btn btn-danger" (click)="reset()">Reset</button>&nbsp;
    </div>
  `,
  styles: [
  ]
})
export class MyCounterComponent implements OnInit {

  count$ : Observable<number> | any;
  
  constructor(private store:Store<{count:number}>) {
    // TODO: Connect 'this.count$' stream to current store 'count' state.
    this.count$ =this.store.select('count');
  }
   increment(){
     // TODO : Dispatch an increment action..
     this.store.dispatch(increment())
   }
   decrement(){
     // TODO : Dispatch an decrement action...
     this.store.dispatch(decrement())
   }
   reset(){
     // TODO : Dispatch an reset action...
     this.store.dispatch(reset())
   }

  ngOnInit(): void {
  }

}
