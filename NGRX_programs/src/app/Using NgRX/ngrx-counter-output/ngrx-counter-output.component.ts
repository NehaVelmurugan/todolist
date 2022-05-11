import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { CounterState } from '../State/rgrx-counter.state';

@Component({
  selector: 'app-ngrx-counter-output',
  templateUrl: './ngrx-counter-output.component.html',
  styleUrls: ['./ngrx-counter-output.component.css']
})
export class NgrxCounterOutputComponent implements OnInit {

  counterValue:any;
  changeChannelName:any

  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      this.counterValue = data;
    })
    
  }

}
