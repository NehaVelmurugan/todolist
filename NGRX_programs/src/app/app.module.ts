import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReduces } from './Reducer/counter.reducer';
import { MyCounterComponent } from './Reducer/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:counterReduces}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
