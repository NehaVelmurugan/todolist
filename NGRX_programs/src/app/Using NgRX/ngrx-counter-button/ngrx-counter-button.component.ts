import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementValue, incrementValue, resetValue } from '../State/ngrx-counter.action';

@Component({
  selector: 'app-ngrx-counter-button',
  templateUrl: './ngrx-counter-button.component.html',
  styleUrls: ['./ngrx-counter-button.component.css']
})
export class NgrxCounterButtonComponent implements OnInit {
  
  constructor(private store:Store<{counter:{counter:number};}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
    })
  }
  increment(){
    this.store.dispatch(incrementValue());
  }
  decrement(){
    this.store.dispatch(decrementValue());
  }
  reset(){
    this.store.dispatch(resetValue());
  }

}
