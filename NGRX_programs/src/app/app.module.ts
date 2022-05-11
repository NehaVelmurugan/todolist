import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReduces } from './Reducer/counter.reducer';
import { MyCounterComponent } from './Reducer/my-counter/my-counter.component';
import { CounterComponent } from './UsingEmitter/counter/counter.component';
import { CounterButtonComponent } from './UsingEmitter/counter-button/counter-button.component';
import { CounterOutputComponent } from './UsingEmitter/counter-output/counter-output.component';
// import { counterReducer } from './UsingNGRX/counter.reducer';

import { FormsModule } from '@angular/forms';
import { NgrxCounterComponent } from './Using NgRX/ngrx-counter/ngrx-counter.component';
import { NgrxCounterButtonComponent } from './Using NgRX/ngrx-counter-button/ngrx-counter-button.component';
import { NgrxCounterOutputComponent } from './Using NgRX/ngrx-counter-output/ngrx-counter-output.component';
import { counterReducer } from './Using NgRX/State/ngrx-counter.reducer';
import { NgrxCounterInputComponent } from './Using NgRX/ngrx-counter-input/ngrx-counter-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    NgrxCounterComponent,
    NgrxCounterButtonComponent,
    NgrxCounterOutputComponent,
    NgrxCounterInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({/* counter:counterReduces */ counter:counterReducer}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
