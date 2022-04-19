import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './Components/Observables/observable/observable.component';
import { FormEventComponent } from './Components/Observables/observableChildComponents/form-event/form-event.component';
import { ListComponent } from './Components/Observables/observableChildComponents/list/list.component';
import { PromiseComponent } from './Components/promise/promise.component';

const routes: Routes = [
  {path:" ", redirectTo:'promise', pathMatch:'full'},
  {path:'promise', component:PromiseComponent},
  {path:'Observable', component:ObservableComponent , children:[
    {path:'', component:ListComponent},
    {path:'formEvent', component:FormEventComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
