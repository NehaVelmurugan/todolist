import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PromiseComponent } from './Components/promise/promise.component';
import { ObservableComponent } from './Components/Observables/observable/observable.component';
import { ListComponent } from './Components/Observables/observableChildComponents/list/list.component';
import { FormEventComponent } from './Components/Observables/observableChildComponents/form-event/form-event.component';
import { OfFromComponent } from './Components/Observables/observableChildComponents/of-from/of-from.component';
import { ToArrayComponent } from './Components/Observables/observableChildComponents/to-array/to-array.component';
import { ASyncSubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/replay-subject/replay-subject.component';
import { SubjectComponent } from './Components/Observables/observableChildComponents/Subject/childSubjects/subject/subject.component';
import { SubjectOutsideComponent } from './Components/Observables/observableChildComponents/Subject/Subjectoutside/subject.component';
import { Comp1Component } from './Components/Observables/observableChildComponents/Subject/childSubjects/behavior-subject/comp1/comp1.component';
import { Comp2Component } from './Components/Observables/observableChildComponents/Subject/childSubjects/behavior-subject/comp2/comp2.component';
import { Comp3Component } from './Components/Observables/observableChildComponents/Subject/childSubjects/behavior-subject/comp3/comp3.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FormEventComponent,
    OfFromComponent,
    ToArrayComponent,
    SubjectComponent,
    SubjectOutsideComponent,
    BehaviorSubjectComponent,
    ASyncSubjectComponent,
    ReplaySubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
