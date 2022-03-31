import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VegetableListService } from './vegetable-list.service';
import { HttpClientModule } from '@angular/common/http';
import { VegetableComponent } from './vegetable/vegetable.component';
import { FruitsComponent } from './fruits/fruits.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VegetableComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VegetableListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
