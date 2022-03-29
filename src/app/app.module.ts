import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { ProjectComponent } from './project/project.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { EmployeeTitlePipes } from './pipes/custom-pipe/employeeTitle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OneWayBindingComponent,
    ProjectComponent,
    PipesComponent,
    CustomPipeComponent,
    EmployeeTitlePipes
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
