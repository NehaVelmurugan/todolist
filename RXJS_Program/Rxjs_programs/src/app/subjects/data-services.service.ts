import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  sharingSubjectData$ = new Subject();
  sharingBehaviorData$ = new BehaviorSubject("Subject names");
  sharingReplayData$= new ReplaySubject();

  constructor() { }
}










