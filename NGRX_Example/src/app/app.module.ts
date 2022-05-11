import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { fromStore } from '.';
import { AppService } from './app.services';



@NgModule({
  imports:      [ BrowserModule.withServerTransition({ appId: 'serverApp' }),
   FormsModule,
   EffectsModule.forRoot([fromStore.StoreEffects]),
    StoreModule.forRoot({
      rootState: fromStore.storeReducer
    }),
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
