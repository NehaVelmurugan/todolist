import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './Components/Observables/observable/observable.component';
import { FormEventComponent } from './Components/Observables/observableChildComponents/form-event/form-event.component';
import { ListComponent } from './Components/Observables/observableChildComponents/list/list.component';
import { OfFromComponent } from './Components/Observables/observableChildComponents/of-from/of-from.component';
import { ASyncSubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/replay-subject/replay-subject.component';
import { SubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/subject/subject.component';
import { SubjectOutsideComponent } from './Components/Observables/observableChildComponents/Subject/Subjectoutside/subject.component';
import { ToArrayComponent } from './Components/Observables/observableChildComponents/to-array/to-array.component';
import { PromiseComponent } from './Components/promise/promise.component';

const routes: Routes = [
  {path:" ", redirectTo:'promise', pathMatch:'full'},
  {path:'promise', component:PromiseComponent},
  {path:'Observable', component:ObservableComponent , children:[
    {path:'', component:ListComponent},
    {path:'formEvent', component:FormEventComponent},
    {path :'ofFrom', component:OfFromComponent},
    {path : 'to-array', component:ToArrayComponent},
    {path : 'subject', component:SubjectComponent , children:[
      {path : '', component:SubjectOutsideComponent},
      {path : 'behavior', component:BehaviorSubjectComponent},
      {path : 'async', component:ASyncSubjectComponent},
      {path : 'replay-subject', component:ReplaySubjectComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
