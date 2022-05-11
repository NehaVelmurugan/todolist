import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../State/ngrx-counter.action';
import { CounterState } from '../State/rgrx-counter.state';

@Component({
  selector: 'app-ngrx-counter-input',
  templateUrl: './ngrx-counter-input.component.html',
  styleUrls: ['./ngrx-counter-input.component.css']
})
export class NgrxCounterInputComponent implements OnInit {

  value:number |any;
  channelName :string |any;
  constructor(private store:Store<{counter:{counter:number, name:string}}>) { }

  ngOnInit(): void {
    
    this.store.dispatch(changeChannelName());
  }
  onAddContent(){
    this.store.dispatch(customIncrement({count:this.value}));
  }

}
