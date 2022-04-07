import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Items/about/about.component';
import { ContactComponent } from './Items/contact/contact.component';
import { DiaBetesTypeComponent } from './Items/DiaBatesType/dia-betes-type/dia-betes-type.component';
import { HomeComponent } from './Items/home/home.component';
import { MedicinesComponent } from './Items/medicines/medicines.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path : '', redirectTo:'home', pathMatch:'full'},
  // {path : 'home', component : HomeComponent},
  // {path : 'diabetesType/:name', component : DiaBetesTypeComponent},
  // {path : 'medicines', component : MedicinesComponent},
  // {path : 'about', component : AboutComponent},
  // {path : 'contact', component : ContactComponent},
  // {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerLinks = [HomeComponent, MedicinesComponent, AboutComponent, ContactComponent, PageNotFoundComponent]
