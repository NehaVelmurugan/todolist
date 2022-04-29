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
import { CountersComponent } from './UsingNGRX/counters.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:counterReduces, /*counter:counterReducer*/}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
