import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CombineLatestComponent } from './subjects/combine-latest/combine-latest.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ConcatComponent } from './subjects/concat/concat.component';
import { Component1Component } from './subjects/component1/component1.component';
import { Component2Component } from './subjects/component2/component2.component';
import { Component3Component } from './subjects/component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    NavbarComponent,
    CombineLatestComponent,
    SubjectsComponent,
    ConcatComponent,
    Component1Component,
    Component2Component,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
