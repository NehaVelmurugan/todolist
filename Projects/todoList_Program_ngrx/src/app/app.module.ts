import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TodoListReducer } from './State/reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffect } from './State/effects';
import { AppService } from './State/Services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      rootState: TodoListReducer}),
    EffectsModule.forRoot([StoreEffect])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
