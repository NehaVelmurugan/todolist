import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { routerLinks } from './app-routing.module';
import { DiaBetesTypeComponent } from './Items/DiaBatesType/dia-betes-type/dia-betes-type.component';
import { ChildComponent } from './LifeCycleHook/child/child.component';
import { ParentComponent } from './LifeCycleHook/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   routerLinks,
   DiaBetesTypeComponent,
   ChildComponent,
   ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
