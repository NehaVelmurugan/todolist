import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AboutComponent } from './navbar_Properties/about/about.component';
import { ContactComponent } from './navbar_Properties/contact/contact.component';
import { HomeComponent } from './navbar_Properties/home/home.component';
import { LoginPageComponent } from './navbar_Properties/login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path :'', redirectTo : "/home", pathMatch :'full'},
  {path : 'home', component : HomeComponent},
  {path : 'department/:id',component : DepartmentDetailsComponent},
  {path : 'about', component: AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'loginPage', component: LoginPageComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, ContactComponent, LoginPageComponent, PageNotFoundComponent, DepartmentDetailsComponent]
