import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OneWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
