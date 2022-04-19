import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PromiseComponent } from './Components/promise/promise.component';
import { ObservableComponent } from './Components/Observables/observable/observable.component';
import { ListComponent } from './Components/Observables/observableChildComponents/list/list.component';
import { FormEventComponent } from './Components/Observables/observableChildComponents/form-event/form-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FormEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
