import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/Action/counter.action';

@Component({
  selector: 'app-my-counter',
  template: `
   <button class="btn btn-primary" (click)="increment()">Increment</button>
   <div>Current Count: {{count$ | async}}</div>
   <button class="btn btn-success" (click)="decrement()">Decrement</button>
   <button class="btn btn-danger" (click)="reset()">Reset</button>
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
