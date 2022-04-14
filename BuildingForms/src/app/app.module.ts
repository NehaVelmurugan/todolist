import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlFormsComponent } from './control-forms/control-forms.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormProgramComponent } from './reactive-form-program/reactive-form-program.component';


@NgModule({
  declarations: [
    AppComponent,
    ControlFormsComponent,
    ContactFormComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    LoginComponent,
    ReactiveFormComponent,
    LoginFormComponent,
    ReactiveFormProgramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
