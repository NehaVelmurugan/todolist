import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fromStore } from '.';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
}) 
export class AppComponent  {
  data$: Observable<any>;
  count$: Observable<any>;
  error$: Observable<any>;
  json = JSON;
  isError:boolean = false;
  dataId: String | any;
 constructor(private store: Store<{ rootState:fromStore.DataModel }>){
  this.data$ = this.store.select(fromStore.getCounterData) 
  this.count$ = this.store.select(fromStore.getCount);
  this.error$ = this.store.select(fromStore.getErrorData);
 } 
 //Click of get counter data
getData(){
  this.isError = false;
  this.store.dispatch(fromStore.getApiData({id: this.dataId}));
  this.store.dispatch(fromStore.countData({count: this.count$}));
}
//Click of get counter data
getError(){
this.isError = true;
  this.store.dispatch(fromStore.countData({count: this.count$}));
  this.store.dispatch(fromStore.getApiError({id: this.dataId}));
}
}


