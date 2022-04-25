import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestComponent } from './subjects/combine-latest/combine-latest.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ConcatComponent } from './subjects/concat/concat.component';

const routes: Routes = [
  {path : "", redirectTo:'rxjs', pathMatch:"full"},
  {path : 'rxjs', component:RxjsComponent},
  {path : 'subjects', component:SubjectsComponent},
  {path : 'subjects/combineLatest', component:CombineLatestComponent},
  {path : 'subjects/concat', component:ConcatComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
