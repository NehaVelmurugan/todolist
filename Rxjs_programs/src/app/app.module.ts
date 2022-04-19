import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CombineLatestComponent } from './subjects/combine-latest/combine-latest.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ConcatComponent } from './subjects/concat/concat.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    NavbarComponent,
    CombineLatestComponent,
    SubjectsComponent,
    ConcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
